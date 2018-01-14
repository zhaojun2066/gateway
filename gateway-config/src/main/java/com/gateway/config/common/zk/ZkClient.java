package com.gateway.config.common.zk;

import com.gateway.config.common.Config;
import com.gateway.config.common.CommonUtil;
import org.apache.curator.framework.CuratorFramework;
import org.apache.curator.framework.CuratorFrameworkFactory;
import org.apache.curator.framework.recipes.cache.*;
import org.apache.curator.utils.CloseableUtils;
import org.apache.zookeeper.CreateMode;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

/**
 *
 */
public class ZkClient {


    private static final ZkClient zk = new ZkClient();

    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    private CuratorFramework client;

    private ConcurrentHashMap<String,PathChildrenCache> pathChildrenCacheMap = new ConcurrentHashMap<String, PathChildrenCache>();
    private ConcurrentHashMap<String,NodeCache> nodeCacheMap = new ConcurrentHashMap<String, NodeCache>();
    private TreeCache treeCache;
    private ZkClient() {
        client = CuratorFrameworkFactory.builder().connectString(Config.zkAddress)
                .sessionTimeoutMs(8000).connectionTimeoutMs(8000).build();
       // client = CuratorFrameworkFactory.newClient(zkAddress,
        //        new RetryNTimes(10, 5000));
        client.start();
    }

    public static ZkClient getInstance(){
        return zk;
    }


    public void stop() {
        if (client != null) CloseableUtils.closeQuietly(client);
        if (!CommonUtil.isEmpty(pathChildrenCacheMap)){
            for (Map.Entry<String, PathChildrenCache> entry : pathChildrenCacheMap.entrySet()) {
                PathChildrenCache pathChildrenCache = entry.getValue();
                if (pathChildrenCache != null){
                    CloseableUtils.closeQuietly(pathChildrenCache);
                }
            }
        }

        if (!CommonUtil.isEmpty(nodeCacheMap)){
            for (Map.Entry<String, NodeCache> entry : nodeCacheMap.entrySet()) {
                NodeCache nodeCache = entry.getValue();
                if (nodeCache != null){
                    CloseableUtils.closeQuietly(nodeCache);
                }
            }
        }

        if (treeCache != null) CloseableUtils.closeQuietly(treeCache);
    }

    /**
     * @param zkpath
     * @param data
     */
    public void createEphemeral(String zkpath,String data){
        try {
            client.create().creatingParentsIfNeeded().withMode(CreateMode.EPHEMERAL).forPath(zkpath,data.getBytes("utf-8"));
        } catch (Exception e) {
            e.printStackTrace();
        }
    }


    /*
    *  设置Path Cache, 监控本节点的子节点被创建,更新或者删除，注意是子节点, 子节点下的子节点不能递归监控
    *  事件类型有3个, 可以根据不同的动作触发不同的动作
    *  本例子只是演示, 所以只是打印了状态改变的信息, 并没有在PathChildrenCacheListener中实现复杂的逻辑
    *  @Param path 监控的节点路径, cacheData 是否缓存data
    *  可重入监听
    * */
    public void setPathCacheListener(String path,final IChildrenListener childrenListener) {
        try {
            PathChildrenCache pathChildrenCache = new PathChildrenCache(client,path,true);
            //如果（调用该方法时）key-value 已经存在，则返回那个 value 值。如果调用时 map 里没有找到 key 的 mapping，返回一个 null 值
            PathChildrenCache _pathChildrenCache = pathChildrenCacheMap.putIfAbsent(
                    path,pathChildrenCache);
            if (_pathChildrenCache!=null){
                pathChildrenCache = _pathChildrenCache;
            }
            PathChildrenCacheListener childrenCacheListener = new PathChildrenCacheListener() {
                public void childEvent(CuratorFramework client, PathChildrenCacheEvent event) {
                    ChildData data = event.getData();
                    switch (event.getType()) {
                        case CHILD_ADDED:
                            logger.info("子节点增加, path={}, data={}", data.getPath(), data.getData());
                            childrenListener.add(data.getPath(),data.getData());
                            break;
                        case CHILD_UPDATED:
                            logger.info("子节点更新, path={}, data={}", data.getPath(), data.getData());
                            childrenListener.update(data.getPath(),data.getData());
                            break;
                        case CHILD_REMOVED:
                            logger.info("子节点删除, path={}, data={}", data.getPath(), data.getData());
                            childrenListener.remove(data.getPath(),data.getData());
                            break;
                        default:
                            break;
                    }
                }
            };
            pathChildrenCache.getListenable().addListener(childrenCacheListener);

            //防止启动重复
            synchronized (this){
                if (_pathChildrenCache==null){
                    pathChildrenCache.start(PathChildrenCache.StartMode.POST_INITIALIZED_EVENT);
                }
            }


        } catch (Exception e) {
            logger.error("PathCache监听失败, path=", path);
        }

    }

    /*
   *  设置Node Cache, 监控本节点的新增,删除,更新
   *  节点的update可以监控到, 如果删除会自动再次创建空节点
   *  本例子只是演示, 所以只是打印了状态改变的信息, 并没有在NodeCacheListener中实现复杂的逻辑
   *  @Param path 监控的节点路径, dataIsCompressed 数据是否压缩
   *  不可重入监听
   * */
    public void setNodeCacheListener(String path) {
        try {
            final  NodeCache s ;
             NodeCache nodeCache = new NodeCache(client,path,true);
            //如果（调用该方法时）key-value 已经存在，则返回那个 value 值。如果调用时 map 里没有找到 key 的 mapping，返回一个 null 值
              NodeCache _nodeCache = nodeCacheMap.putIfAbsent(
                    path,nodeCache);
            if (_nodeCache!=null){
                s = _nodeCache;
            }else {
                s = nodeCache;
            }
            NodeCacheListener nodeCacheListener = new NodeCacheListener() {
                public void nodeChanged() throws Exception {
                    ChildData childData = s.getCurrentData();
                    logger.info("ZNode节点状态改变, path={}", childData.getPath());
                    logger.info("ZNode节点状态改变, data={}", childData.getData());
                    logger.info("ZNode节点状态改变, stat={}", childData.getStat());
                }
            };
            nodeCache.getListenable().addListener(nodeCacheListener);
            //防止启动重复
            synchronized (this){
                if (_nodeCache==null){
                    nodeCache.start();
                }
            }
        } catch (Exception e) {
            logger.error("创建NodeCache监听失败, path={}", path);
        }
    }

    /*
    *  设置Tree Cache, 监控本节点的新增,删除,更新
    *  节点的update可以监控到, 如果删除不会自动再次创建
    *  本例子只是演示, 所以只是打印了状态改变的信息, 并没有在NodeCacheListener中实现复杂的逻辑
    *  @Param path 监控的节点路径, dataIsCompressed 数据是否压缩
    *  可重入监听
    * */
    public void setTreeCacheListener(final String path) {
        /*try {
            treeCache = new TreeCache(client, path);
            TreeCacheListener treeCacheListener = new TreeCacheListener() {
                public void childEvent(CuratorFramework client, TreeCacheEvent event) throws Exception {
                    ChildData data = event.getData();
                    if(data != null){
                        switch (event.getType()) {
                            case NODE_ADDED:
                                logger.info("[TreeCache]节点增加, path={}, data={}", data.getPath(), data.getData());
                                break;
                            case NODE_UPDATED:
                                logger.info("[TreeCache]节点更新, path={}, data={}", data.getPath(), data.getData());
                                break;
                            case NODE_REMOVED:
                                logger.info("[TreeCache]节点删除, path={}, data={}", data.getPath(), data.getData());
                                break;
                            default:
                                break;
                        }
                    }else{
                        logger.info("[TreeCache]节点数据为空, path={}", data.getPath());
                    }
                }
            };
            treeCache.getListenable().addListener(treeCacheListener);
            treeCache.start();
        } catch (Exception e) {
            logger.error("创建TreeCache监听失败, path={}", path);
        }*/

    }

    /**
     *
     * @param zkpath
     * @param data
     */
    public void createPersistent(String zkpath,String data) throws Exception {
        if(client.checkExists().forPath(zkpath)==null){
            client.create().creatingParentsIfNeeded().withMode(CreateMode.PERSISTENT).forPath(zkpath,data.getBytes("utf-8"));
        }
    }

    public void createPersistent(String zkpath){
        try {
            if(client.checkExists().forPath(zkpath)==null){
                client.create().creatingParentsIfNeeded().withMode(CreateMode.PERSISTENT).forPath(zkpath);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void deletePath(String path) throws Exception {
        client.delete().forPath(path);
    }

    public  boolean exits(String path){
        try {
            if(client.checkExists().forPath(path)==null){
                return  false;
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        return true;
    }


    public String getData(String path){
        try {
          byte [] d =  client.getData().forPath(path);
          if (d!=null){
              return new String(d,"utf-8");
          }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    public List<String> getChild(String path){
        try {
          List<String> childPaths = client.getChildren().forPath(path);
          return childPaths;
        } catch (Exception e) {
            e.printStackTrace();
        }

        return null;
    }


}

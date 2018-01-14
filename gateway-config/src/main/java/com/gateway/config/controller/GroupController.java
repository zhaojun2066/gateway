package com.gateway.config.controller;

import com.gateway.config.common.CommonUtil;
import com.gateway.config.common.Config;
import com.gateway.config.domain.Group;
import com.gateway.config.common.zk.ZkClient;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.ArrayList;
import java.util.List;

/**
 * @User: jufeng
 * @Date: 18-1-14
 * @Time: 上午11:41
 * /groups/group
 * value: {Group json}
 **/
@Controller
@RequestMapping("/group")
public class GroupController {

    private ZkClient zkClient = ZkClient.getInstance();


    @RequestMapping("/index")
    public String index(Model model){
        List<Group>  groups = new ArrayList<Group>();
        List<String> childs = zkClient.getChild(Config.GROUP_PATH);
        if (!CommonUtil.isEmpty(childs)){
            for (String namePath: childs){
                String data = zkClient.getData(namePath);
                if (!CommonUtil.isNullString(data)){
                    Group group= CommonUtil.parseObject(data,Group.class);
                    groups.add(group);
                }
            }
        }
        model.addAttribute("groups", groups);
        return "group/index";
    }


    @RequestMapping("/toAdd")
    public String toAdd(){
        return "group/add";
    }

    public String toUpdate(Model model,String name){
        List<String> childs = zkClient.getChild(Config.GROUP_PATH);
        if (!CommonUtil.isEmpty(childs)){
            for (String namePath: childs){
                String data = zkClient.getData(namePath);
                if (!CommonUtil.isNullString(data)){
                    Group group= CommonUtil.parseObject(data,Group.class);
                    if (name.equals(group.getName())){
                        model.addAttribute("group", group);
                        break;
                    }
                }
            }
        }
        return "group/update";
    }

    @RequestMapping("/add")
    public boolean add(Group group){
        String name = group.getName();
        String data = CommonUtil.objectToJson(group);
        String path = Config.GROUP_PATH+"/"+name;
        if (zkClient.exits(path)){
            return false;
        }
        try {
            zkClient.createPersistent(path,data);
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
        return true;
    }

    @RequestMapping("/delete")
    public boolean delete(String name){
        String path = Config.GROUP_PATH+"/"+name;
        try {
            zkClient.deletePath(path);
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
        return true;
    }


}

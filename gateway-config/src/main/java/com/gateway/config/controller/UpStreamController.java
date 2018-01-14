package com.gateway.config.controller;

import com.gateway.config.domain.UpStream;

import java.util.List;

/**
 * @User: jufeng
 * @Date: 18-1-14
 * @Time: 上午11:46
 * /group/upstreamConfig/groupName
 * value group Json
 *
 *  started tomcat register zookeeper to the path
 * /group/upstreams/upstreamName
 * value: ip port json
 **/
public class UpStreamController {
    public List<UpStream> index(String group){

        return null;
    }

    public boolean add(UpStream upStream){

        return true;
    }

    //name 不能修改
    public boolean update(UpStream upStream){

        return true;
    }

    public boolean delete(String name){

        return true;
    }

}

package com.gateway.config.domain;

import java.util.Map;

/**
 * @User: jufeng
 * @Date: 18-1-14
 * @Time: 下午5:42
 **/
public class Info {

    private Map<String,Group> groups; // key groupName, value Group

    private Map<String,UpStream> upStreams;//key upStreamName

    private Map<String,Method> methods;//key Method name

    private Map<String,String> whiteips; //


    private Map<String,String> blackips; //黑名单ip List




    public Map<String, Group> getGroups() {
        return groups;
    }

    public void setGroups(Map<String, Group> groups) {
        this.groups = groups;
    }

    public Map<String, UpStream> getUpStreams() {
        return upStreams;
    }

    public void setUpStreams(Map<String, UpStream> upStreams) {
        this.upStreams = upStreams;
    }

    public Map<String, Method> getMethods() {
        return methods;
    }

    public void setMethods(Map<String, Method> methods) {
        this.methods = methods;
    }
}

package com.gateway.config.controller;

import com.gateway.config.domain.Method;

import java.util.List;

/**
 * @User: jufeng
 * @Date: 18-1-14
 * @Time: 上午11:46
 *
 * /gateway/group/methods/[methodName]
 * value method json
 **/
public class MethodController {

    public List<Method> index(String group){

        return null;
    }

    public boolean add(Method method){

        return true;
    }

    //name 不能修改
    public boolean update(Method method){

        return true;
    }

    public boolean delete(String name){

        return true;
    }

}

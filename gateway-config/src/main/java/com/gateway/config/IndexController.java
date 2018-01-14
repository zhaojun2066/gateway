package com.gateway.config;


import com.gateway.config.domain.Info;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;


/**
 * Created by zhaojun on 16/11/2
 *
 */



@Controller
public class IndexController {



    private static final Logger log = LoggerFactory.getLogger(IndexController.class);


    @RequestMapping("/")
    public String index(Model model){
        return "index";
    }

    @RequestMapping("/toLogin")
    public String toLogin(Model model){
        return "login";
    }

    @RequestMapping("/logOut")
    public String logOut(HttpServletRequest httpServletRequest, Model model){
        return "login";
    }

    @RequestMapping("/login")
    public String login(Model model, HttpServletRequest httpServletRequest, String username, String password){
        return "index";
    }


    @RequestMapping("/getInfo")
    public @ResponseBody Info getInfo(){

        //todo: get from zookeeper
        return null;
    }

}

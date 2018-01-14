package com.gateway.config;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

/**
 * Created by zhaojun on 16/11/2.
 *
 */


@Configuration
@ComponentScan
@EnableAutoConfiguration
public class GatewayManager {

    public static void main(String [] args){
        SpringApplication.run(GatewayManager.class, args);

    }
}

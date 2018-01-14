package com.gateway.config.domain;

/**
 * @User: jufeng
 * @Date: 18-1-14
 * @Time: 下午10:33
 **/
public class Server {
    private String address;

    private int port;

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public int getPort() {
        return port;
    }

    public void setPort(int port) {
        this.port = port;
    }
}

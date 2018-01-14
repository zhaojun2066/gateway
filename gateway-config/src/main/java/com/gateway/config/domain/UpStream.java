package com.gateway.config.domain;

import java.util.List;

/**
 * @User: jufeng
 * @Date: 18-1-14
 * @Time: 上午11:13
 **/
public class UpStream {
    private String name;
    private LimitTraffic limitTraffic;
    private String  balancer;//"rr"
    private List<Server> servers;

    public List<Server> getServers() {
        return servers;
    }

    public void setServers(List<Server> servers) {
        this.servers = servers;
    }

    public String getBalancer() {
        return balancer;
    }

    public void setBalancer(String balancer) {
        this.balancer = balancer;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public LimitTraffic getLimitTraffic() {
        return limitTraffic;
    }

    public void setLimitTraffic(LimitTraffic limitTraffic) {
        this.limitTraffic = limitTraffic;
    }
}

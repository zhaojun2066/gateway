package com.gateway.config.domain;

/**
 * @User: jufeng
 * @Date: 18-1-14
 * @Time: 上午11:13
 **/
public class Method {

    private Group group;
    private String method;
    private String url;
    private String upStreamName;
    private LimitTraffic limitTraffic;// 单机 or 分布式 并发限流
    private boolean enable;//是否启用

    public boolean isEnable() {
        return enable;
    }

    public void setEnable(boolean enable) {
        this.enable = enable;
    }

    public Group getGroup() {
        return group;
    }

    public void setGroup(Group group) {
        this.group = group;
    }

    public String getMethod() {
        return method;
    }

    public void setMethod(String method) {
        this.method = method;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }


    public String getUpStreamName() {
        return upStreamName;
    }

    public void setUpStreamName(String upStreamName) {
        this.upStreamName = upStreamName;
    }

    public LimitTraffic getLimitTraffic() {
        return limitTraffic;
    }

    public void setLimitTraffic(LimitTraffic limitTraffic) {
        this.limitTraffic = limitTraffic;
    }
}

package com.gateway.config.domain;

/**
 * @User: jufeng
 * @Date: 18-1-14
 * @Time: 上午11:12
 **/
public class Group {
    private String name;
    private String remark;

   // private LimitTraffic limitTraffic;//组级别的限流

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRemark() {
        return remark;
    }

    public void setRemark(String remark) {
        this.remark = remark;
    }
/* public LimitTraffic getLimitTraffic() {
        return limitTraffic;
    }

    public void setLimitTraffic(LimitTraffic limitTraffic) {
        this.limitTraffic = limitTraffic;
    }*/
}

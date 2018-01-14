package com.gateway.config.domain;

/**
 * @User: jufeng
 * @Date: 18-1-14
 * @Time: 上午11:07
 **/
public class LimitTraffic {
    private Integer limitCat; // 1 分布式 2 单机
    private Traffic traffic;//限流唯独
    private int rate;
    private int burst;
    private boolean enable;//是否启用

    public int getRate() {
        return rate;
    }

    public void setRate(int rate) {
        this.rate = rate;
    }

    public int getBurst() {
        return burst;
    }

    public void setBurst(int burst) {
        this.burst = burst;
    }

    public Integer getLimitCat() {
        return limitCat;
    }

    public void setLimitCat(Integer limitCat) {
        this.limitCat = limitCat;
    }



    public boolean isEnable() {
        return enable;
    }

    public void setEnable(boolean enable) {
        this.enable = enable;
    }

    public Traffic getTraffic() {
        return traffic;
    }

    public void setTraffic(Traffic traffic) {
        this.traffic = traffic;
    }
}

package com.gateway.config.common.zk;

public interface IChildrenListener {
    void add(String path, byte[] data);

    void update(String path, byte[] data);

    void remove(String path, byte[] data);
}

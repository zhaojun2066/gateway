--
-- Created by IntelliJ IDEA.
-- User: jufeng
-- Date: 18-1-14
-- Time: 下午8:25
-- To change this template use File | Settings | File Templates.
--

local log = ngx.log
local ERR = ngx.ERR

local config = require("custom.config")
local local_limit = require("custom.local_limit_traffic")
local json = require("cjson.safe")
local http = require "resty.http"

local httpc = http.new()
local res, err = httpc:request_uri(config.INFO_ADDRESS,{method="get"})

if not res then
    log(ERR,"get api config err , ",err)
    return
end

local c = res.body
if not c then
    log(ERR,"get api config is empty")
    return
end
local config = json.decode(c)
local shared_config_cache = ngx.shared.my_cache_config


local groups = config.groups
if groups then
    shared_config_cache:set("groups",json.encode(groups),0);
end

local upstreams = config.upStreams

if upstreams then
    shared_config_cache:set("upstreams",json.encode(upstreams),0);
    --todo:初始化限流参数到redis
    --
    local_limit.init(upstreams)

end


local methods = config.methods

if methods then
    shared_config_cache:set("methods",json.encode(methods),0);
    --todo:初始化限流参数到redis
    local_limit.init(upstreams)
end



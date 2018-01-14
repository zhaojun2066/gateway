-- waf



-- limit_traffic
local ngx = ngx
local json = require("cjson.safe")
local local_limit = require("custom.local_limit_traffic")

local get_args = ngx.req.get_uri_args()
local method_name = get_args["m"]

if not method_name then
   --todo set err response
    return
end

--local v = get_args["v"]
--local data = get_args["data"]

local shared_config_cache = ngx.shared.my_cache_config

local methods = json.decode(shared_config_cache.get("methods"))
local m = methods[method_name]
if not m then
    --todo set err response
    return
end

local upstream_name = m.upStreamName

if not upstream_name then
    --todo set err response
    return
end

local method_limit_traffic = m.limitTraffic
local method_enable = m.enable

if not method_enable then
    --todo set err response
    return
end

local upstreams = json.decode(shared_config_cache.get("upstreams"))
local upstream = upstreams[upstream_name]
if not upstream then
    --todo set err response
    return
end
local upstream_limit_traffic = upstream.limitTraffic
--todo: upstream limit
if upstream_limit_traffic and upstream_limit_traffic.enable then
   local limit_cat =  upstream_limit_traffic.limitCat
   local traffic = upstream_limit_traffic.traffic
    if limit_cat and limit_cat==2 then
       local key
       if traffic=='IP' then
           key = ngx.var.binary_remote_addr
       end
       if traffic=='ALL' then
           key = 'all'
       end
       local_limit.incoming(upstream_name,key);
    end

    ---redis options
    if limit_cat and limit_cat==1 then

    end
end

--todo : method limit

if method_limit_traffic and method_limit_traffic.enable then
    local limit_cat =  method_limit_traffic.limitCat
    local traffic = method_limit_traffic.traffic
    if limit_cat and limit_cat==2 then
        local key
        if traffic=='IP' then
            key = ngx.var.binary_remote_addr
        end
        if traffic=='ALL' then
            key = 'all'
        end
        local_limit.incoming(method_name,key);
    end

    ---redis options
    if limit_cat and limit_cat==1 then

    end
end


-- 动态设置upstream




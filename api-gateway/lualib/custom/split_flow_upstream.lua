--动态get upstream server list

local json = require("cjson.safe")
local balancer = require("ngx.balancer")

local ngx = ngx
local log = ngx.log
local ERR = ERR
local abs = math.abs
local shared_config_cache = ngx.shared.my_cache_config


local uri_args = ngx.req.get_uri_args()
if not uri_args then
    --todo set err response
    return
end
local method_name = uri_args["m"]
if not method_name then
    --todo set err response
    return
end
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
local upstreams = json.decode(shared_config_cache.get("upstreams"))
local upstream = upstreams[upstream_name]

if upstream then
    local servers = upstream.servers
    local upstream_balancer = upstream.balancer
    if not  upstream_balancer or upstream_balancer =="rr" then
        local len = #servers
        local pre = shared_config_cache:incr("index_"..upstream_name,1,1)
        log(ERR,"debug_len-> ",len)
        log(ERR,"debug_pre-> ",pre)
        local index = abs(pre) % len
        log(ERR,"debug_index-> ",index)
        local server = servers[index+1]
        local ip = server.ip
        local port = server.port
        log(ERR,"debug_ip-> ",ip)
        log(ERR,"debug_port-> ",port)
        balancer.set_current_peer(ip,port)
    end
end
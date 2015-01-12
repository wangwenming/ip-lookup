# IP地址到物理地址的查询服务
## 示例
```
var IpLookup = require('./');
var ipLookup = new IpLookup('./ip.sample.txt');

// country = 未知
// province = 未知
// city = 未知
// area = 未知
// address = 保留地址
// isp = 未知
var address = ipLookup.lookup('127.0.0.1');

// country = 中国
// province = 广东省
// city = 未知
// area = 未知
// address = 未知
// isp = 电信
var address = ipLookup.lookup('125.88.193.243');
```
// 对于在 IP 库查询不到的，返回 false
var address = ipLookup.lookup('180.149.156.149');

## NOTE
请自己下载IP库，ip.sample.txt 只是一个示例的IP库
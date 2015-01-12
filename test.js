var expect = require("chai").expect;

describe("ip-lookup", function() {
    var IpLookup = require('./');
    var ipLookup = new IpLookup('./ip.sample.txt');

    it("127.0.0.1 should return 保留地址", function() {
        var address = ipLookup.lookup('127.0.0.1');

        expect(address.address).to.equal("保留地址");
    });

    it("192.168.0.1 should return 本地局域网", function() {
        var address = ipLookup.lookup('192.168.0.1');

        expect(address.address).to.equal("本地局域网");
    });

    it("220.181.111.188 should return country=中国,province=北京市,isp=电信", function() {
        var address = ipLookup.lookup('220.181.111.188');

        expect(address.country).to.equal("中国");
        expect(address.province).to.equal("北京市");
        expect(address.isp).to.equal("电信");
    });

    it("125.88.193.243 should return country=中国,province=广东省,isp=电信", function() {
        var address = ipLookup.lookup('125.88.193.243');

        expect(address.country).to.equal("中国");
        expect(address.province).to.equal("广东省");
        // expect(address.city).to.equal("珠海市");
        expect(address.isp).to.equal("电信");
    });

    it("173.194.127.144 should return country=美国", function() {
        var address = ipLookup.lookup('173.194.127.144');

        expect(address.country).to.equal("美国");
    });

    it("1.36.255.255 should return country=中国,province=香港特别行政区", function() {
        var address = ipLookup.lookup('1.36.255.255');

        expect(address.country).to.equal("中国");
        expect(address.province).to.equal("香港特别行政区");
    });

    it("180.149.156.149 should return false", function() {
        var address = ipLookup.lookup('180.149.156.149');

        expect(address).to.equal(false);
    });
});

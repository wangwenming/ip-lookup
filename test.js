var expect = require("chai").expect;

describe("ip-lookup", function() {
    var IpLookup = require('./');
    var ipLookup = new IpLookup('./ip.txt');

    it("should return long format of string value IP", function() {
        console.log(ipLookup.lookup('127.0.0.1'));
        expect(ipLookup.lookup('127.0.0.1')).to.equal(2130706433);
    });
});
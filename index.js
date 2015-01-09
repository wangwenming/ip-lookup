var fs = require('fs');
var bs = require('bin-search');
var ip2long = require('ip2long').ip2long;

function comparator(ipLong, record) {
    if (ipLong < record[0]) {
        return -1;
    }

    if (ipLong < record[1]) {
        return 1;
    }

    return 0;
}

function IpLookup(dictPath) {
    var content = fs.readFileSync(dictPath, {
        encoding: 'utf-8'
    });
    var self = this;

    this.dict = [];
    content.split('\n').forEach(function(line) {
        self.dict.push(line.split('    '));
    });
}
IpLookup.prototype.lookup = function(ip) {
    var ipLong = ip2long(ip);

    if (ipLong < 0 || ipLong > 0xFFFFFFFF) {
        throw new Error('Bad IPv4: ' + ip);
    }

    var index = bs(this.dict, ipLong, comparator);
    if (index < 0) {
        return false;
    }

    var arr = this.dict[index];

    return {
        country: arr[2],
        province: arr[3],
        city: arr[4],
        area: arr[5],
        address: arr[6],
        isp: arr[7]
    };
}

module.exports = IpLookup;

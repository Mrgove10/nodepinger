const ping = require('ping');

const startAdress = 0
const endAdress = 255;

var hosts = [];
for (let i = startAdress; i < endAdress; i++) {
    var host = "192.168.1." + i;
    hosts.push(host);
    if (i == 254) {
        hosts.forEach(host => {
            ping.sys.probe(host, function (isAlive) {
                if (isAlive) {
                    console.log('host ' + host + ' is alive');
                }
            });
        });
    }
}
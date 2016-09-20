







//http://stackoverflow.com/questions/8165570/https-proxy-server-in-node-js
//https://github.com/nodejitsu/node-http-proxy
//https://gist.github.com/ncthis/6863947

const config = require('./server/common/config');
const https = require('https');
const fs = require('fs');
const logger = require('./server/common/logger')
const httpProxy = require('http-proxy');
const options = {
    key: fs.readFileSync(config.ssl.www.key),
    cert: fs.readFileSync(config.ssl.www.cert)
};

var proxys = httpProxy.createProxyServer({ssl:options});
logger.log('server listener port: 443');
logger.error('server err listener port: 443');
logger.warn('server warn listener port: 443');
https.createServer(options, (req, res) => {
    var hostname = req.headers.host.split(":")[0];
    proxys.web(req, res, { target: 'http://localhost:3000/'});
}).
listen(443);

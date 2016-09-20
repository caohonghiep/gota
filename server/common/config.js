const config ={
    devMode: process.env.NODE_ENV==='dev',
    services: {
        public: {
            startScript: "initPublic.js",
            port: 3001
        },
        auth: {
            startScript: "services/auth/auth.js",
            port: 3002
        },
        production: {
            startScript: "services/production/production.js",
            port: 3003
        }
    },
    ssl: {
        www: {
            key: 'ssl/www/private.key',
            cert: 'ssl/www/certificate.crt',
            ca: 'ssl/www/ca_bundle.crt'
        },
        auth: {
            key: 'ssl/auth/private.key',
            cert: 'ssl/auth/certificate.crt',
            ca: 'ssl/auth/ca_bundle.crt'
        }
    },
    log:{
        stdout: 'log/out.log',
        stderr: 'log/err.log'
    }
};
module.exports = config;

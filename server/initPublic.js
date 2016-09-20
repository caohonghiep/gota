
var compression = require('compression');
var express = require('express');
var path = require('path');
var app = express();
const config = require('./common/config');

app.use(require('node-sass-middleware')({
    src: path.join(__dirname, '../public'),
    dest: path.join(__dirname, '../public'),
    indentedSyntax: true,
    sourceMap: true
}));

app.use(compression());
app.use(express.static(path.join(__dirname, '../public')));
app.use('/client', express.static(path.join(__dirname, '../client')));
if (config.devMode) {
    app.use('/node_modules', express.static(path.join(__dirname, '../node_modules')));
    app.use('/tools', express.static(path.join(__dirname, '../tools')));
}
var port;
try{
    port=process.env.services.public.port;
}catch (e){
    port=80;
}

app.listen(port, function () {
    console.log('Public running on port: '+ port );
    console.log('Dev Mode is '+ (process.env.NODE_ENV==='dev'?'enable.':'disable.'));
});


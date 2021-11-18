const Koa = require('koa');
const http = require('http');
const https = require('https');
const app = new Koa();

app.use(async (ctx, next) => {
  ctx.body = 'Hello Worl';
});
app.keys = ['im a newer secret', 'i like turtle'];

// app.listen(3000,() => {});
http.createServer(app.callback()).listen(3000);
// 目前 https 服务尚不能用单纯的引用监听来完成
https.createServer(app.callback()).listen(3001);

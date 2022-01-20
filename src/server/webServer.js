// 引入：koa 服务
const Koa = require('koa');
// 引入：koa 路由服务
const Router = require('koa-router');
// 引入：http 服务
const http = require('http');
const https = require('https');
// 引入：node 文件读取服务
const fs = require('fs');
// 实例化 koa 应用
const app = new Koa();
// 实例化 koa 路由
const router = new Router();

// 路由测试
router.get('/', async (ctx) => {
  console.info('路由执行');
  let pageData = '';
  ctx.set('Content-Type', 'text/html;charset=utf-8');
  ctx.status = 200;
  fs.readFile('../../dist/index.html', (error, data) => {
    console.info(data.toString());
    pageData = data.toString();
  });
  ctx.body = pageData;
});

// logger 记录器：反馈哪个路径被访问
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get('X-Response-Time');
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

app.keys = ['im a newer secret', 'i like turtle'];

// 配置路由
app.use(router.routes()).use(router.allowedMethods());

// app.listen(3000,() => {});
app.listen(3000, (ctx) => {});
// http.createServer(app.callback()).listen(3000);
// 目前 https 服务尚不能用单纯的引用监听来完成
// https.createServer(app.callback()).listen(3001);

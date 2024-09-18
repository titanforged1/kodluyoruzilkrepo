const koa = require('koa');
const router = require('koa-router');

const app = new koa();
const router = new router();


router.get('/index', (ctx) => {
  ctx.body = '<h1>index sayfasına hoş geldiniz</h1>';
});


router.get('/hakkımda', (ctx) => {
  ctx.body = '<h1>hakkımda sayfasına hoş geldiniz</h1>';
});


router.get('/iletişim', (ctx) => {
  ctx.body = '<h1>iletişim sayfasına hoş geldiniz</h1>';
});


app.use(async (ctx, next) => {
  await next();
  if (ctx.status === 404) {
    ctx.body = '<h1>404 sayfa bulunamadı</h1>';
  }
});


app.use(router.routes());
app.use(router.allowedMethods());


app.listen(3000, () => {
  console.log('Server 3000 portunda çalışıyor');
});

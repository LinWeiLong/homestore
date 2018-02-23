const path = require('path');

const Koa = require('koa');
const views = require('koa-views');
const staticCache = require('koa-static-cache');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const config = require('./config/index');

/**
 * 设置缓存
 */
app.use( staticCache( path.join(__dirname, './public/images'), {dynamic: true}, {maxAge: 365 * 24 * 60 *60} ) );
app.use( staticCache( path.join(__dirname, './public/style'), {dynamic: true}, {maxAge: 365 * 24 * 60 *60} ) );
app.use( staticCache( path.join(__dirname, './public/js'), {dynamic: true}, {maxAge: 365 * 24 * 60 *60} ) );
/**
 * 设置服务端模板渲染引擎
 */
app.use(views( path.join(__dirname, './views'), {extension: 'ejs'} ));
app.use(bodyParser({
    formLimit: '1mb'
}))

app.use(require('./routers/products').routes());


app.listen(3000);
console.log(`listening on port ${config.port}`);

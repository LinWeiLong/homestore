const Koa = require('koa');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const config = require('./config/index');

app.use(bodyParser({
    formLimit: '1mb'
}))

app.use(require('./routers/products').routes());


app.listen(3000);
console.log(`listening on port ${config.port}`);

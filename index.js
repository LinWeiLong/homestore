const Koa = require('koa');
const config = require('./config');
const app = new Koa();

app.use(require('./routers/products').routes());


app.listen(3000);
console.log(`listening on port ${config.port}`);

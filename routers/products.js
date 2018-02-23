const router = require('koa-router')();
const Model = require('../lib/mysql');
router.get('/', async(ctx, next)=>{
    Model.findProduct('123').then(result=>{
        console.log(result)
    });
    ctx.body = '你好'
});
router.get('/product/code', async(ctx, next)=>{
    return '123123'
});

module.exports = router

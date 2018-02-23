const router = require('koa-router')();
const Model = require('../lib/mysql');


router.get('/', async(ctx, next)=>{
    Model.findProduct('123').then(result=>{
        console.log(result)
    });
    ctx.body = '欢迎访问'
});

router.get('/product/:code', async(ctx, next)=>{
    console.info(ctx.params);
    console.info(ctx.query);
    ctx.body = JSON.stringify({status: 'failed'})
});


router.post('/product/:code', async(ctx, next)=> {
    console.info(ctx.request.body);
    ctx.body = JSON.stringify({status: 'failed'})

})
module.exports = router;

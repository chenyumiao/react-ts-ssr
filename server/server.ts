/**
 * Created by chenyumiao on 2018/10/27.
 */
const Koa1:any = require('koa');
const path = require('path');
const staticCache  = require("koa-static-cache");
import router from './routes/index';

const app1:any = new Koa1();


app1.use(router.routes(), router.allowedMethods());
app1.use(require('koa-static')(__dirname + '../build'));
app1.use(staticCache (path.resolve(__dirname,'../build'),{
    maxAge: 365 * 24 * 60 * 60,
    gzip:true
}));
// error-handling
app1.on('error', (err, ctx) => {
    console.error('server error', err, ctx)
});


const port1:any = process.env.PORT || '3008';
app1.listen(port1, () => {
    console.log('listen on:' + port1);
});



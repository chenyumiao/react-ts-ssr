const router = require('koa-router')();
import * as React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import {Provider} from 'react-redux';
import { matchRoutes,renderRoutes} from 'react-router-config';
const path = require('path');
const fs = require('fs');

const modules:any = {};
import { routeArray } from '../../src/module1/route';
modules.module1_routeArray = routeArray;
import configureStore from '../../src/module1/store/store';
modules.module1_store=configureStore;
modules.serverPre = [{"filename":"server","path":"../../src/module1"}];

modules.serverPre.map((server)=>{
    inject(server.filename,server.path);
})
function inject(file,p){
    let dir = path.basename(p);
    console.log(('dir----'+dir));  //module1或者module2
    router.get('/'+dir, async(ctx,next) =>{
        let moduleName = path.basename(ctx.req.url);
        let router = modules[moduleName+'_routeArray'];
        let store  = (modules[moduleName+'_store'])();
        let htmlSource = fs.readFileSync('./build/'+moduleName+'.html', { encoding: 'utf-8' });
        const branch = matchRoutes(router, '/');
        const promises = branch.map(({route}) => {
            const fetch = route.component.fetch;
            return fetch instanceof Function ? fetch(store) : Promise.resolve(null)
        });
        await Promise.all(promises).catch((err)=>{
            console.log(err);
        });

        const html = ReactDOMServer.renderToString(
            <Provider store={store}>
                <StaticRouter location={ctx.url} context={{}}>
                    <div>
                        {renderRoutes(router)}
                    </div>
                </StaticRouter>
            </Provider>
        );
        let initState=JSON.stringify(store.getState());
        console.log(initState);
        let output = htmlSource.replace(/(<\/head>)/, '<script>var __INITIALSTATE__='+initState+';</script>$1');

        const body = output.replace(/(<div id=\"root\">)/, '$1'+html);
        ctx.body =body;
    });
}

export default router;
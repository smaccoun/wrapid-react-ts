import createRouter from 'router5';
import routes from './routes'
import listenersPlugin from 'router5/plugins/listeners';
import browserPlugin from 'router5/plugins/browser';
console.log(listenersPlugin)
console.log(listenersPlugin())

const options = {defaultRoute: 'ExtraPortal'}
const Router =
      createRouter(routes, options)
        .usePlugin(listenersPlugin())
        .usePlugin(browserPlugin({useHash: true}));
console.log(Router);

export default Router;

//#region Imports

import Home from 'views/in/home';
import Error from 'views/out/error';
import Login from 'views/out/login';
import ROUTE_NAME from './route-name';

//#endregion

const ROUTES = [
    {
        exact: true,
        component: Login,
        path: ROUTE_NAME.OUT.DEFAULT
    },
    {
        exact: true,
        component: Login,
        path: ROUTE_NAME.OUT.LOGIN
    },
    {
        exact: true,
        component: Login,
        path: ROUTE_NAME.OUT.HOME
    },
    {
        exact: true,
        component: Home,
        path: ROUTE_NAME.IN.HOME
    },
    {
        exact: true,
        component: Error,
        path: '*'
    }
];

export default ROUTES;

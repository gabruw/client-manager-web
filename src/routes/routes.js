//#region Imports

import Home from 'views/home';
import Error from 'views/error';
import ROUTE_NAME from './route-name';

//#endregion

const ROUTES = [
    {
        exact: true,
        component: Home,
        path: ROUTE_NAME.DEFAULT
    },
    {
        exact: true,
        component: Home,
        path: ROUTE_NAME.HOME
    }
    {
        exact: true,
        component: Error,
        path: '*'
    }
];

export default ROUTES;

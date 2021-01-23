//#region Imports

import axios from 'axios';
import ENDPOINTS from './endpoint';

//#endregion

const api = axios.create({
    baseURL: ENDPOINTS.BASE_URL,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    }
});

export default api;

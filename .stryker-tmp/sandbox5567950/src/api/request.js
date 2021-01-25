// @ts-nocheck
//#region Imports

import axios from 'axios';
import ENDPOINTS from './endpoint';

//#endregion

const api = axios.create({
    baseURL: ENDPOINTS.BASE_URL
});

export default api;

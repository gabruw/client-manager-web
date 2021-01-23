//#region Imports

import api from 'api/request';
import ENDPOINTS from 'api/endpoint';

//#endregion

export const getRepos = (user) => {
    return api.get(ENDPOINTS.REPOS(user));
};

export const getStarred = (user) => {
    return api.get(ENDPOINTS.STARRED(user));
};

//#region Imports

import buildQueryParams from 'utils/functions/buildQueryParams';

//#endregion

const ENDPOINTS = {
    BASE_URL: 'https://localhost:8743',
    AUTHENTICATON: {
        LOGIN: 'authentication/login',
        REFRESH: 'authentication/refresh'
    },
    CITY: {
        EDIT: 'city/edit',
        INCLUDE: 'city/include',
        FIND_OPTIONS: 'city/find-options',
        REMOVE: (id) => `city/remove/${id}`,
        FIND_ID: (id) => `city/find-id?${buildQueryParams({ id })}`,
        FIND_NAME: (name) => `city/find-name?${buildQueryParams({ name })}`,
        FIND_STATE: (state) => `city/find-state?${buildQueryParams({ state })}`
    },
    CLIENT: {
        EDIT: 'client/edit',
        INCLUDE: 'client/include',
        REMOVE: (id) => `client/remove/${id}`,
        FIND_ID: (id) => `client/find-id?${buildQueryParams({ id })}`,
        FIND_NAME: (name) => `client/find-name?${buildQueryParams({ name })}`
    }
};

export default ENDPOINTS;

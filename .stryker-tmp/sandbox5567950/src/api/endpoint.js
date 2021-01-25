// @ts-nocheck
const ENDPOINTS = {
    BASE_URL: 'https://api.github.com/users',
    REPOS: (user) => `/${user}/repos`,
    STARRED: (user) => `/${user}/starred`
};

export default ENDPOINTS;

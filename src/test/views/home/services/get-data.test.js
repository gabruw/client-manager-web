//#region Imports

import { getRepos, getStarred } from 'views/home/services/get-data';

//#endregion

describe('getRepos', () => {
    test('Verifica a integridade do retorno dos dados dos repositórios', async () => {
        let requestStatus = 400;
        let requestResult = [];

        const param = 'gabruw';
        const mocked = {
            fork: false,
            id: 291487580,
            node_id: 'MDEwOlJlcG9zaXRvcnkyOTE0ODc1ODA='
        };

        await getRepos(param).then((response) => {
            requestResult = response.data;
            requestStatus = response.status;
        });

        const verifyValues = requestResult.some(
            (repo) => repo.id === mocked.id && repo.fork === mocked.fork && repo.node_id === mocked.node_id
        );

        expect(requestStatus === 200 && verifyValues).toEqual(true);
    });
});

describe('getStarred', () => {
    test('Verifica a integridade do retorno dos dados dos repositórios marcados como favoritos', async () => {
        let requestStatus = 400;
        let requestResult = [];

        const user = 'gabruw';

        await getStarred(user).then((response) => {
            requestResult = response.data;
            requestStatus = response.status;
        });

        expect(requestStatus === 200 && requestResult.length === 0).toEqual(true);
    });
});

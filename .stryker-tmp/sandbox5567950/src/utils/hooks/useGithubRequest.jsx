// @ts-nocheck
//#region Imports

import { useCallback } from 'react';
import useHomeContext from 'store/home';
import REQUEST_ERROR from 'utils/constants/error/request';
import { getRepos, getStarred } from 'views/home/services/get-data';

//#endregion

const useGithubRequest = () => {
    const { WITHOUT_FAVORITES, WITHOUT_REPOSITORIES, NOT_FOUND } = REQUEST_ERROR;
    const { isFavorite, setContent, setError, setIsLoading } = useHomeContext();

    const requestPattern = useCallback(
        async (request, user, warning) =>
            await request(user)
                .then((response) => {
                    const data = response.data;
                    setContent(data);

                    if (data && data.length === 0) {
                        setError(warning);
                    }
                })
                .catch(() => setError(NOT_FOUND))
                .finally(() => setIsLoading(false)),
        [setContent, setError, NOT_FOUND, setIsLoading]
    );

    const requestFilter = useCallback(
        async (user) => {
            setIsLoading(true);

            if (isFavorite) {
                await requestPattern(getStarred, user, WITHOUT_FAVORITES);
            } else {
                await requestPattern(getRepos, user, WITHOUT_REPOSITORIES);
            }
        },
        [setIsLoading, isFavorite, requestPattern, WITHOUT_FAVORITES, WITHOUT_REPOSITORIES]
    );

    return requestFilter;
};

export default useGithubRequest;

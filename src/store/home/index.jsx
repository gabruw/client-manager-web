//#region Imports

import { createContext, useCallback, useContext, useRef, useState } from 'react';
import HOME_CONTEXT from 'utils/constants/context/home';

//#endregion

const HomeContext = createContext();

const { CONTENT, IS_FAVORITE, MODAL_CONTENT } = HOME_CONTEXT;

const initialState = {
    error: null,
    [CONTENT]: [],
    isLoading: false,
    [IS_FAVORITE]: false,
    [MODAL_CONTENT]: null
};

export const HomeContextProvider = ({ children, defaultValues = {} }) => {
    const modalRef = useRef(null);
    const [state, setState] = useState({ ...initialState, ...defaultValues });

    const show = useCallback(() => modalRef.current && modalRef.current.show(), [modalRef]);
    const hide = useCallback(() => modalRef.current && modalRef.current.hide(), [modalRef]);

    const setError = useCallback(
        (error = null) =>
            setState((prevState) => ({
                ...prevState,
                error
            })),
        [setState]
    );

    const setIsLoading = useCallback(
        (isLoading = false) =>
            setState((prevState) => ({
                ...prevState,
                isLoading
            })),
        [setState]
    );

    const setIsFavorite = useCallback(
        (isFavorite = false) =>
            setState((prevState) => ({
                ...prevState,
                isFavorite
            })),
        [setState]
    );

    const setContent = useCallback(
        (content = []) =>
            setState((prevState) => ({
                ...prevState,
                error: null,
                content
            })),
        [setState]
    );

    const setModalContent = useCallback(
        (modalContent = null) =>
            setState((prevState) => ({
                ...prevState,
                modalContent
            })),
        [setState]
    );

    return (
        <HomeContext.Provider
            value={{ show, hide, state, modalRef, setError, setContent, setIsLoading, setIsFavorite, setModalContent }}
        >
            {children}
        </HomeContext.Provider>
    );
};

const useHomeContext = () => {
    const {
        show,
        hide,
        state,
        modalRef,
        setError,
        setContent,
        setIsLoading,
        setIsFavorite,
        setModalContent
    } = useContext(HomeContext);

    return { show, hide, modalRef, setError, setContent, setIsLoading, setIsFavorite, setModalContent, ...state };
};

export default useHomeContext;

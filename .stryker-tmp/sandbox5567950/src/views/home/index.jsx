// @ts-nocheck
//#region Imports

import useMediaQuery from '@material-ui/core/useMediaQuery';
import Logo from 'assets/images/logo.png';
import CardList from 'components/CardList';
import ContextBox from 'components/ContentBox';
import MessageBox from 'components/MessageBox';
import ModalUI from 'containers/ModalUI';
import React, { Fragment } from 'react';
import useHomeContext, { HomeContextProvider } from 'store/home';
import SearchForm from './forms/SearchForm';
import SearchModalContent from './SearchModalContent';
import useStyles from './styles';

//#endregion

const Home = () => (
    <HomeContextProvider>
        <HomeContent />
    </HomeContextProvider>
);

const HomeContent = () => {
    const isSmall = useMediaQuery((theme) => theme.breakpoints.up('sm'));
    const styles = useStyles({ isSmall });

    const { modalRef, error, content, isLoading, setModalContent } = useHomeContext();

    return (
        <Fragment>
            <div className={styles.page}>
                <div className={styles.container}>
                    <div className={styles.box}>
                        <ContextBox title='Github' image={Logo}>
                            <div className={styles.content}>
                                <SearchForm />
                                <MessageBox errors={error} />
                            </div>
                        </ContextBox>
                    </div>
                </div>

                <div className={styles.container}>
                    <CardList list={content} isLoading={isLoading} />
                </div>
            </div>

            <ModalUI ref={modalRef} title='Detalhes do usuário' onClose={() => setModalContent()}>
                <SearchModalContent />
            </ModalUI>
        </Fragment>
    );
};

export default Home;

//#region Imports

import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ErrorGif from 'assets/images/error-page.gif';
import ButtonUI from 'components/ButtonUI';
import React from 'react';
import { useHistory } from 'react-router-dom';
import ROUTE_NAME from 'routes/route-name';
import useStyles from './styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

//#endregion

const Error = () => {
    const history = useHistory();

    const isSmall = useMediaQuery('(max-width: 1805px)');
    const styles = useStyles({ isSmall });

    return (
        <div className={styles.content}>
            <div className={styles.image}>
                <div className={styles.code}>404</div>
                <img src={ErrorGif} alt='error' />
            </div>

            <div className={styles.textContext}>
                <div className={styles.title}>Página não encontrada</div>
                <div className={styles.description}>O endereço solicitado não existe.</div>

                <div className={styles.button}>
                    <ButtonUI startIcon={<ArrowForwardIcon />} onClick={() => history.push(ROUTE_NAME.HOME)}>
                        <div className={styles.buttonText}>Voltar</div>
                    </ButtonUI>
                </div>
            </div>
        </div>
    );
};

export default Error;

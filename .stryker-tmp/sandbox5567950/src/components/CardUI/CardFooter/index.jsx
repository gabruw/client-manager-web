// @ts-nocheck
//#region Imports

import CardActions from '@material-ui/core/CardActions';
import LinkIcon from '@material-ui/icons/Link';
import PersonIcon from '@material-ui/icons/Person';
import clsx from 'clsx';
import ButtonUI from 'components/ButtonUI';
import React, { useCallback } from 'react';
import useHomeContext from 'store/home';
import useStyles from './styles';

//#endregion

const CardFooter = ({ content }) => {
    const styles = useStyles();
    const { show, setModalContent } = useHomeContext();

    const userClass = clsx(styles.button, styles.details);
    const accessClass = clsx(styles.button, styles.access);

    const redirect = useCallback(() => window.open(content.html_url, '_blank'), [content]);

    const setContentAndShowModal = useCallback(() => {
        setModalContent(content);
        show();
    }, [setModalContent, content, show]);

    return (
        <CardActions>
            <div className={styles.content}>
                <ButtonUI className={userClass} startIcon={<PersonIcon />} onClick={() => setContentAndShowModal()}>
                    Detalhes do usuário
                </ButtonUI>

                <ButtonUI className={accessClass} startIcon={<LinkIcon />} onClick={() => redirect()}>
                    Acessar
                </ButtonUI>
            </div>
        </CardActions>
    );
};

export default CardFooter;

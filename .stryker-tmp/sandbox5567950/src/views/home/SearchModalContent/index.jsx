// @ts-nocheck
//#region Imports

import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import LinkIcon from '@material-ui/icons/Link';
import clsx from 'clsx';
import ButtonUI from 'components/ButtonUI';
import React, { useCallback, useMemo } from 'react';
import useHomeContext from 'store/home';
import useStyles from './styles';
import UserInfoTable from './UserInfoTable';

//#endregion

const SearchModalContent = () => {
    const styles = useStyles();
    const { hide, modalContent } = useHomeContext();

    const closeClass = clsx(styles.button, styles.close);
    const owner = useMemo(() => modalContent.owner, [modalContent]);

    const redirect = useCallback(() => window.open(owner.html_url, '_blank'), [owner]);

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Tooltip
                    arrow
                    placement='top'
                    title={<Typography variant='h6'>Página principal do usuário</Typography>}
                >
                    <IconButton onClick={() => redirect()} color='primary'>
                        <LinkIcon />
                    </IconButton>
                </Tooltip>
            </div>

            <img className={styles.image} src={owner.avatar_url} alt='user' />

            <UserInfoTable content={owner} />

            <div className={styles.content}>
                <ButtonUI className={closeClass} startIcon={<CloseIcon />} onClick={() => hide()}>
                    Fechar
                </ButtonUI>
            </div>
        </div>
    );
};

export default SearchModalContent;

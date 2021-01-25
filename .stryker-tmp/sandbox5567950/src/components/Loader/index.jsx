// @ts-nocheck
//#region Imports

import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import React, { Fragment } from 'react';
import useStyles from './styles';

//#endregion

const Loader = ({ isLoading = true }) => {
    const styles = useStyles();
    const titleClass = clsx(styles.content, styles.title);

    return (
        <Fragment>
            {isLoading && (
                <div className={styles.container}>
                    <div className={styles.content}>
                        <CircularProgress className={styles.color} size={60} />
                    </div>

                    <div className={titleClass}>
                        <Typography className={styles.color} variant='h4'>
                            Carregando...
                        </Typography>
                    </div>
                </div>
            )}
        </Fragment>
    );
};

export default Loader;

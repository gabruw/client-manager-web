//#region Imports

import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';
import React, { Fragment, useMemo } from 'react';
import useStyles from './styles';

//#endregion

const MessageBox = ({ errors, title = '', text = '', severity = 'error' }) => {
    const styles = useStyles();

    const isArray = useMemo(() => errors && Array.isArray(errors) && errors.length > 0, [errors]);
    const hasErrors = useMemo(() => isArray || errors, [isArray, errors]);

    return (
        <Fragment>
            {hasErrors && (
                <div className={styles.content}>
                    <Alert severity={severity}>
                        <AlertTitle className={styles.title}>{!isArray ? errors.title : title}</AlertTitle>
                        {!isArray ? (
                            errors.text || text
                        ) : (
                            <ul>
                                {errors.map((error, index) => (
                                    <li key={index}>{error}</li>
                                ))}
                            </ul>
                        )}
                    </Alert>
                </div>
            )}
        </Fragment>
    );
};

export default MessageBox;

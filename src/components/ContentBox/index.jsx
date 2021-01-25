//#region Imports

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import useStyles from './styles';

//#endregion

const ContextBox = ({ title, image, children }) => {
    const styles = useStyles();

    return (
        <Paper className={styles.paper}>
            <div className={styles.top}>
                {image && <img className={styles.image} src={image} alt='logo' />}
                <Typography className={styles.title}>{title}</Typography>
            </div>

            <div className={styles.content}>{children}</div>
        </Paper>
    );
};

export default ContextBox;

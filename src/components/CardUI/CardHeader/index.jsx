//#region Imports

import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import LockIcon from '@material-ui/icons/Lock';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import React, { useMemo } from 'react';
import useStyles from './styles';

//#endregion

const CardHeader = ({ content }) => {
    const styles = useStyles();

    const isPrivate = useMemo(() => Boolean(content.private), [content]);
    const privateText = useMemo(() => `Repositório ${isPrivate ? 'privado' : 'publico'}`, [isPrivate]);

    return (
        <div className={styles.title}>
            <Typography className={styles.name} variant='h3' component='h2'>
                {content.name}
            </Typography>

            <Tooltip title={<Typography variant='h6'>{privateText}</Typography>} placement='left' arrow>
                {isPrivate ? <LockIcon /> : <LockOpenIcon />}
            </Tooltip>
        </div>
    );
};

export default CardHeader;

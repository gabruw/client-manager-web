//#region Imports

import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import React, { Fragment, useMemo } from 'react';
import InfoTable from './InfoTable';
import useStyles from './styles';

//#endregion

const CardBody = ({ content }) => {
    const styles = useStyles();
    const details = useMemo(() => content.description, [content]);

    return (
        <Fragment>
            <div className={styles.descriptionContent}>
                {details && (
                    <Fragment>
                        <Typography className={styles.label} variant='h5'>
                            Detalhes:
                        </Typography>

                        <Tooltip title={<Typography variant='h6'>{details}</Typography>} placement='right' arrow>
                            <Typography className={styles.description} variant='h4' component='p'>
                                {details}
                            </Typography>
                        </Tooltip>
                    </Fragment>
                )}
            </div>

            <div className={styles.information}>
                <InfoTable content={content} />
            </div>
        </Fragment>
    );
};

export default CardBody;

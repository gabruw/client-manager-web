//#region Imports

import CardUI from 'components/CardUI';
import React, { Fragment } from 'react';
import useStyles from './styles';
import Loader from 'components/Loader';

//#endregion

const CardList = ({ list = [], isLoading }) => {
    const styles = useStyles();

    return (
        <Fragment>
            {isLoading ? (
                <Loader />
            ) : (
                <div className={styles.content}>
                    {list.map((content, index) => (
                        <CardUI key={index} content={content} />
                    ))}
                </div>
            )}
        </Fragment>
    );
};

export default CardList;

//#region Imports

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import React from 'react';
import CardBody from './CardBody';
import CardFooter from './CardFooter';
import CardHeader from './CardHeader';
import useStyles from './styles';
import useHomeContext from 'store/home';

//#endregion

const CardUI = ({ content }) => {
    const { isFavorite } = useHomeContext();
    const styles = useStyles({ isFavorite });

    return (
        <div className={styles.container}>
            <Card className={styles.card} variant='outlined'>
                <div className={styles.content}>
                    <CardContent>
                        <CardHeader content={content} />
                        <CardBody content={content} />
                    </CardContent>

                    <div className={styles.footer}>
                        <CardFooter content={content} />
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default CardUI;

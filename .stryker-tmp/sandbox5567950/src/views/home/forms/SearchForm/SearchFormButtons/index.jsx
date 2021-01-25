// @ts-nocheck
//#region Imports

import AddIcon from '@material-ui/icons/Add';
import StarIcon from '@material-ui/icons/Star';
import clsx from 'clsx';
import ButtonUI from 'components/ButtonUI';
import React from 'react';
import useHomeContext from 'store/home';
import useStyles from './styles';

//#endregion

const SearchFormButtons = () => {
    const styles = useStyles();
    const favButtonClass = clsx(styles.buttonSpacing, styles.button);

    const { setIsFavorite, isLoading } = useHomeContext();

    return (
        <div className={styles.buttons}>
            <div className={favButtonClass}>
                <ButtonUI
                    type='submit'
                    isLoading={isLoading}
                    startIcon={<StarIcon />}
                    className={styles.favorite}
                    onClick={() => setIsFavorite(true)}
                >
                    Favoritos
                </ButtonUI>
            </div>

            <div className={styles.button}>
                <ButtonUI
                    type='submit'
                    isLoading={isLoading}
                    startIcon={<AddIcon />}
                    className={styles.repository}
                    onClick={() => setIsFavorite()}
                >
                    Repositórios
                </ButtonUI>
            </div>
        </div>
    );
};

export default SearchFormButtons;

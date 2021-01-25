//#region Imports

import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import clsx from 'clsx';
import React from 'react';
import useStyles from './styles';

//#endregion

const ButtonUI = ({
    children,
    startIcon,
    className,
    isLoading,
    isDisabled,
    color = 'primary',
    variant = 'contained',
    ...rest
}) => {
    const styles = useStyles();
    const buttonClass = clsx(styles.default, className);

    return (
        <Button
            color={color}
            variant={variant}
            className={buttonClass}
            disabled={isDisabled || isLoading}
            startIcon={!isLoading ? startIcon : <CircularProgress size={22} />}
            {...rest}
        >
            {children}
        </Button>
    );
};

export default ButtonUI;

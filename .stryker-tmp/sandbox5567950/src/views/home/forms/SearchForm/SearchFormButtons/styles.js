// @ts-nocheck
//#region Imports

import { makeStyles } from '@material-ui/core/styles';
import ALIGN from 'assets/styles/align';
import COLOR from 'utils/constants/color';

//#endregion

const useStyles = makeStyles(() => ({
    buttons: {
        width: '90%',
        flexWrap: 'wrap',
        ...ALIGN.RIGHT
    },
    button: {
        marginTop: 10
    },
    buttonSpacing: {
        marginRight: 15
    },
    favorite: {
        backgroundColor: COLOR.PURPLE.DARK,
        '&:hover': {
            backgroundColor: COLOR.PURPLE.DARKEST
        }
    },
    repository: {
        backgroundColor: COLOR.BLUE.DARK,
        '&:hover': {
            backgroundColor: COLOR.BLUE.DARKEST
        }
    }
}));

export default useStyles;

// @ts-nocheck
//#region Imports

import { makeStyles } from '@material-ui/core/styles';
import ALIGN from 'assets/styles/align';
import COLOR from 'utils/constants/color';

//#endregion

const useStyles = makeStyles((theme) => ({
    content: {
        width: '100%',
        flexWrap: 'wrap',
        ...ALIGN.BETWEEN
    },
    button: {
        minWidth: 120
    },
    details: {
        backgroundColor: COLOR.PURPLE.DARK,
        '&:hover': {
            backgroundColor: COLOR.PURPLE.DARKEST
        }
    },
    access: {
        backgroundColor: COLOR.BLUE.DARK,
        '&:hover': {
            backgroundColor: COLOR.BLUE.DARKEST
        }
    }
}));

export default useStyles;

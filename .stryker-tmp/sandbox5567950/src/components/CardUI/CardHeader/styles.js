// @ts-nocheck
//#region Imports

import { makeStyles } from '@material-ui/core/styles';
import ALIGN from 'assets/styles/align';
import COLOR from 'utils/constants/color';

//#endregion

const useStyles = makeStyles(() => ({
    title: {
        ...ALIGN.BETWEEN
    },
    name: {
        color: COLOR.GRAY.DARK
    }
}));

export default useStyles;

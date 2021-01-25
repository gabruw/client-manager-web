// @ts-nocheck
//#region Imports

import { makeStyles } from '@material-ui/core/styles';
import FONTS from 'assets/styles/fonts';

//#endregion

const useStyles = makeStyles(() => ({
    content: {
        width: '100%',
        marginTop: 20
    },
    title: {
        ...FONTS.GEOMANIST_MEDIUM
    }
}));

export default useStyles;

// @ts-nocheck
//#region Imports

import { makeStyles } from '@material-ui/core/styles';
import ALIGN from 'assets/styles/align';
import FONTS from 'assets/styles/fonts';

//#endregion

const useStyles = makeStyles(() => ({
    paper: {
        width: '100%',
        padding: '40px 20px 40px 20px'
    },
    image: {
        width: 70,
        height: 70,
        marginRight: 15
    },
    top: {
        marginBottom: 5,
        ...ALIGN.CENTER
    },
    title: {
        fontSize: 40,
        color: '#000000',
        ...FONTS.GEOMANIST_MEDIUM
    },
    content: {
        marginTop: 30
    }
}));

export default useStyles;

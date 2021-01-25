// @ts-nocheck
//#region Imports

import { makeStyles } from '@material-ui/core/styles';
import ALIGN from 'assets/styles/align';

//#endregion

const useStyles = makeStyles(() => ({
    page: {
        width: '100vw',
        height: '100vh'
    },
    container: {
        ...ALIGN.CENTER
    },
    box: {
        marginTop: 60,
        width: ({ isSmall }) => (isSmall ? 550 : '80%'),
        ...ALIGN.CENTER
    },
    content: {
        flexDirection: 'column',
        ...ALIGN.CENTER
    }
}));

export default useStyles;

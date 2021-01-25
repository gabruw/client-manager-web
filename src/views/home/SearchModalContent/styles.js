//#region Imports

import { makeStyles } from '@material-ui/core/styles';
import ALIGN from 'assets/styles/align';
import COLOR from 'utils/constants/color';

//#endregion

const useStyles = makeStyles(() => ({
    container: {
        width: '100%',
        flexWrap: 'wrap',
        ...ALIGN.CENTER
    },
    divider: {
        height: 2,
        marginTop: 10,
        width: '100%'
    },
    content: {
        width: '100%',
        flexWrap: 'wrap',
        ...ALIGN.RIGHT
    },
    image: {
        marginBottom: 15,
        borderRadius: '50%'
    },
    button: {
        minWidth: 120
    },
    close: {
        marginTop: 20,
        backgroundColor: COLOR.BLUE.DARK,
        '&:hover': {
            backgroundColor: COLOR.BLUE.DARKEST
        }
    }
}));

export default useStyles;

// @ts-nocheck
//#region Imports

import { makeStyles } from '@material-ui/core/styles';
import ALIGN from 'assets/styles/align';
import COLOR from 'utils/constants/color';

//#endregion

const useStyles = makeStyles(() => ({
    container: {
        padding: 10
    },
    card: {
        width: 500,
        height: 440,
        border: '3px solid',
        borderColor: ({ isFavorite }) => (isFavorite ? COLOR.PURPLE.DARK : COLOR.BLUE.DARK)
    },
    content: {
        height: 420,
        padding: 10,
        flexDirection: 'column',
        ...ALIGN.BETWEEN
    }
}));

export default useStyles;

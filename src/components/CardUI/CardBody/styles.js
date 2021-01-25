//#region Imports

import { makeStyles } from '@material-ui/core/styles';
import FONTS from 'assets/styles/fonts';
import COLOR from 'utils/constants/color';

//#endregion

const useStyles = makeStyles(() => ({
    label: {
        marginTop: 10,
        marginBottom: 5,
        color: COLOR.GRAY.MEDIUM
    },
    description: {
        wordBreak: 'break-all',
        ...FONTS.GEOMANIST
    },
    descriptionContent: {
        height: 190,
        overflow: 'hidden',
        whiteSpace: 'wrap',
        textOverflow: 'ellipsis'
    },
    information: {
        marginTop: 30
    }
}));

export default useStyles;

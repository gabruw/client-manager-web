// @ts-nocheck
//#region Imports

import { makeStyles } from '@material-ui/core/styles';
import ALIGN from 'assets/styles/align';
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
        width: '60%',
        ...ALIGN.CENTER
    },
    views: {
        color: COLOR.GRAY.MEDIUM
    },
    favorites: {
        color: COLOR.GRAY.MEDIUM
    }
}));

export default useStyles;

//#region Imports

import { makeStyles } from '@material-ui/core/styles';
import ALIGN from 'assets/styles/align';

//#endregion

const useStyles = makeStyles(() => ({
    content: {
        padding: 20,
        width: '100%',
        flexWrap: 'wrap',
        ...ALIGN.CENTER,
        alignItems: 'flex-start'
    }
}));

export default useStyles;

//#region Imports

import { makeStyles } from '@material-ui/core/styles';
import ALIGN from 'assets/styles/align';

//#endregion

const useStyles = makeStyles(() => ({
    form: {
        width: '100%',
        flexWrap: 'wrap',
        ...ALIGN.CENTER
    },
    field: {
        width: '90%'
    }
}));

export default useStyles;

//#region Imports

import { makeStyles } from '@material-ui/core/styles';
import FONTS from 'assets/styles/fonts';

//#endregion

const useStyles = makeStyles(() => ({
    content: {
        width: '100%',
        display: 'flex',
        height: '100vh',
        flexWrap: 'wrap',
        alignItems: 'center',
        padding: ({ isSmall }) => (isSmall ? '20px' : '0 20px 0 20px'),
        justifyContent: ({ isSmall }) => (isSmall ? 'center' : 'space-between')
    },
    image: {
        display: 'flex',
        flexWrap: 'wrap',
        width: ({ isSmall }) => (isSmall ? '100%' : '30%'),
        alignItems: ({ isSmall }) => (isSmall ? 'center' : 'flex-start'),
        justifyContent: ({ isSmall }) => (isSmall ? 'center' : 'flex-start')
    },
    code: {
        zIndex: 99,
        fontSize: '95px',
        color: '#393E40',
        position: 'absolute',
        marginTop: ({ isSmall }) => (isSmall ? '145px' : '255px'),
        marginLeft: ({ isSmall }) => (isSmall ? '0px' : '200px')
    },
    textContext: {
        width: '68%',
        height: '40%',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    title: {
        width: '100%',
        color: '#2E3732',
        fontSize: ({ isSmall }) => (isSmall ? '100px' : '120px'),
        textAlign: ({ isSmall }) => (isSmall ? 'center' : 'inherit'),
        ...FONTS.GEOMANIST_MEDIUM
    },
    description: {
        width: '100%',
        color: '#C8C8C8',
        fontSize: ({ isSmall }) => (isSmall ? '50px' : '70px'),
        textAlign: ({ isSmall }) => (isSmall ? 'center' : 'inherit')
    },
    button: {
        marginTop: '20px',
        width: ({ isSmall }) => (isSmall ? '100%' : '30%'),
        textAlign: ({ isSmall }) => (isSmall ? 'center' : 'inherit')
    },
    buttonText: {
        fontSize: '20px'
    }
}));

export default useStyles;

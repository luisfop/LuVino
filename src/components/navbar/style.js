import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    navbar:{
        height: 70,
        display: '-webkit-inline-box',
    },
    list: {
        backgroundColor: 'inherit',
        display: 'flex',
        height: 'inherit',
        alignItems: 'center',
    },
    links: {
        backgroundColor: 'inherit',

        '&:hover': {
            background: "#f00",
         },
    },
    logo:{
        height: 50,
        width: 50,
    },
    logoBox:{
        paddingLeft: 20,
        width: 80,
        height: 'inherit',
        display: 'flex',
        alignItems: 'center',
    }

    

}));
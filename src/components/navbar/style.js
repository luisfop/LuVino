import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
    navbar:{
        height: '70px',
        display: '-webkit-inline-box',
        width: '100%',
        
    },
    list: {
        backgroundColor: 'inherit',
        display: 'flex',
        height: 'inherit',
        alignItems: 'center',
    },
    links: {
        backgroundColor: 'inherit',
        fontWeight: 500,
        '&:hover': {},
        [theme.breakpoints.down('sm')]:{
            display: 'none',
        }
    },
    logo:{
        height: 50,
        width: 50,
    },
    logoBox:{
        marginLeft: 20,
        width: 80,
        height: 'inherit',
        display: 'flex',
        alignItems: 'center',
    },
    mobile:{
        display: 'none',
        [theme.breakpoints.down('sm')]:{
            display: 'flex',
            width: 'inherit',
        },
        
    }

    
}));
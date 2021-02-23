import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    titleBanner: {
        marginLeft: '20px',
        marginRight: '20px',
        lineHeight: '1.2',
        fontSize: '30px',
        display: 'flex',
        flexDirection: 'column',
    },
    title: {
        fontSize: '30px',
        color: 'black',
        textDecoration: 'none',
    },
    subtitle: {
        fontSize: "15px",
    }
});

function PageTitle() {

    const classes = useStyles();

    return (
        <div className={classes.titleBanner}>
            <Link to="/" className={classes.title}>
        <div><b>NiFTy Vault</b></div>
        <div className={classes.subtitle}>set challenges, claim bounties, trade NFTs</div>
        </Link>
        </div>
    )
    }
    
    export default PageTitle;
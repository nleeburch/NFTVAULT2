import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    navBar: {
    display: 'flex',
    flexDirection: 'row',
    },
    button: {
        width: '20%',
        marginLeft: '5px',
        padding: '5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        outline: 'none',
        fontSize: '15px',
        color:'rgb(120, 120, 120)',
        textDecoration: 'none',
        '&:hover': {
            borderBottom: 'solid 2px blue',
            color: 'black',
            cursor: 'pointer',
            "& $dropdown": {
                display: 'flex',
                flexDirection: 'column',
            }
        }
    },
    dropdown: {
        textAlign: 'center',
        display: 'none',
        position: 'absolute',
        top: '10vh',
        fontSize: '20px',
        backgroundColor: '#f9f9f9',
        boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
        zIndex: '1',
        lineheight: '8vh',
    },
    dropdownContent: {
        width: '16vw',
        textDecoration: 'none',
        padding: '1vh',
        '&:hover': {
            backgroundColor: 'dodgerblue',
            color: 'white',
        }
    }
});

function NavBar() {

    const classes = useStyles();

    return(
        <div className={classes.navBar} >
        <Link to="/browse" className={classes.button}>
            Browse
        </Link>
        <Link to="/activity" className={classes.button}>
            Activity
        </Link>
        <Link to="/rankings" className={classes.button}>
            Rankings
        </Link>
        <Link to='/catalog' className={classes.button}>
            Catalog
        </Link>
        <Link to="/shop" className={classes.button}>
            Shop
        </Link>
        <Link to="/create" className={classes.button}>
            Create
        </Link>
        <Link to="/account" className={classes.button}>
            Account
         <div className={classes.dropdown}>
            <Link to="/log-in" className={classes.dropdownContent}>
                Log In
            </Link>
            <Link to="/sign-up" className={classes.dropdownContent}>
                Sign Up
            </Link>
            <Link to="/change-account" className={classes.dropdownContent}>
                Change Account
            </Link>    
            <Link to="/account-details" className={classes.dropdownContent}>
                Account Details
            </Link>   
         </div>
        </Link>
        </div>
    )
}

export default NavBar;
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    searchBanner: {
        marginLeft: '5px',
        marginTop: '5px',
        marginBottom: '5px',
        marginRight: '15px',
        width: '35%',
        fontSize: '12px',
        lineHeight: '1.2',
        display: 'flex',
    },
    searchBar: {
        backgroundColor: 'white',
        width: '100%',
        padding: '10px 20px',
        border: 'solid 1px rgb(200, 200, 200)',
        borderRadius: '15px',
        outline: 'none',
        fontSize: '18px',
        '&:focus': {
            boxShadow: '-1px -1px 4px rgb(170, 170, 170) inset',
        }
    },
});

function SearchBar() {

    const classes = useStyles();

    return(
        <div className={classes.searchBanner}>
        <input type="text" placeholder="Search catalog..." className={classes.searchBar}/>
        </div>
    )
}
export default SearchBar;
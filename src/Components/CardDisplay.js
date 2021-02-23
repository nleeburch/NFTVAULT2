import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    cardDisplay: {
        margin: '6px',
        backgroundColor: 'rgb(237, 238, 236)',
        wordWrap: 'wrap',
        border: 'solid 1px rgb(200, 200, 200)',
        borderRadius: '3px',
      }
});

function CardDisplay() {

    const classes = useStyles();

    return(
        <div className={classes.cardDisplay}>
                Challenge description. 
                You can 3 dimensionally rotate the card. 
                You can flip through a stack of cards with arrow keys. 
                You can zoom in.
        </div>
    )
}

export default CardDisplay;
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    controlPanel: {
        margin: '2px',
        padding: '1px',
        backgroundColor: 'rgb(237, 238, 236)',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        border: 'solid 1px rgb(200, 200, 200)',
        borderRadius: '3px',
      },
      controlPanelButton: {
        margin: '2px',
        fontSize: '13px',
        cursor: 'pointer',
        backgroundColor: 'rgb(237, 238, 236)',
        borderLeft: 'solid 1px rgb(150, 150, 150)',
        borderRadius: '2px',
        outline: 'none',
        '&:hover': {
            backgroundColor: 'rgb(255, 255, 255)',            
        },
        '&:active': {
            backgroundColor: 'rgb(170, 170, 170)', 
        } 
      },
});

function ControlPanel() {

const classes = useStyles();

return(
    <div className={classes.controlPanel}>
    <button className={classes.controlPanelButton}>L</button>
    <button className={classes.controlPanelButton}>R</button>
    <button className={classes.controlPanelButton}>UP</button>
    <button className={classes.controlPanelButton}>DOWN</button>    
    <button className={classes.controlPanelButton}>FLIP</button>
    <button className={classes.controlPanelButton}>NEXT</button>
    <button className={classes.controlPanelButton}>PREV</button>
    </div>
)
}

export default ControlPanel;
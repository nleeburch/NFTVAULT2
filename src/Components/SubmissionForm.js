import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    title: {
        fontSize: "20px",
    },
    password: {
        width: '90%',
    },
    claimButton: {
        fontSize: '20px',
        padding: '10px',
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
        },
    }
});

function SubmissionForm() {

    const classes = useStyles();

return (
    <div>
    <div className={classes.title}><b>Submission Form</b></div>
    <hr />
    <input type="password" placeholder="enter password..." className={classes.password}/>
    <div><b>or</b></div>
    <input type="file" />
    <hr />
    <button className={classes.claimButton}>Claim Bounty</button>
    </div>
)
}

export default SubmissionForm;
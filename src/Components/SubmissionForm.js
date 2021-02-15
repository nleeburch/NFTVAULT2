function SubmissionForm() {
return (
    <div>
    <div style={{fontSize: "20px"}}><b>Submission Form</b></div>
    <hr />
    <input type="password" placeholder="enter password..." />
    <div><b>or</b></div>
    <input type="file" />
    <hr />
    <button id="claim-bounty">Claim Bounty</button>
    </div>
)
}

export default SubmissionForm;
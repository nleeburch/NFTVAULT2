import './App.css';
import React from 'react';
import SubmissionForm from './Components/SubmissionForm.js';
import PageTitle from './Components/PageTitle.js';
import SearchBar from './Components/SearchBar.js';
import CardDisplay from './Components/CardDisplay.js';
import ControlPanel from './Components/ControlPanel.js';
import NavBar from './Components/NavBar.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Catalog from "./Components/WorkSpaceComponents/Catalog.js";
import Home from "./Components/WorkSpaceComponents/Home.js";
import Browse from "./Components/WorkSpaceComponents/Browse.js";
import Activity from "./Components/WorkSpaceComponents/Activity.js";
import Rankings from './Components/WorkSpaceComponents/Rankings';
import Shop from './Components/WorkSpaceComponents/Shop';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  app: {
    backgroundColor: 'rgb(250,250,250)',
    textAlign: 'center',
    display: 'grid',
    gridTemplateRows: '10vh 55vh 35vh 5vh',
    gridTemplateColumns: '25vw 25vw 25vw 23.7vw',
  },
  topBanner: {
    gridRow: '1/2',
    gridColumn: '1/5',
    backgroundColor: 'rgb(237, 238, 236)',
    boxShadow: '0px 3px 3px rgb(150, 150, 150)',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  challengeWindow: {
    backgroundColor: 'white',
    gridRow: '2/3',
    gridColumn: '1/2',
    margin: '10px',
    border: 'solid 2px black',
    borderRadius: '5px',
    boxShadow: '3px 3px 3px rgb(150, 150, 150)', 
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  submissionForm: {
    backgroundColor: 'white',
    gridRow: '3/4',
    gridColumn: '1/2',
    margin: '10px',
    border: 'solid 2px black',
    borderRadius: '5px',
    boxShadow: '3px 3px 3px rgb(150, 150, 150)',
  },
  workSpace: {
    backgroundColor: 'white',
    gridRow: '2/4',
    gridColumn: '2/5',
    margin: '10px',
    border: 'solid 2px black',
    borderRadius: '5px',
    boxShadow: '3px 3px 3px rgb(150, 150, 150)',
  },
  bottomBanner: {
    gridRow: '4/5',
    gridColumn: '1/5',
    backgroundColor: 'dodgerblue',
    color: 'white',
  }
});

function App() {

    const classes = useStyles();

  return (
    <Router>
    <div className={classes.app}>
    <div className={classes.topBanner}>
      <PageTitle />
      <SearchBar />
      <NavBar />
    </div>
    <div className={classes.challengeWindow}>
      <CardDisplay/>
      <ControlPanel />
    </div>
    <div className={classes.submissionForm}>
      <SubmissionForm />
    </div>
    <div className={classes.workSpace}>
    <Switch>
      <Route exact path={"/"} component={Home}/>
      <Route exact path={"/catalog"} component={Catalog}/>
      <Route exact path={"/browse"} component={Browse}/>
      <Route exact path={"/activity"} component={Activity}/>
      <Route exact path={"/rankings"} component={Rankings}/>
      <Route exact path={"/shop"} component={Shop}/>
    </Switch>
    </div>
    <div className={classes.bottomBanner}>
      DONATE - CONTACT - CONNECT
    </div>
    </div>
    </Router>
  );
}

export default App;

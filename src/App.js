import './App.css';
import SubmissionForm from './Components/SubmissionForm.js';
import PageTitle from './Components/PageTitle.js';
import SearchBar from './Components/SearchBar.js';
import Workspace from './Components/Workspace.js';
import CardDisplay from './Components/CardDisplay.js';
import ControlPanel from './Components/ControlPanel.js';
import NavBar from './Components/NavBar.js';

function App() {
  return (
    <div className="App">
    <div id="top-banner">
      <PageTitle />
      <SearchBar />
      <NavBar />
    </div>
    <div id="challenge-window">
      <CardDisplay/>
      <ControlPanel />
    </div>
    <div id="submission-form">
      <SubmissionForm />
    </div>
    <div id="workspace">
      <Workspace />
    </div>
    <div id="bottom-banner">
      DONATE - CONTACT - CONNECT
    </div>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Navi from './Components/Navbar/Navi';
import Main from './Components/Main/Main';
import Feedback from './Components/Feedback/Feedbacks';

function App() {
  return (
    <div style={{backgroundColor:"black",padding:"20px"}} className="App">
      <Navi></Navi>
      <Main></Main>
      <h1 style={{color:"white",backgroundColor:"indianred"}}>Feedbacks</h1>
      <Feedback></Feedback>
    </div>
  );
}

export default App;

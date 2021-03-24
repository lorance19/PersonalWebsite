import Home from "./home/home"
import NavBar from "./navbar"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <Home/>
      </header>
    </div>
  );
}

export default App;

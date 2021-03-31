import Home from "./home/home"
import Contact from "./contact/contact"
import Resume from "./resume/resume"
import NavBar from "./navbar"

import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <Resume/>
      </header>
    </div>
  );
}

export default App;

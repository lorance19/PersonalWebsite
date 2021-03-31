import Home from "./home/home"
import Contact from "./contact/contact"
import Resume from "./resume/resume"

import NavBar from "./navbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        {/* <Contact/> */}
        <Resume/>
      </header>
    </div>
  );
}

export default App;

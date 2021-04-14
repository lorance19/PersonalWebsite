import Home from "./home/home"
import Contact from "./contact/contact"
import Resume from "./resume/resume"
import NavBar from "./navbar"
import { BrowserRouter,Route, Switch } from "react-router-dom";
import {Container} from 'react-bootstrap'

import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
        <BrowserRouter>
        <Switch>
        <Route path= "/" component={Home} />
          <Route path= "/home" component={Home} />
          <Route path= "/contact" component={Contact}/>
          <Route path= "/resume" component={Resume} />
        </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;

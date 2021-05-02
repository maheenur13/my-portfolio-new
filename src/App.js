import logo from './logo.svg';
import './App.css';
import Navigationbar from './Components/Navigationbar/Navigationbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Blogs from './Components/Blogs/Blogs';
import Footer from './Components/Footer/Footer'
import AllProjects from './Components/AllProjects/AllProjects';
function App() {
  return (
    <div>
      <Router>
      <Switch>
       <Route exact path="/">
      <Header></Header>

      <Navigationbar></Navigationbar>
      
      <About></About>
      <Projects></Projects>
      <Blogs></Blogs>
      <Contact></Contact>
      <Footer></Footer>
      </Route>
        <Route path="/allprojects">
      <AllProjects></AllProjects>
      </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;

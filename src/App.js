 
import Home from "./Comp/Home";
import About from "./Comp/About";
import Services from "./Comp/Services";
import Contact from "./Comp/Contact";
import Header from "./Comp/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"; 

function App() {
  return (
     <>
  
   <Router>
     <Header/>
<Switch>
    
     <Route exact path="/" >
       <Home/>
     </Route>
     <Route exact path="/about"  >
       <About/>
     </Route>
     <Route exact path="/services"    >
       <Services/>
     </Route>
 
     <Route exact path="/contact"    >
       <Contact/>
     </Route>
     <Route>
       <Redirect to="/" /> 
     </Route>
    </Switch>
    
    </Router>
     </>
  );
}

export default App;


import './App.css';
import Nav from './components/Nav/Nav'
import About from './pages/about/About';
import Home from './pages/home/Home';
import { BrowserRouter as Router ,Switch,Route } from 'react-router-dom'
import Project from './pages/project/Project';
function App() {
  return (
    <Router>
    <div className="App">
     <Nav className='navbara'/>
     <Switch>
     <Route path='/' exact component={Home}/>
     <Route path='/about'component={About}/>
     <Route path='/project'component={Project}/>
     </Switch>
    </div>
    </Router>
  );
}

export default App;

import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/pages/home/Home';
import Destination from './components/pages/destination/Destination';
import Crew from './components/pages/crew/Crew';
import Technology from './components/pages/technology/Technology';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/destination" exact component={Destination} />
        <Route path="/crew" exact component={Crew} />
        <Route path="/technology" exact component={Technology} />
      </Switch>
    </Router>
  );
}

export default App;

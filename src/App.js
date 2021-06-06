import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
    <Switch>
    <Route path="/">
      <Navbar  />
    </Route>
    </Switch>
    </Router>
  );
}

export default App;

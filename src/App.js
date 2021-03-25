// import './assets/css/normalize.css';
// import './assets/css/skeleton.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './assets/css/app.css';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About} />
      </Switch>
      <Footer />
    </Router>
    
  );
}

export default App;

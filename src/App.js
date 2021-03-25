// import './assets/css/normalize.css';
// import './assets/css/skeleton.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './assets/css/app.css';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;

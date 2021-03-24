// import './css/App.css';
// import './css/normalize.css';
// import './css/skeleton.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;

// import './assets/css/normalize.css';
// import './assets/css/skeleton.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './assets/css/app.css';

import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      {/* Main Page Content */}
      <Home />
      {/* End of Main Content */}
      <Footer />
    </div>
  );
}

export default App;

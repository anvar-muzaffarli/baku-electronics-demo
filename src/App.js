import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import './App.css';


import Navbar from './components/Navbar'
import Header from './components/Header'
import Demo from './components/Demo';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Demo />
    </div>
  );
}

export default App;

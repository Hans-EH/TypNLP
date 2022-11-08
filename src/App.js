import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Homepage from './pages/home/Homepage';
function App() {
  return (
    <div className="App" style={{backgroundColor: 'white'}}>
      <NavBar />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;

import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <>
      <Header />
      <Home />
      <Projects />
      <Contact />
    </>
  );
}

export default App;

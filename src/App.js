import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import myData from './myData';

function App() {
  return (
    <>
      <Header />
      <Home {...myData}/>
      <Projects />
      <Contact {...myData}/>
    </>
  );
}

export default App;

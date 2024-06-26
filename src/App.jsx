import './App.css'
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Parallax from './components/Parallax/Parallax';
import Portfolio from './components/portfolios/Portfolio';
import Services from './components/services/Services'

const App = () => {
  return (
    <>
      <section id='Homepage'>
        <Navbar />
        <Hero />
      </section>
      <section>
        <Parallax type = 'services'/>
      </section>
      <section id='Services'>
        <Services />
      </section>
      <section>
        <Parallax type = 'portfolio'/>
      </section>
      <section id='Portfolio'><Portfolio/></section>
      <section id='Contact'>Contact</section>
    </>
  )
};

export default App;

import './App.css'
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Parallax from './components/Parallax/Parallax';

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
      <section id='Services'>Services</section>
      <section>
        <Parallax type = 'portfolio'/>
      </section>
      <section id='Portfolio'>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section id='Contact'>Contact</section>
    </>
  )
};

export default App;

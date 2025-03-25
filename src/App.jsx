import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import MyWork from "./components/MyWork/MyWork";
import Navbar from "./components/Navbar/Navbar";
import Socials from "./components/Socials/Socials";

const App = () => {
  return (
    <div className="">
      <Navbar/>
      <Hero/>
      <About/>
      <Socials/>
      <MyWork/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App;

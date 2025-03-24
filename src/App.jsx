import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
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
    </div>
  )
}

export default App;

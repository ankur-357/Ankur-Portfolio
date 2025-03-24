import About from "./components/About/About";
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
    </div>
  )
}

export default App;

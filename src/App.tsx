// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Footer />
    </>
  );
}

export default App;

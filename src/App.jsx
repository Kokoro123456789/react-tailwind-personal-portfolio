import {Navbar} from "@/layout/Navbar";
import {Footer} from "@/layout/Footer";
import {Hero} from "@/sections/Hero";
import {About} from "@/sections/About";
import {Experience} from "@/sections/Experience";
import {Testimonials} from "@/sections/Testimonials";
import {Projects} from "@/sections/Projects";
import {Contact} from "@/sections/Contact";

function App() {
 

  return (
    <div  className="min-h-screen overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Testimonials />
        <Projects />
        <Contact />
      </main>
      <Footer/>
    </div>
  );
  
}

export default App

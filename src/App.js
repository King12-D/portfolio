import Navbar from "./component/NavBar/navbar";
import Intro from './component/intro/intro.js';
import Skills from "./component/Skills/skills.js";
import Works from "./component/Works/works.js";
import Contact from "./component/Contact/contact.js";
import Footer from "./component/Footer/footer.js";

function App() {
  return (
    <div className="App">
     < Navbar/>
     <Intro/>
     <Skills/>
     <Works/>
     <Contact />
     <Footer />
    </div>
  );
}

export default App;

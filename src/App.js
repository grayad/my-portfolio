import "./App.css";
import Header from "./components/Header";
import About from "./components/pages/About";
import Project from "./components/Project";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <About></About>
        <Contact></Contact>
        <Project></Project>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;

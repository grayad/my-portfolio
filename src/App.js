import "./App.css";
import Header from "./components/Header";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import Resume from "./components/pages/Resume";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <About></About>
        <Contact></Contact>
        <Resume></Resume>
        <Portfolio></Portfolio>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;

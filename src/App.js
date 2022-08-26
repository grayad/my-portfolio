import "./App.css";
import Header from "./components/Header";
import About from "./components/pages/About";
import Project from "./components/Project";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <About></About>
        <Contact></Contact>
        <Project></Project>
      </main>
    </div>
  );
}

export default App;

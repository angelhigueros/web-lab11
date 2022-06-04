import "./App.css";
import Article from "./components/Article/Article";
import Body from "./components/Body";
import Button from "./components/Button";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <article>
        <div class="div-container">
          <Header />
          <Article />
          <Body />
          <br />
          <br />
          <center>
            <Button label={"Saludar"} />
          </center>
          <br />
        </div>
      </article>

      <Footer />
    </div>
  );
}

export default App;

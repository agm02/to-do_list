import "./App.css";
import Body from "./layout/body";
import Footer from "./layout/footer";
import Header from "./layout/header";

function App() {
  return (
    <div className="app">
      <div className="main-content">
        <Header />
        <Body />
      </div>
      <Footer />
    </div>
  );
}

export default App;

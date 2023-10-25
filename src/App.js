import Card from "./component/card/Card";
import Hero from "./component/hero/Hero";
import MulCard from "./component/multiplecard/MulCard";
import Navbar from "./component/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Card />
      <MulCard />
    </div>
  );
}

export default App;

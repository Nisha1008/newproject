import Card from "./component/card/Card";
import Hero from "./component/hero/Hero";
import MulCard from "./component/multiplecard/MulCard";
import Navbar from "./component/navbar/Navbar";
import Trending from "./component/trending/Trending";
import TrendBook from "./component/multiplecard/TrendBook";
import NewPremium from "./component/multiplecard/NewPremium";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Card />
      <MulCard />
      <Trending />
      <TrendBook />
      <NewPremium />
    </div>
  );
}

export default App;

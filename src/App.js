import "./App.css";
import {
  HomeSlider,
  TopRestaurant,
  AdvancedBooking,
  OurServices,
  ExploreFood,
  ExcitingDeals,
  Footer,
  Header,
} from "./components";

function App() {
  return (
    <div className="App">
      <Header />
      <HomeSlider />
      <TopRestaurant />
      <AdvancedBooking />
      <OurServices />
      <ExploreFood />
      <ExcitingDeals />
      <Footer />
    </div>
  );
}

export default App;

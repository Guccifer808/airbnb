import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import ItemCards from "./components/ItemCards";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="">
      {/** Navbar **/}
      <Navbar />

      <div className="sm:mx-6 md:mx-10 lg:mx-12 px-3">
        {/** Filters **/}
        <Filter />
        {/** Item cards **/}
        <ItemCards />
      </div>

      {/** Footer **/}
      <Footer />
    </div>
  );
}

export default App;

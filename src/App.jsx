import Banner from "./components/Banner/Banner";
import Banner2 from "./components/Banner/Banner2";
import Brands from "./components/Brands/Brands";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Newsletter from "./components/Newsletter/Newsletter";
import Services from "./components/Services/Services";
import Testimonial from "./components/Testimonial/Testimonial";

function App() {
  return (
    <main className="overflow-x-hidden">
      <Navbar/>
      <Hero/>
      <Brands/>
      <Services/>
      <Banner/>
      <Banner2/>
      <Testimonial/>
      <Newsletter/>
      <Footer/>
    </main >
  );
}

export default App;
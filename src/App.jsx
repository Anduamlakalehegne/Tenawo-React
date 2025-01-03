import React from "react";
import WhyTenawo from "./components/About/WhyTenawo";
import Services from "./components/appointment/Services";
import Bars from "./components/bar/Bars";
import Blog from "./components/blog/Blog";
import Contact from "./components/contact/Contact";
import Counter from "./components/data-Counter/Counter";
import Download from "./components/dwonload_app/Download";
import FeatureBox from "./components/feature-box/FeatureBox";
import Testimonial from "./components/testimonial/Testimonial";
import Footer from "./include/footer/Footer";
import Header from "./include/header/Header";
import Loader from "./include/loader/Loader";
import RevolutionSlider from "./include/slider/RevolutionSlider";

function App() {
  return (
    <div className="App">
      {/* <Loader /> */}
      <Header />
      <RevolutionSlider />
      <FeatureBox />
      <Blog />
      <Bars />
      <Services />
      <Counter />
      <WhyTenawo />
      <Testimonial />
      <Download />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

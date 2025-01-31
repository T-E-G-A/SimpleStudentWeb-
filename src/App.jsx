import Header from "./Header";
import Hero from "./Hero";
import Programs from "./Programs";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import "./index.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Programs />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
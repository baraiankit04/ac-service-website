import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";

import Home from "./Component/Home";
import About from "./Component/About";
import Service from "./Component/Service";
import Contact from "./Component/Contact";
import BookService from "./Component/BookService";
import Area from "./Component/Area";
import AiAcAssistant from "./Component/AiAcAssistant";
import Faq from "./Component/Faq";
import FloatingContact from "./Component/FloatingContact";
import PrivacyPolicy from "./Component/PrivacyPolicy";
import Terms from "./Component/Terms";
import NotFound from "./Component/NotFound";
import BackToTop from "./Component/BackToTop";
function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/services" element={<Service />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/book-service" element={<BookService />} />

        <Route path="/areas" element={<Area />} />

        <Route path="/ai-ac-assistant"element={<AiAcAssistant />} />

        <Route path="/faq" element={<Faq />} />
        
        <Route path="/ai-ac-assistant" element={<AiAcAssistant />} />

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        <Route path="/terms" element={<Terms />} />

        <Route path="*" element={<NotFound />} />
        
        
    
        

      </Routes>

      <Footer />
      <BackToTop />
      <FloatingContact />

    </BrowserRouter>
  );
}

export default App;
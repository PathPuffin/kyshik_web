import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { BetaTest } from "./pages/BetaTest";
import { Blog } from "./pages/Blog";
import { BlogPost } from "./pages/BlogPost";
import { Contact } from "./pages/Contact";
import { Crew } from "./pages/Crew";
import { PitchDeck } from "./pages/PitchDeck";
import { LanguageProvider } from "./context/LanguageContext";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
};

const AppShell = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className={isHome ? "grow" : "grow pt-16"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/beta-test" element={<BetaTest />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/pitchdeck" element={<PitchDeck />} />
          <Route path="/kyshik/pitchdeck" element={<PitchDeck />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <AppShell />
      </Router>
    </LanguageProvider>
  );
}

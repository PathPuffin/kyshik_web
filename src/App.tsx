import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Blog } from "./pages/Blog";
import { BlogPost } from "./pages/BlogPost";
import { Contact } from "./pages/Contact";
import { Crew } from "./pages/Crew";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/crew" element={<Crew />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

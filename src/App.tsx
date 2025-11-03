import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
export default function App() {
  return (
    <div className="bg-gray-950 text-white">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

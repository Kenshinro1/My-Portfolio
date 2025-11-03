import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
export default function App() {
    return (_jsxs("div", { className: "bg-gray-950 text-white", children: [_jsx(Navbar, {}), _jsx(Home, {}), _jsx(Footer, {})] }));
}

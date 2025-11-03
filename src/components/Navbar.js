import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, animateScroll as scroll } from "react-scroll";
export default function Navbar() {
    const navItems = [
        { label: "Home", to: "home" },
        { label: "About", to: "about" },
        { label: "Projects", to: "projects" },
        { label: "Contact", to: "contact" },
    ];
    return (_jsx("nav", { className: "fixed top-0 left-0 w-full bg-gray-900 text-white z-50 p-4 shadow-md", children: _jsxs("div", { className: "container mx-auto flex justify-between items-center", children: [_jsx("h1", { className: "text-xl font-bold cursor-pointer transition-all duration-500", onClick: () => scroll.scrollToTop({ duration: 500 }), children: _jsx("span", { className: "hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-blue-400 transition-all duration-500", children: "Clarence Kenneth Acedillo" }) }), _jsxs("ul", { className: "flex space-x-6 items-center", children: [navItems.map((item) => (_jsx("li", { className: "cursor-pointer", children: _jsx(Link, { to: item.to, smooth: true, duration: 500, spy: true, offset: -80, className: "relative font-semibold transition-all duration-500", children: _jsx("span", { className: "relative inline-block", children: _jsx("span", { className: "hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-blue-400 transition-all duration-500", children: item.label }) }) }) }, item.to))), _jsx("li", { children: _jsx("a", { href: "Clarence-Kenneth-Acedillo_Resume.pdf", download: "ClarenceKennethAcedillo_CV.pdf", className: "px-4 py-2 font-semibold rounded-md bg-gradient-to-r from-pink-500 via-purple-500 to-blue-400 text-white hover:opacity-90 transition duration-300", children: "Download CV" }) })] })] }) }));
}

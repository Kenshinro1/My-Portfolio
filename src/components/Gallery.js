import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import RevampPic from "../assets/images/RevampPic.png";
import Project3Pic from "../assets/images/ResetPasswordHelply.jpg";
import Project5Pic from "../assets/images/Onsite.jpg";
import Project6Pic from "../assets/images/Onsite2.jpg";
import Project7Pic from "../assets/images/Animation-Blender.jpg";
import Project8Pic from "../assets/images/HelplyCustomerLoginMockup.jpg";
import Project9Pic from "../assets/images/HelplyLandingPage.jpg";
import Project10Pic from "../assets/images/HelplyResetPassword.jpg";
import Project12Pic from "../assets/images/ResetPasswordHelply.jpg";
import Project13Pic from "../assets/images/ServiceProviderHelply.jpg";
import Project14Pic from "../assets/images/OldPortFolio.jpg";
import Project15Pic from "../assets/images/MakingOfDashboardUsingFigma.jpg";
import Project16Pic from "../assets/images/MuseoSystem.webp";
import Project17Pic from "../assets/images/UI-UX-helply.jpg";
import Project19Pic from "../assets/images/GameDev.png";
import Project20Pic from "../assets/images/AstraLogIn.jpg";
import Project21Pic from "../assets/images/AstraLoginPopUp.jpg";
import Project22Pic from "../assets/images/AstraDashBoardprog.jpg";
import Project23Pic from "../assets/images/LandingPage.png";
import Project24Pic from "../assets/images/AboutPage.png";
import Project25Pic from "../assets/images/ProjectPage.png";
import Project26Pic from "../assets/images/ContactPage.png";
const galleryImages = [
    RevampPic, Project3Pic, Project5Pic,
    Project6Pic, Project7Pic, Project8Pic, Project9Pic, Project10Pic,
    Project12Pic, Project13Pic, Project14Pic, Project15Pic, Project16Pic,
    Project17Pic, Project19Pic, Project20Pic, Project21Pic, Project22Pic,
    Project23Pic, Project24Pic, Project25Pic, Project26Pic,
];
export default function Gallery() {
    const [current, setCurrent] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const delay = 4000;
    const nextImage = () => setCurrent((prev) => (prev + 1) % galleryImages.length);
    const prevImage = () => setCurrent((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    useEffect(() => {
        const timeout = setTimeout(nextImage, delay);
        return () => clearTimeout(timeout);
    }, [current]);
    const openFullscreen = (index) => {
        setCurrent(index);
        setIsFullscreen(true);
    };
    const closeFullscreen = () => setIsFullscreen(false);
    return (_jsxs("section", { id: "gallery", className: "bg-gray-800 py-16", children: [_jsxs("div", { className: "max-w-6xl mx-auto px-4 text-center", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-semibold text-white mb-10 tracking-wider", children: "PROJECT GALLERY & Photo OPs" }), _jsxs("div", { className: "relative w-full mb-8", children: [_jsx("button", { onClick: prevImage, className: "absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-3 md:p-4 rounded-full z-10 transition-all duration-300 text-2xl md:text-3xl", children: "\u276E" }), _jsx("img", { src: galleryImages[current], alt: `Gallery ${current + 1}`, onClick: () => openFullscreen(current), className: "w-full h-[400px] md:h-[500px] object-cover rounded-2xl shadow-xl cursor-pointer transition-opacity duration-700 ease-in-out" }), _jsx("button", { onClick: nextImage, className: "absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-3 md:p-4 rounded-full z-10 transition-all duration-300 text-2xl md:text-3xl", children: "\u276F" })] }), _jsx("div", { className: "flex justify-center items-center gap-4 overflow-x-auto scrollbar-none py-2", children: galleryImages.map((img, index) => (_jsx("div", { className: `flex-shrink-0 border-2 rounded-lg cursor-pointer transition-all duration-300 ${index === current ? "border-blue-500 scale-105" : "border-white/30"}`, onClick: () => openFullscreen(index), children: _jsx("img", { src: img, alt: `Thumbnail ${index + 1}`, className: "w-20 h-20 md:w-28 md:h-28 object-cover rounded-lg" }) }, index))) })] }), isFullscreen && (_jsxs("div", { className: "fixed inset-0 z-50 bg-black bg-opacity-90 flex justify-center items-center", children: [_jsx("button", { onClick: closeFullscreen, className: "absolute top-4 right-4 text-white text-4xl font-bold z-50", children: "\u00D7" }), _jsx("button", { onClick: prevImage, className: "absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl z-50", children: "\u276E" }), _jsx("img", { src: galleryImages[current], alt: `Fullscreen ${current + 1}`, className: "max-h-[90vh] max-w-[90vw] object-contain rounded-xl" }), _jsx("button", { onClick: nextImage, className: "absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl z-50", children: "\u276F" })] }))] }));
}

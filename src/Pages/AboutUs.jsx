import { useState, useEffect } from "react";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
import CoffeeTrail from "../Components/CoffeeTrail";

export default function Navbar() {
  const [shopOpen, setShopOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solidNav, setSolidNav] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const [activeMenu, setActiveMenu] = useState("main");
  const [hoveredNav, setHoveredNav] = useState(null);

  const shopItems = [
    "Available Coffees",
    "Seasonal Lots",
    "Find Your Coffee",
    "Wholesale & Sourcing",
    "Partner With Us",
  ];

  const navigate = useNavigate();

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      setSolidNav(currentScroll > window.innerHeight * 0.85);

      if (currentScroll > lastScroll && currentScroll > 100) {
        setNavVisible(false);
      } else {
        setNavVisible(true);
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!shopOpen) {
      setHoveredNav(null);
    }
  }, [shopOpen]);

  const dimOthers = (item) => {
    if (!hoveredNav) return false;
    return hoveredNav !== item;
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="h-screen flex flex-col md:flex-row">

        {/* IMAGE (Top on mobile, Right on desktop) */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full relative md:order-2">
          <img
            src="/cf1.jpg"
            alt="Our Story"
            className="w-full h-full object-cover"
          />
        </div>

        {/* TEXT (Bottom on mobile, Left on desktop) */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full bg-[#1b1b1b] flex items-center justify-center md:justify-start md:order-1">
          <div
            className="px-6 md:px-12"
            style={{ fontFamily: "nb-thin" }}
          >
            <h1 className="text-[28px] md:text-[50px] text-[#faf6ed]  text-center md:text-left">
              Our Story
            </h1>
          </div>
        </div>

      </section>

      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full z-[999] text-[12px] transition-all duration-500 transform ${
          navVisible ? "translate-y-0" : "-translate-y-full"
        } ${
          solidNav
            ? "bg-[#faf6ed] text-black"
            : "bg-transparent text-white"
        }`}
        style={{ fontFamily: "nb-thin" }}
      >
        <div className="flex items-center justify-between w-full px-6 md:px-12 h-16">

          {/* MOBILE LEFT */}
          <div className="md:hidden uppercase">
            <span
              onClick={() => setMobileMenuOpen(true)}
              className="cursor-pointer"
            >
              Menu
            </span>
          </div>

          {/* DESKTOP LEFT */}
          <div
            className={`hidden md:flex space-x-8 uppercase ${
              shopOpen ? "text-black" : ""
            }`}
          >
            <button
              onMouseEnter={() => setHoveredNav("explore")}
              onMouseLeave={() => setHoveredNav(null)}
              onClick={() => {
                setShopOpen(true);
                setHoveredNav("explore");
              }}
              className={`transition-opacity duration-500 ${
                dimOthers("explore") ? "opacity-40" : "opacity-100"
              }`}
            >
              EXPLORE
            </button>

            <span
              onMouseEnter={() => setHoveredNav("partner")}
              onMouseLeave={() => setHoveredNav(null)}
              className={`transition-opacity duration-500 ${
                dimOthers("partner") ? "opacity-40" : "opacity-100"
              }`}
            >
              Partner Farms
            </span>

            <span
              onMouseEnter={() => setHoveredNav("transparency")}
              onMouseLeave={() => setHoveredNav(null)}
              className={`transition-opacity duration-500 ${
                dimOthers("transparency") ? "opacity-40" : "opacity-100"
              }`}
            >
              Transparency
            </span>
          </div>

          {/* LOGO */}
          <div
            onClick={() => {
              setMobileMenuOpen(false);
              setShopOpen(false);

              setTimeout(() => {
                navigate("/");
              }, 700);
            }}
            className="absolute left-1/2 -translate-x-1/2 text-lg tracking-widest cursor-pointer"
          >
            QAHUA CULTR
          </div>

          {/* MOBILE RIGHT */}
          <div className="md:hidden uppercase">Contact</div>

          {/* DESKTOP RIGHT */}
          <div className="hidden md:flex space-x-8 uppercase">
            <span
              onClick={() => {
                setTimeout(() => {
                  navigate("/about");
                }, 700);
              }}
              className="cursor-pointer"
            >
              About Us
            </span>
            <span>Blog</span>
            <span>Contact</span>
          </div>

        </div>
      </nav>

      {/* DRAWER BACKDROP */}
      {shopOpen && (
        <div
          onClick={() => setShopOpen(false)}
          className="fixed inset-0 bg-black/30 z-40"
        />
      )}

      {/* EXPLORE DRAWER */}
      <div
        onMouseEnter={() => setHoveredNav("explore")}
        onMouseLeave={() => setHoveredNav(null)}
        className={`fixed top-0 left-0 h-full w-[370px] bg-[#faf6ed] z-50 transform transition-transform duration-500 ${
          shopOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="p-10 space-y-3 mt-20 text-[23px]">
            {shopItems.map((item, i) => (
              <p key={i} className="cursor-pointer hover:opacity-60 transition">
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* MOBILE MENU DRAWER */}
      <div
        className={`fixed inset-0 bg-[#f6f1e9] z-[1000] transform transition-transform duration-500 ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-black/10">
          <span
            onClick={() => {
              if (activeMenu === "shop") setActiveMenu("main");
              else setMobileMenuOpen(false);
            }}
            className="text-sm cursor-pointer"
          >
            {activeMenu === "shop" ? "← Shop" : "Close"}
          </span>

          <span className="tracking-widest text-lg">
            QAHUA CULTR
          </span>

          <span className="text-sm">Contact</span>
        </div>
      </div>

      <CoffeeTrail />
      <Footer />
      
    </>
  );
}

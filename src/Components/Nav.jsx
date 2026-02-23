import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  return (
    <>
      {/* HERO SECTION */}
      <section className="h-screen relative overflow-hidden">

        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/home.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/25"></div>

        {/* NAVBAR */}
        <nav
          className={`fixed top-0 left-0 w-full z-[999] text-[12px] transition-all duration-500 transform ${navVisible ? "translate-y-0" : "-translate-y-full"
            } ${solidNav
              ? "bg-[#faf6ed] text-black"
              : "bg-transparent text-white"
            }`}
          style={{ fontFamily: "nb-thin" }}
        >
          <div className="flex items-center justify-between w-full px-6 md:px-12 h-16">

            {/* MOBILE LEFT */}
            <div className="md:hidden uppercase">
              <span onClick={() => setMobileMenuOpen(true)} className="cursor-pointer">
                Menu
              </span>
            </div>

            {/* DESKTOP LEFT */}
            <div
              className={`hidden md:flex space-x-8 uppercase ${shopOpen ? "text-black" : ""
                }`}
            >

              {/* EXPLORE */}
              <button
                onMouseEnter={() => setHoveredNav("explore")}
                onMouseLeave={() => setHoveredNav(null)}
                onClick={() => {
                  setShopOpen(true);
                  setHoveredNav("explore");
                }}
                className={`transition-opacity duration-500 ${dimOthers("explore") ? "opacity-40" : "opacity-100"
                  }`}
              >
                EXPLORE
              </button>

              {/* PARTNER FARMS */}
              <span
                onMouseEnter={() => setHoveredNav("partner")}
                onMouseLeave={() => setHoveredNav(null)}
                className={`transition-opacity duration-500 ${dimOthers("partner") ? "opacity-40" : "opacity-100"
                  }`}
              >
                Partner Farms
              </span>

              {/* TRANSPARENCY */}
              <span
                onMouseEnter={() => setHoveredNav("transparency")}
                onMouseLeave={() => setHoveredNav(null)}
                className={`transition-opacity duration-500 ${dimOthers("transparency") ? "opacity-40" : "opacity-100"
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

                // optional small animation trigger can go here

                setTimeout(() => {
                  navigate("/");
                }, 1200); // 1.2 seconds delay
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
                  setMobileMenuOpen(false);
                  setShopOpen(false);

                  setTimeout(() => {
                    navigate("/about");
                  }, 700); // 0.7 seconds
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

        {/* HERO TEXT */}
        <div className="hidden md:block absolute left-12 bottom-32 text-white" style={{ fontFamily: 'nb-thin' }}>
          <h1 className="text-5xl mb-6">QAHUA CULTR</h1>
          <p className="text-sm max-w-xs">
            Rooted in India’s rich coffee heritage, we work with estates and farmer communities across the country to share authentic, traceable coffees with the world.
          </p>
        </div>

        {/* MOBILE HERO */}
        <div className="md:hidden absolute left-0 right-0 bottom-24 flex flex-col items-center text-white text-center px-6" style={{ fontFamily: "nb-thin" }}>
          <h1 className="text-5xl mb-4">QAHUA CULTR</h1>
          <p className="text-sm max-w-[260px] mb-6">
            Connecting the World to India’s Finest Coffees
          </p>
          <button className="bg-white text-black px-8 py-3 text-[13px]" style={{ fontFamily: "nb-thin" }}>
            Explore Our Coffees
          </button>
        </div>

        <button className="hidden md:block absolute right-12 bottom-28 bg-white text-black px-8 py-3 text-[13px]">
          Explore Our Coffees
        </button>

      </section>

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
        className={`fixed top-0 left-0 h-full w-[370px] bg-[#faf6ed] z-50 transform transition-transform duration-500 ${shopOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >

        <div className="flex flex-col h-full">

          {/* MENU ITEMS */}
          <div className="p-10 space-y-3 mt-20 text-[23px]" >
            {shopItems.map((item, i) => (
              <p key={i} className="cursor-pointer hover:opacity-60 transition">
                {item}
              </p>
            ))}
          </div>

          {/* GET INSPIRED SECTION */}
          <div className="mt-auto p-8" style={{ fontFamily: 'nb-thin' }}>

            <p className="text-[11px] uppercase mb-4 tracking-wide">
              Get Inspired
            </p>

            <div className="grid grid-cols-2 gap-4">

              <div>
                <img
                  src="/cf1.jpg"
                  className="w-full h-[200px] object-cover"
                />
                {/* <p className="text-xs mt-2">
            Job opportunity | Part-time baristas
          </p> */}
              </div>

              <div>
                <img
                  src="/coffee1.jpeg"
                  className="w-full h-[200px] object-fit"
                />
                {/* <p className="text-xs mt-2">
            Roasting Course
          </p> */}
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* MOBILE MENU DRAWER */}
      <div
        className={`fixed inset-0 bg-[#f6f1e9] z-[1000] transform transition-transform duration-500 ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          style={{ fontFamily: "nb-thin" }}
      >
        <div className="flex items-center justify-between px-6 h-16 border-b border-black/10">

          <span
            onClick={() => {
              if (activeMenu === "shop") setActiveMenu("main");
              else setMobileMenuOpen(false);
            }}
            className="text-[12px] cursor-pointer"
          >
            {activeMenu === "shop" ? "← SHOP" : "CLOSE"}
          </span>

          <span className="tracking-widest text-lg">
            QAHUA CULTR
          </span>

          <span className="text-[12px]">CONTACT</span>
        </div>

        <div className="relative overflow-hidden h-full">
          <div
            className={`flex w-[200%] transition-transform duration-500 ${activeMenu === "shop" ? "-translate-x-1/2" : "translate-x-0"
              }`}
          >

            <div className="w-1/2 px-6 pt-12">
              <div className="space-y-2 text-[24px]">
                <div
                  onClick={() => setActiveMenu("shop")}
                  className="flex justify-between cursor-pointer"
                >
                  <span>Explore</span>
                  <span>→</span>
                </div>

                <div className="flex justify-between">
                  <span>Partner farms</span>
                  <span>→</span>
                </div>

                <div className="flex justify-between">
                  <span>Blog</span>
                  <span>→</span>
                </div>

                <div
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setActiveMenu("main");

                    setTimeout(() => {
                      navigate("/about");
                    }, 300); // small delay for smooth closing animation
                  }}
                  className="flex justify-between cursor-pointer"
                >
                  <span>About us</span>
                  <span>→</span>
                </div>
              </div>
            </div>



            <div className="w-1/2 px-6 pt-12 flex flex-col h-full">

              {/* SHOP ITEMS */}
              <div className="space-y-2 text-[24px]">
                {shopItems.map((item, i) => (
                  <p key={i} className="cursor-pointer">
                    {item}
                  </p>
                ))}
              </div>

              {/* GET INSPIRED SECTION */}
              <div className="mt-30">

                <p className="text-[11px] uppercase mb-4 tracking-wide">
                  Get Inspired
                </p>

                <div className="grid grid-cols-2 gap-3">

                  <div>
                    <img
                      src="/cf1.jpg"
                      className="w-full h-[180px] object-cover"
                    />
                  </div>

                  <div>
                    <img
                      src="/coffee1.jpeg"
                      className="w-full h-[180px] object-cover"
                    />
                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  );
}

import { useState, useEffect } from "react";

export default function Navbar() {
  const [shopOpen, setShopOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solidNav, setSolidNav] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const [activeMenu, setActiveMenu] = useState("main");

  const shopItems = [
    "Filter Coffee",
    "Espresso",
    "Equipment"
  ];

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > window.innerHeight * 0.85) {
        setSolidNav(true);
      } else {
        setSolidNav(false);
      }

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

  return (
    <>
      {/* HERO SECTION */}
      <section
        className="h-screen bg-cover bg-center relative"
        style={{ backgroundImage: "url('/home1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/25"></div>

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
          <div className="flex items-center justify-between max-w-[1600px] mx-auto px-6 md:px-10 h-16">

            {/* MOBILE LEFT */}
            <div className="md:hidden uppercase">
              <span onClick={() => setMobileMenuOpen(true)} className="cursor-pointer">
                Menu
              </span>
            </div>

            {/* DESKTOP LEFT */}
            <div className="hidden md:flex space-x-8 uppercase">
              <span onClick={() => setShopOpen(true)}>Shop</span>
              <span>Our Coffees</span>
              <span>Partner Farms</span>
              <span>Transparency</span>
            </div>

            {/* LOGO */}
            <div className="absolute left-1/2 -translate-x-1/2 text-lg tracking-widest">
              QAHUA CULTR
            </div>

            {/* MOBILE RIGHT */}
            <div className="md:hidden uppercase">Contact</div>

            {/* DESKTOP RIGHT */}
            <div className="hidden md:flex space-x-8 uppercase">
              <span>About Us</span>
              <span>Blog</span>
              <span>Contact</span>
            </div>

          </div>
        </nav>

        {/* DESKTOP HERO */}
        <div className="hidden md:block absolute left-12 bottom-32 text-white">
          <h1 className="text-5xl mb-6">QAHUA</h1>
          <p className="text-sm max-w-xs">
          Rooted in India’s rich coffee heritage, we work with estates and farmer communities across the country to share authentic, traceable coffees with the world.
          </p>
        </div>

        {/* MOBILE HERO */}
        <div className="md:hidden absolute left-0 right-0 bottom-24 flex flex-col items-center text-white text-center px-6">
          <h1 className="text-5xl mb-4">QAHUA</h1>
          <p className="text-sm max-w-[260px] mb-6">
            Connecting the World to India’s Finest Coffees
          </p>
          <button className="bg-white text-black px-8 py-3 text-[13px]">
            Explore Our Coffees
          </button>
        </div>

        <button className="hidden md:block absolute right-12 bottom-28 bg-white text-black px-8 py-3 text-[13px]">
          Explore Our Coffees
        </button>
      </section>

      {/* MOBILE MENU DRAWER */}
      <div
        className={`fixed inset-0 bg-[#f6f1e9] z-[1000] transform transition-transform duration-500 ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ fontFamily: "nb-thin" }}
      >
        {/* HEADER */}
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

        {/* SLIDE CONTAINER */}
        <div className="relative overflow-hidden h-full">

          <div
            className={`flex w-[200%] transition-transform duration-500 ${
              activeMenu === "shop" ? "-translate-x-1/2" : "translate-x-0"
            }`}
          >

            {/* MAIN MENU */}
            <div className="w-1/2 px-6 pt-12">
              <div className="space-y-4 text-[24px]">

                <div
                  onClick={() => setActiveMenu("shop")}
                  className="flex justify-between cursor-pointer"
                >
                  <span>Shop</span>
                  <span>→</span>
                </div>

                <div className="flex justify-between">
                  <span>Our coffees</span>
                  <span>→</span>
                </div>

                <div className="flex justify-between">
                  <span>Partner farms</span>
                  <span>→</span>
                </div>

                <div className="flex justify-between">
                  <span>Transparency</span>
                  <span>→</span>
                </div>

                <div className="flex justify-between">
                  <span>About us</span>
                  <span>→</span>
                </div>

              </div>
            </div>

            {/* SHOP SUBMENU */}
            <div className="w-1/2 px-6 pt-12">

              <div className="space-y-4 text-[24px]">
                {shopItems.map((item, i) => (
                  <p key={i} className="cursor-pointer">
                    {item}
                  </p>
                ))}
              </div>

              {/* INSPIRED */}
              <div className="mt-10">
                <p className="text-xs uppercase mb-4">Get Inspired</p>

                <div className="grid grid-cols-2 gap-4">
                  <img src="/insp1.jpg" className="w-full h-[130px] object-cover" />
                  <img src="/insp2.jpg" className="w-full h-[130px] object-cover" />
                </div>

                <div className="mt-3 text-sm">
                  <p>Job opportunity | Part-time baristas</p>
                  <p>Roasting Course</p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* DESKTOP SHOP DRAWER */}
      {shopOpen && (
        <div onClick={() => setShopOpen(false)} className="fixed inset-0 bg-black/30 z-40" />
      )}

      <div
        className={`fixed top-0 left-0 h-full w-[450px] bg-[#f6f1e9] z-50 transform transition-transform duration-500 ${
          shopOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-10 space-y-3 mt-20 text-[23px]">
          {shopItems.map((item, i) => (
            <p key={i}>{item}</p>
          ))}
        </div>
      </div>
    </>
  );
}

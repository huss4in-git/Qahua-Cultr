import { useState, useRef } from "react";

export default function Footer() {

  const [openSection, setOpenSection] = useState(null);
  const sectionRefs = useRef({});

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer
      className="bg-[#faf6ed] text-[#4c4341] px-6 xl:px-12 2xl:px-24 py-16"
      style={{ fontFamily: "nb-thin" }}
    >

      {/* TRIANGLE */}
      <div className="flex justify-between items-center mb-8 md:mb-20">
        <div
          className="border-l-[14px] md:border-l-[20px] border-l-[#4c4341]
                     border-t-[16px] md:border-t-[22px] border-t-transparent
                     rotate-90"
        />
      </div>

      {/* ---------------- DESKTOP GRID ---------------- */}
      <div className="hidden md:grid grid-cols-4 gap-x-12 gap-y-16 mb-20">

        <div>
          <h4 className="mb-6">Explore</h4>
          <ul className="space-y-3 text-sm">
            <li>Our Origins</li>
            <li>Farms</li>
            <li>Contact us</li>
            <li>Transparency</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-6">Coffees</h4>
          <ul className="space-y-3 text-sm">
            <li>Arabica Coffees from India</li>
            <li>Robusta Coffees from India</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-6">Socials</h4>
          <ul className="space-y-3 text-sm">
            <li>Instagram</li>
            <li>Facebook</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-6">Customer Support</h4>
          <ul className="space-y-3 text-sm">
            <li>Contact us</li>
            <li>Account</li>
            <li>Terms & conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

      </div>

      {/* ---------------- MOBILE ACCORDION ---------------- */}
      <div className="md:hidden mb-12">

        {[
          {
            key: "explore",
            title: "Explore",
            content: (
              <ul className="grid grid-cols-2 gap-y-2 mt-4 text-[13px]">
                <li>Our Origins</li>
                <li>Farms</li>
                <li>Contact us</li>
                <li>Transparency</li>
              </ul>
            )
          },
          {
            key: "coffees",
            title: "Coffees",
            content: (
              <ul className="space-y-2 mt-4 text-[13px]">
                <li>Arabica Coffees from India</li>
                <li>Robusta Coffees from India</li>
              </ul>
            )
          },
          {
            key: "socials",
            title: "Socials",
            content: (
              <ul className="space-y-2 mt-4 text-[13px]">
                <li>Instagram</li>
                <li>Facebook</li>
              </ul>
            )
          },
          {
            key: "support",
            title: "Customer Support",
            content: (
              <ul className="grid grid-cols-2 gap-y-2 mt-4 text-[13px]">
                <li>Contact us</li>
                <li>Account</li>
                <li>Terms & conditions</li>
                <li>Privacy Policy</li>
              </ul>
            )
          }
        ].map((section) => (
          <div
            key={section.key}
            className="border-b border-[#d8d2c9] pb-4 mb-4"
          >
            <button
              onClick={() => toggleSection(section.key)}
              className="flex justify-between w-full text-[16px]"
            >
              {section.title}
              <span>
                {openSection === section.key ? "−" : "+"}
              </span>
            </button>

            <div
              ref={(el) => (sectionRefs.current[section.key] = el)}
              style={{
                maxHeight:
                  openSection === section.key
                    ? `${sectionRefs.current[section.key]?.scrollHeight}px`
                    : "0px"
              }}
              className="overflow-hidden transition-all duration-500 ease-in-out"
            >
              {section.content}
            </div>
          </div>
        ))}

      </div>

      {/* ---------------- BOTTOM ROW ---------------- */}
      <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-start md:items-end">

        {/* NEWSLETTER */}
        <div className="order-1 md:order-2 flex flex-col justify-between">

          <div>
            <h4 className="mb-1">Newsletter</h4>
            <p className="text-[12px] mb-5 max-w-[360px]">
              Receive insider coffee stories, tips and access to exclusive beans
            </p>
          </div>

          <div className="flex border border-[#4c4341]">
            <input
              type="email"
              placeholder="YOUR EMAIL"
              className="bg-transparent flex-1 px-4 py-3 text-sm outline-none placeholder:text-[#9b948c]"
            />
            <button className="px-8 text-sm text-[#9b948c]">
              SIGN UP
            </button>
          </div>

        </div>

        {/* BRAND */}
        <div className="order-2 md:order-1 mt-6 md:mt-0">
          <h1 className="text-[34px] md:text-5xl tracking-wide leading-none whitespace-nowrap">
            QAHUA CULTR
          </h1>
        </div>

      </div>

    </footer>
  );
}

export default function SubscriptionSection() {
    return (
      <section className="bg-[#343e3b] text-white py-20 md:py-28 px-6 md:px-12">
        <div
          className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center"
          style={{ fontFamily: "nb-thin" }}
        >
  
          {/* RIGHT IMAGE (Shows first on mobile) */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end md:-mr-[3.35vw]">
            <img
              src="/coffee2.jpeg"
              alt="Subscription Coffee"
              className="w-full max-w-[700px] object-cover"
            />
          </div>
  
          {/* LEFT CONTENT */}
          <div className="order-2 md:order-1">
  
            <h2 className="text-3xl md:text-4xl mb-6 md:mb-8 leading-snug">
              What you get with Qahua Cultr
            </h2>
  
            <ul className="space-y-3 text-sm opacity-90">
  
              <li className="flex items-start gap-3">
                <span className="mt-1 text-xs">▶</span>
                A curated selection of coffees
              </li>
  
              <li className="flex items-start gap-3">
                <span className="mt-1 text-xs">▶</span>
                Exclusive access to micro-lots and special roasts
              </li>
  
              <li className="flex items-start gap-3">
                <span className="mt-1 text-xs">▶</span>
                Free shipping worldwide
              </li>
  
              <li className="flex items-start gap-3">
                <span className="mt-1 text-xs">▶</span>
                Subscriber discounts and benefits
              </li>
  
              <li className="flex items-start gap-3">
                <span className="mt-1 text-xs">▶</span>
                Flexibility to pause or cancel anytime
              </li>
  
            </ul>
  
            {/* BUTTON */}
            <button className="mt-8 md:mt-10 border border-white px-8 py-3 text-sm hover:bg-white hover:text-black transition">
              SUBSCRIBE NOW
            </button>
  
          </div>
        </div>
      </section>
    );
  }
  
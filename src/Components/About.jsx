export default function SubscriptionSection() {
    return (
      <section className="bg-[#343e3b] text-white min-h-screen">
  
        <div
          className="grid md:grid-cols-2 min-h-screen"
          style={{ fontFamily: "nb-thin" }}
        >
  
          {/* PHOTO */}
          <div className="order-1 md:order-2 relative w-full h-[50vh] md:h-screen">
            <img
              src="/cf3.jpg"
              alt="Subscription Coffee"
              className="absolute inset-0 w-full h-full object-fit"
            />
          </div>
  
          {/* CONTENT */}
          <div className="order-2 md:order-1 flex flex-col justify-center px-6 md:px-12 py-16">
  
            <h2 className="text-3xl md:text-4xl mb-8 ">
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
  
            <button className="mt-10 border border-white px-8 py-3 text-sm hover:bg-white hover:text-black transition w-fit">
              SUBSCRIBE NOW
            </button>
  
          </div>
  
        </div>
      </section>
    );
  }
  
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
            src="/cj.jpg"
            alt="Subscription Coffee"
            className="absolute inset-0 w-full h-full md:object-cover object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className="order-2 md:order-1 flex flex-col justify-center px-6 md:px-12 py-16">

          <h2 className="text-3xl md:text-4xl mb-8 ">
            What you get with Qahua Cultr
          </h2>

          <ul className="space-y-3 text-sm opacity-90">

            <li className="flex items-start gap-3">
              <div className="flex justify-between items-center" >
                <div className="w-4 h-4 border-l-[14px] border-l-[#4c4341] border-t-[16px] border-t-transparent rotate-180" />
              </div>
              A curated selection of coffees
            </li>

            <li className="flex items-start gap-3">
              <div className="flex justify-between items-center" >
                <div className="w-4 h-4 border-l-[14px] border-l-[#4c4341] border-t-[16px] border-t-transparent rotate-180" />
              </div>
              Exclusive access to micro-lots and special roasts
            </li>

            <li className="flex items-start gap-3">
              <div className="flex justify-between items-center" >
                <div className="w-4 h-4 border-l-[14px] border-l-[#4c4341] border-t-[16px] border-t-transparent rotate-180" />
              </div>
              Free shipping worldwide
            </li>

            <li className="flex items-start gap-3">
              <div className="flex justify-between items-center" >
                <div className="w-4 h-4 border-l-[14px] border-l-[#4c4341] border-t-[16px] border-t-transparent rotate-180" />
              </div>
              Discounts and benefits
            </li>

            {/* <li className="flex items-start gap-3">
              <div className="flex justify-between items-center" >
                <div className="w-4 h-4 border-l-[14px] border-l-[#4c4341] border-t-[16px] border-t-transparent rotate-180" />
              </div>
              Flexibility to pause or cancel anytime
            </li> */}

          </ul>

          <button className="mt-10 border border-white px-8 py-3 text-sm hover:bg-white hover:text-black transition w-fit">
            CONTACT NOW
          </button>

        </div>

      </div>
    </section>
  );
}

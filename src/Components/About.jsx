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
            src="/cf6.jpg"
            alt="Subscription Coffee"
            className="absolute inset-0 w-full h-full md:object-cover object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className="order-2 md:order-1 flex flex-col justify-center px-6 md:px-12 py-16">

          <h2 className="text-3xl md:text-4xl mb-8 ">
            What we do
          </h2>

          <ul className="space-y-3 text-sm opacity-90">

            <li className="flex items-start gap-3">
              <div className="mt-[4px] border-l-[10px] border-l-[#4c4341] border-t-[12px] border-t-transparent rotate-180" />
              We source high-quality coffee directly from trusted farms.
            </li>

            <li className="flex items-start gap-3">
              <div className="mt-[4px] border-l-[10px] border-l-[#4c4341] border-t-[12px] border-t-transparent rotate-180" />
              We manage global exports and seamless logistics from farm to cup.
            </li>

            <li className="flex items-start gap-3">
              <div className="mt-[4px] border-l-[10px] border-l-[#4c4341] border-t-[12px] border-t-transparent rotate-180" />
              We refine post-harvest processes to elevate quality.
            </li>

            <li className="flex items-start gap-3">
              <div className="mt-[4px] border-l-[10px] border-l-[#4c4341] border-t-[12px] border-t-transparent rotate-180" />
              We prioritise long-term value over short-term gain.
            </li>

            <li className="flex items-start gap-3">
              <div className="mt-[4px] border-l-[10px] border-l-[#4c4341] border-t-[12px] border-t-transparent rotate-180" />
              Through Qahua Cultr, we advance climate-resilient coffee research.
            </li>

          </ul>


          <button className="mt-10 border border-white px-8 py-3 text-sm hover:bg-white hover:text-black transition w-fit">
            CONTACT NOW
          </button>

        </div>

      </div>
    </section>
  );
}

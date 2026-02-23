import Marquee from "./Marquee";

export default function CoffeeTrail() {
    return (
        <section className="bg-[#faf6ed] py-24">

            <div className="w-full px-6 md:px-13 xl:px-14 2xl:px-15">

                {/* TOP SECTION */}
                <div className="grid md:grid-cols-2 gap-16 items-start md:mb-22 mb-20">

                    {/* LEFT TITLE */}
                    <div>
                        <h1
                            className="text-4xl md:text-5xl leading-tight"
                            style={{ color: "#4c4341" }}
                        >
                            More than just coffee
                        </h1>
                    </div>

                    {/* RIGHT TEXT */}
                    <div style={{ fontFamily: "nb-thin" }}>
                        <p className="text-[15px] text-black/80 leading-relaxed mb-6">
                            Qahua Cultr exists to make India-origin coffees easier to evaluate and buy with confidence – especially for roasters who need clarity, repeatability, and clean lot structure more than hype.
                        </p>

                        <p className="text-[15px] text-black/80 leading-relaxed">
                            We work as a small, selection-led sourcing practice, focused on coffees that perform in real roastery conditions and can be represented honestly in the market.
                        </p>
                    </div>

                </div>

                {/* BOTTOM SECTION */}
                <div className="grid md:grid-cols-2 gap-16 items-start">

                    {/* LEFT TEXT BLOCK */}
                    <div>
                        <h2
                            className="text-3xl md:text-4xl mb-6"
                            style={{ color: "#4c4341" }}
                        >
                            What we do?
                        </h2>

                        <p
                            className="text-[15px] text-black/80 leading-relaxed max-w-[420px] mb-5"
                            style={{ fontFamily: "nb-thin" }}
                        >
                            We help roasters access India-origin coffees through a simple, disciplined workflow:
                        </p>

                        <ul className="text-[15px] leading-relaxed list-disc list-outside text-black/80 ml-6 max-w-[420px] mb-5" style={{ fontFamily: 'nb-thin' }}>
                            <li>Select coffees from a small set of producer relationships and trusted supply lines</li>
                            <li>Document lots clearly (species, variety, process, altitude, harvest context, lot type)</li>
                            <li>Prepare samples for evaluation with straightforward, trade-facing notes</li>
                            <li>Support buying decisions with clarity on availability, continuity, and intended use</li>
                        </ul>

                        <p
                            className="text-[15px] text-black/80 leading-relaxed max-w-[420px] mb-5"
                            style={{ fontFamily: "nb-thin" }}
                        >
                            Our goal is not to “curate a narrative.” It’s to reduce uncertainty between origin and roastery.              </p>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="relative">
                        <img
                            src="/cf7.jpg"  // replace with your image
                            alt="Roastery"
                            className="w-full h-[500px] object-cover"
                        />
                    </div>

                </div>

                {/* BOTTOM SECTION */}
                <div className="grid mt-30 md:grid-cols-2 gap-16 items-start">

                    {/* LEFT IMAGE */}
                    <div className="relative">
                        <img
                            src="/cf8.jpg"  // replace with your image
                            alt="Roastery"
                            className="w-full h-[500px] object-cover"
                        />
                    </div>

                    {/* RIGHT TEXT BLOCK */}
                    <div>
                        <h2
                            className="text-3xl md:text-4xl mb-6"
                            style={{ color: "#4c4341" }}
                        >
                            How we select coffee?
                        </h2>

                        <p
                            className="text-[15px] text-black/80 leading-relaxed max-w-[420px] mb-5"
                            style={{ fontFamily: "nb-thin" }}
                        >
                            We select coffees with the roaster’s decision-making process in mind:
                        </p>

                        <ul className="text-[15px] leading-relaxed list-disc list-outside text-black/80 ml-6 max-w-[420px] mb-5" style={{ fontFamily: 'nb-thin' }}>
                            <li>Cup quality and structure: sweetness, balance, clarity, usable acidity, and finish</li>
                            <li>Repeatability: how reliably a coffee holds up across roasts and time</li>
                            <li>Lot definition: transparent separation between representative lots vs micro-lots</li>
                            <li>Process integrity: clean processing and realistic flavour claims</li>
                        </ul>

                        <p
                            className="text-[15px] text-black/80 leading-relaxed max-w-[420px] mb-5"
                            style={{ fontFamily: "nb-thin" }}
                        >
                            Flavour notes are clearly identified as producer-declared, process-informed, or cup-derived.          </p>
                    </div>



                </div>

                {/* BOTTOM SECTION */}
                <div className="grid mt-30 mb-30 md:grid-cols-2 gap-16 items-start">

                    {/* LEFT TEXT BLOCK */}
                    <div>
                        <h2
                            className="text-3xl md:text-4xl mb-6"
                            style={{ color: "#4c4341" }}
                        >
                            How we work with producers
                        </h2>

                        <p
                            className="text-[15px] text-black/80 leading-relaxed max-w-[420px] mb-5"
                            style={{ fontFamily: "nb-thin" }}
                        >
                            We work with producers in ways that prioritise accuracy, continuity, and realistic representation in the market:
                        </p>

                        <ul className="text-[15px] leading-relaxed list-disc list-outside text-black/80 ml-6 max-w-[420px] mb-5" style={{ fontFamily: 'nb-thin' }}>
                            <li>Clear lot definition and traceability at the level the coffee can genuinely support</li>
                            <li>Honest separation between representative lots and limited micro-lots</li>
                            <li>Pricing and positioning aligned with how the coffee will actually be sold and used</li>
                            <li>Long-term relationships built around repeat evaluation, not one-off releases</li>
                        </ul>

                        <p
                            className="text-[15px] text-black/80 leading-relaxed max-w-[420px] mb-5"
                            style={{ fontFamily: "nb-thin" }}
                        >
                            Our goal is not to overstate impact. It’s to represent producers and their coffees in ways that hold up across seasons, shipments, and roastery use.             </p>
                    </div>

                    {/* RIGHT IMAGE */}
                    <div className="relative">
                        <img
                            src="/cf10.jpg"  // replace with your image
                            alt="Roastery"
                            className="w-full h-[500px] object-cover"
                        />
                    </div>
                </div>

            </div>
            <Marquee />



        </section>


    );
}

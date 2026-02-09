export default function CoffeeJourney() {
    const steps = [
      {
        title: "Grow",
        img: "/grow1.png",
        desc: "Coffee plants take 3–5 years to bear fruit."
      },
      {
        title: "Pick",
        img: "/pick1.png",
        desc: "Only ripe cherries are handpicked carefully."
      },
      {
        title: "Process",
        img: "/process1.png",
        desc: "Cherries are processed using region-specific methods."
      },
      {
        title: "Roast",
        img: "/roast1.png",
        desc: "Roasting unlocks flavour notes inside each bean."
      }
    ];
  
    return (
      <section className="bg-[#faf6ed] px-6 md:px-12 py-20">
  
        <div className="max-w-[1400px] mx-auto">
  
          <div className="grid md:grid-cols-2 gap-12 items-start">
  
            {/* LEFT TITLE */}
            <div>
              <h1 className="text-3xl md:text-5xl" style={{color:'#4c4341'}}>
                Coffee Journey
              </h1>
            </div>
  
            {/* RIGHT CONTENT */}
            <div style={{ fontFamily: "nb-thin" }}>
  
              <p className="text-[15px] text-black/70 leading-relaxed max-w-[520px] mb-8">
                From seed to cup, every coffee passes through a careful journey.
                We work closely with estates and farmer communities across India
                to deliver transparent, traceable coffees.
              </p>
  
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
  
                {steps.map((step, index) => (
                  <div key={index} className="text-center">
  
                    <div className="flex justify-center mb-4">
                      <img
                        src={step.img}
                        alt={step.title}
                        className="h-[110px] md:h-[150px] object-contain transition-transform duration-500 hover:scale-105"
                      />
                    </div>
  
                    <h3 className="uppercase tracking-[2px] text-xs mb-2">
                      {step.title}
                    </h3>
  
                    <p className="text-[12px] text-black/70 leading-relaxed max-w-[180px] mx-auto">
                      {step.desc}
                    </p>
  
                  </div>
                ))}
  
              </div>
  
            </div>
  
          </div>
  
        </div>
  
      </section>
    );
  }
  
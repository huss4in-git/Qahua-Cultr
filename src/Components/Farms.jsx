import { Link } from "react-router-dom";

export default function SelectedCoffees() {
  const coffees = [
    
    {
        name: "Coorg",
        img: "/farm.jpg",
        link: "/wayanad",
        p: "Grown in the elevated terrains of Wayanad, these coffees are known for their smooth character and gentle flavour, with subtle earthy sweetness and mild spice notes creating a well-balanced profile."
      },
      {
        name: "Wayanad",
        img: "/farm2.webp",
        link: "/chikmagalur",
        p: "From the historic hills of Chikmagalur, the birthplace of Indian coffee, these beans showcase a smooth body, rich aroma, and refined cocoa-spice notes. Naturally shade-grown and carefully handpicked for exceptional quality."
      },
    
    
  ];

  return (
    <section className="bg-[#343e3b] text-white py-20 md:py-28 px-6 md:px-12">

      {/* HEADING */}
      <h2 className="text-3xl md:text-4xl mb-12 md:mb-20 text-left">
        Our Farms
      </h2>

      {/* GRID */}
      <div
        className="grid md:grid-cols-2 gap-6 mb-15 md:gap-12"
        style={{ fontFamily: "nb-thin" }}
      >
        {coffees.map((coffee, i) => (
          <div key={i}>

            {/* Product Box */}
            <div className="bg-[#f2eee6] aspect-square md:aspect-auto md:h-[340px] relative overflow-hidden">
              <img
                src={coffee.img}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Clickable Name */}
            <Link
              to={coffee.link}
              className="block mt-3 md:mt-4 text-sm md:text-base underline hover:opacity-70 transition"
            >
              {coffee.name}
            </Link>

            {/* Description */}
            <p className="text-xs md:mb-0 mb-5 md:text-sm opacity-60 mt-4">
              {coffee.p}
            </p>

          </div>
        ))}
      </div>
    </section>
  );
}

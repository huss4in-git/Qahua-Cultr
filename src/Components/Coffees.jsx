import { Link } from "react-router-dom";

export default function SelectedCoffees() {
  const coffees = [
    
    {
        name: "Wayanad",
        img: "/Wayanad.jpg",
        link: "/wayanad",
        p: "Grown in the elevated terrains of Wayanad, these coffees are known for their smooth character and gentle flavour, with subtle earthy sweetness and mild spice notes creating a well-balanced profile."
      },
      {
        name: "Chikmagalur",
        img: "/Chikmagalur2.jpg",
        link: "/chikmagalur",
        p: "From the historic hills of Chikmagalur, the birthplace of Indian coffee, these beans showcase a smooth body, rich aroma, and refined cocoa-spice notes. Naturally shade-grown and carefully handpicked for exceptional quality."
      },
    {
      name: "Coorg",
      img: "/Coorg.jpg",
      link: "/coorg",
      p: "Cultivated in the rich estates of Coorg, these coffees are distinguished by a deep body and robust flavour. Expect layered notes of dark chocolate and roasted nuts, crafted for a fuller, more intense coffee experience."
    },
    
    
  ];

  return (
    <section className="bg-[#faf6ed] py-20 md:py-28 px-6 md:px-12">

      {/* HEADING */}
      <h2 className="text-3xl md:text-5xl mb-12 md:mb-20 text-left" style={{color:'#4c4341'}}>
        Origins
      </h2>

      {/* GRID */}
      <div
        className="grid md:grid-cols-3 gap-6 mb-15 md:gap-12"
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
            <p className="text-xs md:text-sm opacity-60 mt-4">
              {coffee.p}
            </p>

          </div>
        ))}
      </div>
    </section>
  );
}

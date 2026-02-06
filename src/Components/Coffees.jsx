export default function SelectedCoffees() {
    const coffees = [
      { name: "Monsoon Malabar Arabica AA", img: "/Monsoon_Malabar.webp" },
      { name: "Mysore Nuggets Extra Bold", img: "/Mysore_Nuggets.webp" },
      { name: "Plantation A Coffee", img: "/Plantation_A.avif" },
      { name: "Robusta Cherry AA", img: "/Robusta_Cherry.jpeg" },
      { name: "Arabica Peaberry Coffee", img: "/Arabica_Peaberry.webp" },
      { name: "Kaapi Royale", img: "/c6.png" },
    ];
  
    return (
      <section className="bg-[#faf6ed] py-20 md:py-28 px-6 md:px-12">
  
        {/* HEADING */}
        <h2 className="text-3xl md:text-5xl mb-12 md:mb-20 text-left">
          Our coffees
        </h2>
  
        {/* GRID */}
        <div
          className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12"
          style={{ fontFamily: "nb-thin" }}
        >
          {coffees.map((coffee, i) => (
            <div key={i}>
  
              {/* Product Box */}
              <div className="bg-[#f2eee6] h-[220px] md:h-[340px] relative overflow-hidden">
  <img
    src={coffee.img}
    className="w-full h-full object-cover"
  />

  {coffee.tag && (
    <span className="absolute bottom-3 left-3 text-xs bg-[#6d78a4] text-white px-2 py-1">
      {coffee.tag}
    </span>
  )}
</div>

  
              {/* Text */}
              <p className="mt-3 md:mt-4 text-sm md:text-base">
                {coffee.name}
              </p>
              <p className="text-xs md:text-sm opacity-60">
                {coffee.price}
              </p>
  
            </div>
          ))}
        </div>
      </section>
    );
  }
  
import { useEffect, useState } from "react";
import { client } from "../sanityClient";

export default function SelectedCoffees() {
  const [farms, setFarms] = useState([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "farm"]{
        name,
        description,
        "imageUrl": image.asset->url
      }`)
      .then((data) => setFarms(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="bg-[#343e3b] text-white py-20 md:py-28 px-6 md:px-12">

      <h2 className="text-3xl md:text-4xl mb-12 md:mb-20 text-left">
        Our Farms
      </h2>

      <div
  className={`grid grid-cols-1 gap-6 mb-15 md:gap-12 ${
    farms.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"
  }`}
  style={{ fontFamily: "nb-thin" }}
>

        {farms.map((farm, i) => (
          <div key={i}>

            <div className="bg-[#f2eee6] aspect-square md:aspect-auto md:h-[340px] relative overflow-hidden">
              <img
                src={farm.imageUrl}
                className="w-full h-full object-cover"
                alt={farm.name}
              />
            </div>

            <h3 className="block mt-3 md:mt-4 text-sm md:text-base">
              {farm.name}
            </h3>

            <p className="text-xs md:mb-0 mb-5 md:text-sm opacity-60 mt-4">
              {farm.description}
            </p>

          </div>
        ))}
      </div>
    </section>
  );
}

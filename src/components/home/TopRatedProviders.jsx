// src/components/home/TopRatedProviders.jsx

import React, { useEffect, useState } from "react";
import providersData from "../../data/topProviders.json"; 

const TopRatedProviders = () => {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    
    setProviders(providersData);

   
    fetch("/topProviders.json")
      .then(res => res.json())
      .then(data => setProviders(data));
  }, []);

  return (
    <section className="my-12 px-4 md:px-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Top Rated Providers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {providers.map((provider) => (
          <div
            key={provider.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-4 flex flex-col items-center"
          >
            <img
              src={provider.image}
              alt={provider.name}
              className="w-32 h-32 object-cover rounded-full mb-4"
            />
            <h3 className="text-lg font-semibold">{provider.name}</h3>
            <p className="text-gray-500">{provider.skill}</p>
            <p className="text-yellow-500 font-semibold mt-2">⭐ {provider.rating}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopRatedProviders;

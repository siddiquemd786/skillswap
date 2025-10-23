// src/components/skills/SkillDetails.jsx

import { useParams, useLoaderData, Link } from "react-router";

const SkillDetails = () => {
  
  const { id } = useParams();
  const skillsData = useLoaderData(); 

  const skill = skillsData.find(s => s.skillId === parseInt(id));

  if (!skill) return <p className="p-6 text-center">Skill not found.</p>;

  return (
    <div className="max-w-6xl mx-auto my-12 p-6 bg-white rounded shadow">
      <Link to="/" className="text-blue-600 hover:underline mb-6 inline-block">
        ← Back to Home
      </Link>
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={skill.image}
          alt={skill.skillName}
          className="w-full md:w-1/2 h-80 object-cover rounded"
        />
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold">{skill.skillName}</h1>
            <p className="text-gray-700 mt-4">{skill.description}</p>
            <div className="mt-4 space-y-2">
              <p><span className="font-semibold">Provider:</span> {skill.providerName}</p>
              <p><span className="font-semibold text-green-600">Price:</span> ${skill.price}</p>
              <p><span className="font-semibold text-yellow-500">Rating:</span> {skill.rating} ⭐</p>
              <p><span className="font-semibold">Slots Available:</span> {skill.slotsAvailable}</p>
              <p><span className="font-semibold">Category:</span> {skill.category}</p>
            </div>
          </div>
          <Link to={"/bookSession"} className="mt-6 py-3 bg-blue-600 text-white text-center rounded hover:bg-blue-700 transition w-full md:w-auto">
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SkillDetails;

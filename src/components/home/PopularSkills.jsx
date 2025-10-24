// src/components/home/PopularSkills.jsx
import { useEffect, useState } from "react";
import SkillCard from "../skills/SkillCard";


const PopularSkills = () => {
  const [skills, setSkills] = useState([]);

 const [loading, setLoading] = useState(true);

useEffect(() => {
  fetch("/skills.json")
    .then((res) => res.json())
    .then((data) => {
      setSkills(data);
      setLoading(false);
    })
    .catch((error) => {
      console.error("Error loading skills:", error);
      setLoading(false);
    });
}, []);

if (loading) {
  return <p className="text-center text-gray-500">Loading skills...</p>;
}


  return (
    <section className=" bg-url- px-6">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Popular Skills

 
      </h2>

      {skills.length === 0 ? (
        <p className="text-center text-gray-500">Loading skills...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <SkillCard key={skill.skillId} skill={skill} />
          ))}
        </div>
      )}
    </section>
  );
};

export default PopularSkills;

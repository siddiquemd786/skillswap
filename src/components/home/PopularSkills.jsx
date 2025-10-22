import SkillCard from "../skills/SkillCard";


const skills = [
  { id: 1, name: "Guitar Lessons", rating: 4.8, price: "$25", image: "/images/guitar.jpg" },
  { id: 2, name: "Web Development", rating: 4.9, price: "$50", image: "/images/code.jpg" },
  { id: 3, name: "Yoga Training", rating: 4.7, price: "$30", image: "/images/yoga.jpg" },
];

const PopularSkills = () => {
  return (
    <section className="py-10 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Popular Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skills.map(skill => <SkillCard key={skill.id} skill={skill} />)}
      </div>
    </section>
  );
};

export default PopularSkills;

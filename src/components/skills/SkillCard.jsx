// src/components/skills/SkillCard.jsx
const SkillCard = ({ skill }) => {
  const { skillName, image, rating, price, category, description } = skill;

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
      <img
        src={image}
        alt={skillName}
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800">{skillName}</h3>
        <p className="text-sm text-gray-500 mb-2">{category}</p>
        <p className="text-gray-700 text-sm mb-2">{description.slice(0, 60)}...</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-yellow-500 font-semibold">⭐ {rating}</span>
          <span className="text-blue-600 font-bold">${price}</span>
        </div>
        <button className="btn btn-primary w-full mt-4">View Details</button>
      </div>
    </div>
  );
};

export default SkillCard;

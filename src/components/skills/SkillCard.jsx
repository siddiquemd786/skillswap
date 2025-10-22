const SkillCard = ({ skill }) => {
  return (
    <div className="card bg-base-100 shadow-lg">
      <figure>
        <img src={skill.image} alt={skill.name} className="h-48 w-full object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{skill.name}</h2>
        <p>⭐ {skill.rating}</p>
        <p className="font-semibold text-primary">{skill.price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;

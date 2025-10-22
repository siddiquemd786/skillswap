// src/pages/Home.jsx
import HeroSlider from "../components/home/HeroSlider";
import PopularSkills from "../components/home/PopularSkills";

const Home = () => {
  return (
    <div className="mt-20">
      <HeroSlider />
      <PopularSkills />
    </div>
  );
};

export default Home;

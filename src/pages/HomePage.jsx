// src/pages/HomePage.jsx


import HeroSlider from "../components/home/HeroSlider";
import HowItWorks from "../components/home/HowItWorks";
import PopularSkills from "../components/home/PopularSkills";

const HomePage = () => {
  return (
    <div className="mt-20">
      <HeroSlider></HeroSlider>
      <PopularSkills />
        <HowItWorks />
    </div>
  );
};

export default HomePage;

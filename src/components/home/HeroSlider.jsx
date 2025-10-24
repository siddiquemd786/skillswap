// src/components/home/HeroSlider.jsx

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import Loading from "./Loading";
import { useContext } from "react";
import { AuthContext } from "../layout/AuthContext";

const HeroSlider = () => {
 const { loading } = useContext(AuthContext);

    if(loading){
    return <Loading></Loading>
} 
  
  const slides = [
    {
      id: 1,
      img: "https://thumbs.dreamstime.com/b/soft-skills-personal-fitness-responsibility-hr-human-resources-concept-141549671.jpg",
      text: "Learn from local experts",
    },
    {
      id: 2,
      img: "https://www.lawconsultancynetwork.com/wp-content/uploads/2021/01/iStock-546018942-1200px-wide-1024x692.jpg)",
      text: "Share your skills easily",
    },
    {
      id: 3,
      img: "https://media.istockphoto.com/id/889968488/photo/skill-concept.jpg?s=612x612&w=0&k=20&c=yDPoLvtvsnNbJQffOO8iMtfofeYLZ-r4PIdFCH7hBtc=",
      text: "Build connections, not just skills",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      className="mySwiper"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="flex flex-col items-center  bg-cover bg-center  justify-center h-[75vh] text-center overflow-hidden">
            
           
            <img
              src={slide.img}
              alt={slide.text}
              className="w-full h-[340px] object-fill mb-4  drop-shadow-lg"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1 }}
            />

           
            <h1
              className="text-3xl md:text-2xl font-bold text-gray-800 px-4 max-w-2xl"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1.2, delay: 0.2 }}
            >
              {slide.text}
            </h1>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;

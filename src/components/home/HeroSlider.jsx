// src/components/home/HeroSlider.jsx

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const HeroSlider = () => {
  const slides = [
    {
      id: 1,
      img: "https://images.squarespace-cdn.com/content/v1/6352feb487130b2f3f04bc78/3453bb7a-7f7e-4bdc-8fa2-8d4cd7c1fb1c/the-learning-experts_logo+cropped.png",
      text: "Learn from local experts",
    },
    {
      id: 2,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfY9Fpq8FnOEsRaghwMWBAxmYTFfJn0btJHQ&s",
      text: "Share your skills easily",
    },
    {
      id: 3,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBtiRLyMJywya86FvE7TTGBHQN8wKcv0_Xig&s",
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
          <div className="flex flex-col items-center justify-center h-[70vh]  text-center overflow-hidden">
            
           
            <img
              src={slide.img}
              alt={slide.text}
              className="w-full h-[350px] object-contain mb-6 pt-20 drop-shadow-lg"
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

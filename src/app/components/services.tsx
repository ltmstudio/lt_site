"use client";

import { useLanguage } from "@/app/context/langContext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";



import { useState } from "react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCreative,
  Mousewheel,
} from "swiper/modules";

export default function Services() {
  const { t } = useLanguage();
  const services = [
    {
      title: t.services.title1,
      description: t.services.description1,
      image: "/services/LT-s1.jpg",
    },
    {
      title: t.services.title2,
      description: t.services.description2,
      image: "/services/LT-s2.jpg",
    },
    {
      title: t.services.title3,
      description: t.services.description3,
      image: "/services/LT-s3.jpg",
    },
    {
      title: t.services.title4,
      description: t.services.description4,
      image: "/services/LT-s4.jpg",
    },
    {
      title: t.services.title5,
      description: t.services.description5,
      image: "/services/LT-s5.jpg",
    },
    {
      title: t.services.title6,
      description: t.services.description6,
      image: "/services/LT-s6.jpg",
    },
    {
      title: t.services.title7,
      description: t.services.description7,
      image: "/services/LT-s7.jpg",
    }, {
      title: t.services.title8,
      description: t.services.description8,
      image: "/services/LT-s8.jpg",
    }, {
      title: t.services.title9,
      description: t.services.description9,
      image: "/services/LT-s9.jpg",
    }, {
      title: t.services.title10,
      description: t.services.description10,
      image: "/services/LT-s10.jpg",
    }, {
      title: t.services.title11,
      description: t.services.description11,
      image: "/services/LT-s11.jpg",
    }, {
      title: t.services.title12,
      description: t.services.description12,
      image: "/services/LT-s12.jpg",
    }, {
      title: t.services.title13,
      description: t.services.description13,
      image: "/services/LT-s13.jpg",
    }, {
      title: t.services.title14,
      description: t.services.description14,
      image: "/services/LT-s14.jpg",
    }, {
      title: t.services.title15,
      description: t.services.description15,
      image: "/services/LT-s15.jpg",
    }, {
      title: t.services.title16,
      description: t.services.description16,
      image: "/services/LT-s16.jpg",
    }, {
      title: t.services.title17,
      description: t.services.description17,
      image: "/services/LT-s17.jpg",
    }, {
      title: t.services.title18,
      description: t.services.description18,
      image: "/services/LT-s18.jpg",
    },
    {
      title: t.services.title19,
      description: t.services.description19,
      image: "/services/LT-s19.jpg",
    },
    
  ];

  return (
    <section className="w-screen overflow-x-visible relative sliderServices">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, Mousewheel]}
        mousewheel={true}
        autoplay={{
          delay: 3500, // Задержка между слайдами в миллисекундах
          disableOnInteraction: false, // Автопрокрутка не останавливается при взаимодействии
        }}
        effect="creative"
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-20%", 0, -1],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        loop={true}
        className="h-full"
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          2560: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div
              className="aspect-1/1 bg-cover bg-center flex items-end justify-center relative group"
              style={{
                backgroundImage: `url(${service.image})`,
              }}
            >
              {/* Градиент */}
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/70 to-transparent transition-all duration-300 group-hover:h-1/2"></div>
              {/* Название */}
              <h3 className="text-4xl font-bold uppercase text-white z-10 transition-transform duration-300 group-hover:translate-y-[-10px] pb-7">
                {service.title}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

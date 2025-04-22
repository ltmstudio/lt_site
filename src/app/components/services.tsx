"use client";

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
  const services = [
    {
      title: "Объёмные буквы",
      description: "Описание услуги 1",
      image: "/services/banner.jpg",
    },
    {
      title: "Объёмные буквы",
      description: "Описание услуги 2",
      image: "/services/banner1.jpg",
    },
    {
      title: "Объёмные буквы",
      description: "Описание услуги 3",
      image: "/services/banner2.jpg",
    },
    {
      title: "Объёмные буквы",
      description: "Описание услуги 3",
      image: "/services/banner5.jpg",
    },
    {
      title: "Объёмные буквы",
      description: "Описание услуги 3",
      image: "/services/banner6.jpg",
    },
    {
      title: "Объёмные буквы",
      description: "Описание услуги 3",
      image: "/services/banner44.jpg",
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

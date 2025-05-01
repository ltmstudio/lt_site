"use client";

import Image from "next/image";
import { useLanguage } from "../context/langContext";

const contactInfoTemplate = (t: any) => [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
      </svg>
    ),
    text: t.contact.location,
    link: "https://www.google.com/maps/place/Lebizli+Turkmen/@37.956786,58.4257606,19z",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M6.62 10.79a15.91 15.91 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 12.03 12.03 0 003.78.6c.55 0 1 .45 1 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.3.21 2.55.6 3.74.12.35.03.75-.25 1.03l-2.23 2.02z"/>
      </svg>
    ),
    text: "+993 12 75 43 93",
    link: "tel:+99312754393",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>
    ),
    text: "info@lebizliturkmen.com",
    link: "mailto:info@lebizliturkmen.com",
  },
];

export default function Footer({ isAnimating }: { isAnimating: boolean }) {
  const { t } = useLanguage();
  const contactInfo = contactInfoTemplate(t);

  return (
    <footer
      className={`border-t-4 border-black-500 shrink-0 px-4 py-6 flex flex-col lg:flex-row justify-between items-center ${
        isAnimating ? "animate-fadeIn" : "opacity-100"
      }`}
    >
      {/* Логотип и подпись */}
      <div className="w-full lg:w-1/3 flex flex-col gap-3 items-start">
        <a
          href="https://ltm.studio/ru"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by LTM Studio
        </a>
        <Image
          aria-hidden
          src="/banners/ellipses.svg"
          alt="File icon"
          width={100}
          height={100}
        />
      </div>

      {/* Контакты */}
      <div className="w-full lg:w-2/3 mt-6 lg:mt-0 flex flex-col lg:flex-row gap-4 lg:gap-8 justify-end items-start lg:items-center text-left">
        {contactInfo.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3"
          >
            {item.icon}
            <span>{item.text}</span>
          </a>
        ))}
      </div>
    </footer>
  );
}

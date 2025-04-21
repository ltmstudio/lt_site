"use client";

import { useState } from "react";
import { useLanguage } from "../context/langContext";

export default function Header() {
  const { lang, setLang } = useLanguage();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const languages = [
    { code: "ru", label: "Русский", icon: "/icons/ru.svg" },
    { code: "en", label: "English", icon: "/icons/en.svg" },
    { code: "tm", label: "Türkmen", icon: "/icons/tm.svg" },
  ];
  const handleLanguageChange = (code: string) => {
    setLang(code);
    setIsDropdownOpen(false); // Закрываем dropdown после выбора
  };

  return (
    <header className="h-[7.5%] shrink-0 flex justify-between items-center svgColor">
      <svg
        width="313"
        height="77"
        viewBox="0 0 313 77"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="logoLet w-[150px] sm:w-[100px] md:w-[200px] lg:w-[200px] h-auto object-contain"
      >
        <g clipPath="url(#clip0_7_43)">
          <path
            d="M231.02 31.22V-9.76585e-06H237.26V31.22H231.02ZM187.31 31.22V-9.76585e-06H193.55V24.98H224.77C224.77 26.74 224.15 28.22 222.91 29.42C221.68 30.63 220.21 31.23 218.52 31.23H187.3L187.31 31.22ZM143.6 31.22L168.58 6.23999H149.85C148.09 6.23999 146.61 5.63999 145.41 4.42999C144.2 3.19999 143.6 1.71999 143.6 -0.0100098H181.06V3.10999L159.21 24.96H174.82C176.54 24.96 178.01 25.58 179.21 26.82C180.45 28.05 181.07 29.52 181.07 31.21H143.61L143.6 31.22ZM131.11 31.22V-9.76585e-06H137.35V31.22H131.11ZM87.4 31.22V12.49H115.5C116.35 12.49 117.07 12.2 117.7 11.62C118.32 11 118.62 10.25 118.62 9.36999V6.24999H87.4V-9.76585e-06H124.86V12.49C124.86 13.36 124.55 14.11 123.94 14.74C123.32 15.32 122.59 15.61 121.74 15.61C122.59 15.61 123.31 15.92 123.94 16.53C124.56 17.15 124.86 17.88 124.86 18.73V31.22H87.4ZM118.62 24.98V21.86C118.62 21.01 118.31 20.29 117.7 19.66C117.08 19.04 116.35 18.74 115.5 18.74H93.65V24.98H118.63H118.62ZM49.95 6.23999C48.19 6.23999 46.71 5.63999 45.51 4.42999C44.3 3.19999 43.7 1.71999 43.7 -0.0100098H81.16C81.16 1.74999 80.54 3.22999 79.3 4.42999C78.07 5.63999 76.6 6.23999 74.91 6.23999H49.93H49.95ZM49.95 18.73C48.19 18.73 46.71 18.13 45.51 16.92C44.3 15.69 43.7 14.21 43.7 12.48H81.16C81.16 14.24 80.54 15.72 79.3 16.92C78.07 18.13 76.6 18.73 74.91 18.73H49.93H49.95ZM49.95 31.22C48.19 31.22 46.71 30.62 45.51 29.41C44.3 28.18 43.7 26.7 43.7 24.97H81.16C81.16 26.73 80.54 28.21 79.3 29.41C78.07 30.62 76.6 31.22 74.91 31.22H49.93H49.95ZM0 31.22V-9.76585e-06H6.24V24.98H37.46C37.46 26.74 36.84 28.22 35.6 29.42C34.37 30.63 32.9 31.23 31.21 31.23H0V31.22Z"
            fill="currentColor"
          />
          <path
            d="M280.97 76.1V51.12L274.73 44.88H284.1L305.95 66.73V44.88H312.19V76.1H305.95L287.22 57.37V76.1H280.98H280.97ZM237.26 51.12C235.5 51.12 234.02 50.52 232.82 49.31C231.61 48.08 231.01 46.6 231.01 44.87H268.47C268.47 46.63 267.85 48.11 266.61 49.31C265.38 50.52 263.91 51.12 262.22 51.12H237.24H237.26ZM237.26 63.61C235.5 63.61 234.02 63.01 232.82 61.8C231.61 60.57 231.01 59.09 231.01 57.36H268.47C268.47 59.12 267.85 60.6 266.61 61.8C265.38 63.01 263.91 63.61 262.22 63.61H237.24H237.26ZM237.26 76.1C235.5 76.1 234.02 75.5 232.82 74.29C231.61 73.06 231.01 71.58 231.01 69.85H268.47C268.47 71.61 267.85 73.09 266.61 74.29C265.38 75.5 263.91 76.1 262.22 76.1H237.24H237.26ZM181.07 76.1V51.12L174.83 44.88H184.2L199.81 60.49L215.42 44.88H224.79L218.55 51.12V76.1H212.31V57.37L202.94 66.74V76.11H196.7V66.74L187.33 57.37V76.1H181.09H181.07ZM159.22 76.1L143.61 60.49L159.22 44.88H168.59L156.1 57.37H156.05L152.98 60.49L168.59 76.1H159.22ZM131.12 76.1V44.88H137.36V76.1H131.12ZM87.41 76.1V57.37H115.51C116.36 57.37 117.08 57.08 117.71 56.5C118.33 55.88 118.63 55.13 118.63 54.25V51.13H93.65C91.89 51.13 90.41 50.53 89.21 49.32C88 48.09 87.4 46.61 87.4 44.88H124.86V57.37C124.86 59.13 124.24 60.61 123 61.81C121.77 63.02 120.3 63.62 118.61 63.62H112.37L124.86 76.11H115.49L103 63.62H93.63V76.11H87.39L87.41 76.1ZM74.92 63.61V44.88H81.16V63.61H74.92ZM43.7 63.61V44.88H49.94V63.61H43.7ZM49.94 76.1C48.18 76.1 46.7 75.5 45.5 74.29C44.29 73.06 43.69 71.58 43.69 69.85H81.15C81.15 71.61 80.53 73.09 79.29 74.29C78.06 75.5 76.59 76.1 74.9 76.1H49.92H49.94ZM15.6 76.1V51.12H6.23999C4.47999 51.12 2.99999 50.52 1.79999 49.31C0.58999 48.08 -0.0100098 46.6 -0.0100098 44.87H37.45C37.45 46.63 36.83 48.11 35.59 49.31C34.36 50.52 32.89 51.12 31.2 51.12H21.83V76.1H15.59H15.6Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="clip0_7_43">
            <rect width="312.19" height="76.1" fill="currentColor" />
          </clipPath>
        </defs>
      </svg>
      <div className="flex gap-5">
        <div className="relative flex items-center">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2  rounded-full px-3 py-1"
          >
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <img
                src={languages.find((langItem) => langItem.code === lang)?.icon}
                alt={lang}
                className="w-full h-full object-cover "
              />
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 var[--foreground]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white  rounded-lg shadow-lg z-10">
              {languages.map((langItem) => (
                <button
                  key={langItem.code}
                  onClick={() => handleLanguageChange(langItem.code)}
                  className={`flex items-center gap-2 w-full px-3 py-2 hover:bg-gray-100 ${
                    lang === langItem.code ? "bg-gray-200" : ""
                  }`}
                >
                  <div className="w-8 h-8 rounded-full overflow-hidden ">
                    <img
                      src={langItem.icon}
                      alt={langItem.label}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-black text-thin text-base">
                    {langItem.label}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
        <svg
          width="95"
          height="77"
          viewBox="0 0 95 77"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="logo w-[50px] sm:w-[100px] md:w-[70px] lg:w-[50px] h-auto object-contain"
        >
          <path
            d="M0 38.246V76.4919H27.5083C57.7892 76.4919 56.2315 76.5809 60.2814 74.6537C64.8298 72.4598 68.5059 67.0342 68.537 62.4684V61.3714H42.2126H15.8881V30.6857V-1.1145e-06H7.94406H0V38.246Z"
            fill="currentColor"
          />
          <path
            d="M40.6551 0.296513C36.4805 0.830178 33.3652 2.63871 31.901 5.39597C31.0287 7.02662 30.2188 10.1693 30.2188 11.9185V13.0452H37.0725H43.9262V6.5226V3.27379e-05L43.2408 0.0296808C42.8358 0.0593288 41.6831 0.177921 40.6551 0.296513Z"
            fill="currentColor"
          />
          <path
            d="M53.5835 26.2385V52.4771H60.9045H68.2255L68.2878 32.8501L68.3813 13.1934L76.7926 13.0155C84.5186 12.8673 85.3597 12.808 86.9486 12.215C91.5281 10.4954 93.553 7.64923 93.9892 2.31258L94.1761 3.40715e-05H73.8642H53.5835V26.2385Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </header>
  );
}

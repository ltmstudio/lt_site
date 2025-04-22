"use client";

import Image from "next/image";
const contactInfo = [
  {
    icon: (
      <svg
        width="40"
        height={20}
        // viewBox="fit"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto"
      >
        <path
          d="M12.1758 11.6C11.5127 11.6 10.8769 11.3366 10.408 10.8677C9.93917 10.3989 9.67578 9.76302 9.67578 9.09998C9.67578 8.43693 9.93917 7.80105 10.408 7.33221C10.8769 6.86337 11.5127 6.59998 12.1758 6.59998C12.8388 6.59998 13.4747 6.86337 13.9435 7.33221C14.4124 7.80105 14.6758 8.43693 14.6758 9.09998C14.6758 9.42828 14.6111 9.75337 14.4855 10.0567C14.3598 10.36 14.1757 10.6356 13.9435 10.8677C13.7114 11.0999 13.4358 11.284 13.1325 11.4097C12.8292 11.5353 12.5041 11.6 12.1758 11.6ZM12.1758 2.09998C10.3193 2.09998 8.53879 2.83747 7.22603 4.15023C5.91328 5.46298 5.17578 7.24346 5.17578 9.09998C5.17578 14.35 12.1758 22.1 12.1758 22.1C12.1758 22.1 19.1758 14.35 19.1758 9.09998C19.1758 7.24346 18.4383 5.46298 17.1255 4.15023C15.8128 2.83747 14.0323 2.09998 12.1758 2.09998Z"
          fill="currentColor"
        />
      </svg>
    ),
    text: "г. Ашхабад, Беркарарлык этрап, 2127 ул. (Г. Гулыева), 26A",
    link: "#",
  },
  {
    icon: (
      <svg
        height={20}
        width="40"
        // viewBox="100%"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.0382 21.8108C14.6582 21.76 10.7472 21.2195 6.65128 17.1245C2.55632 13.0286 2.01678 9.11859 1.96503 7.73764C1.88836 5.63314 3.50028 3.58901 5.36232 2.79072C5.58655 2.6939 5.8321 2.65703 6.07487 2.68375C6.31765 2.71046 6.5493 2.79983 6.74711 2.94309C8.28045 4.06051 9.33845 5.75101 10.2469 7.08022C10.4468 7.37225 10.5323 7.72762 10.4871 8.07861C10.4418 8.4296 10.269 8.75167 10.0016 8.98347L8.13191 10.3721C8.04157 10.4373 7.97799 10.5331 7.95296 10.6417C7.92793 10.7503 7.94316 10.8642 7.99582 10.9624C8.41941 11.732 9.17266 12.8781 10.0352 13.7406C10.8977 14.6031 12.0984 15.4062 12.9217 15.8777C13.0249 15.9357 13.1464 15.9519 13.2612 15.923C13.3759 15.8941 13.4753 15.8224 13.5388 15.7225L14.7559 13.87C14.9797 13.5728 15.3098 13.3737 15.677 13.3144C16.0443 13.255 16.4203 13.3402 16.7262 13.5518C18.0746 14.4853 19.6482 15.5251 20.8001 16.9999C20.955 17.1992 21.0535 17.4364 21.0854 17.6867C21.1173 17.9371 21.0813 18.1914 20.9812 18.4231C20.1791 20.2947 18.1494 21.8884 16.0382 21.8108Z"
          fill="currentColor"
        />
      </svg>
    ),
    text: "+993 12 75 43 93",
    link: "tel:+99312754393",
  },
  {
    icon: (
      <svg
        height={20}
        width="40"
        // viewBox="100%"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full"
      >
        <path
          d="M4.17578 20.1C3.62578 20.1 3.15511 19.9043 2.76378 19.513C2.37245 19.1216 2.17645 18.6506 2.17578 18.1V6.09998C2.17578 5.54998 2.37178 5.07931 2.76378 4.68798C3.15578 4.29664 3.62645 4.10064 4.17578 4.09998H20.1758C20.7258 4.09998 21.1968 4.29598 21.5888 4.68798C21.9808 5.07998 22.1764 5.55064 22.1758 6.09998V18.1C22.1758 18.65 21.9801 19.121 21.5888 19.513C21.1974 19.905 20.7264 20.1006 20.1758 20.1H4.17578ZM12.1758 13.1L20.1758 8.09998V6.09998L12.1758 11.1L4.17578 6.09998V8.09998L12.1758 13.1Z"
          fill="currentColor"
        />
      </svg>
    ),
    text: "lebizliturkmen@mail.ru",
    link: "mailto:lebizliturkmen@mail.ru",
  },
];
export default function Footer({ isAnimating }: { isAnimating: boolean }) {
  return (
    <footer
      className={`lg:h-[10%] md:h-full sm:h-full h-full border-t-4  border-black-500 shrink-0 lg:sticky lg:bottom-0  px-4 py-6 flex flex-col lg:flex-row md:flex-col sm:flex-col justify-between lg:justify-between  md:justify-center sm:justify-center items-center ${
        isAnimating ? "animate-fadeIn" : "opacity-100"
      }`}
    >
      <div className="logoFooter basis-4/12 lg:basis-4/12 w-full md:w-full sm:w-full flex-col flex gap-3 items-start lg:items-start md:items-center sm:items-start ">
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
      <div className=" basis-8/12 lg:basis-8/12 md:w-full sm:w-full flex justify-end">
        <div className="flex flex-col lg:flex-row md:flex-row sm:flex-col gap-1">
          {contactInfo.map((item, index) => (
            <a
              key={index}
              className="flex items-center lg:justify-center md:justify-center lg:justify-start w-full h-fit"
              href={item.link}
            >
              <div className="flex gap-3">
                {item.icon}
                {item.text}
              </div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

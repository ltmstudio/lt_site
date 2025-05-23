"use client";

import { useState } from "react";
import Services from "./components/services";
import Stages from "./components/stages";
import Header from "./components/header";
import Footer from "./components/footer";
import Gallery from "./components/worksgGallery";
import { useLanguage } from "./context/langContext";

export default function Home() {
  const { t } = useLanguage(); // Получаем переводы из контекста
  const [isImageBackground, setIsImageBackground] = useState(true);
  const [isVideoBackground, setIsVideoBackground] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [activeMenuItem, setActiveMenuItem] = useState<number>(0);
  const [currentStage, setCurrentStage] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleAccordion = (index: number) => {
    setIsAnimating(true); // Включаем анимацию
    setTimeout(() => setIsAnimating(false), 1500); // Отключаем анимацию через 1.5 секунды
    setActiveIndex(activeIndex === index ? null : index);
    setActiveMenuItem(index);

    if (index !== 2) {
      setCurrentStage(null);
    }
    setIsImageBackground(index === 0);
    setIsVideoBackground(index === 3);
  };

  const stages = [
    {
      title: t.page.title1,
      description: t.page.description1,
      icon: "/icons/brief.svg",
      position:
        "top-[-5%] left-[60%] md:top-[-5%] md:left-[-5%] lg:top-[-7%] lg:left-[-30%]",
      color: "skyGrad",
      delay: 0,
    },
    {
      title: t.page.title2,
      description: t.page.description2,
      icon: "/icons/design.svg",
      position: "lg:top-[30%] lg:left-[-10%] md:top-[20%] md:left-[5%] ",
      color: "yellGrad",
      delay: 300,
    },
    {
      title: t.page.title3,
      description: t.page.description3,
      icon: "/icons/approve.svg",
      position: "lg:top-[65%] lg:left-[-10%] md:top-[60%] md:left-[5%] ",
      color: "blueGrad",
      delay: 600,
    },
    {
      title: t.page.title4,
      description: t.page.description4,
      icon: "/icons/realisation.svg",
      position:
        "lg:bottom-[-20%] lg:left-[-30%] md:bottom-[-5%] md:left-[-5%] ",
      color: "pinkGrad",
      delay: 900,
    },
  ];

  const menuItems = [
    {
      title: t.menu.company,
      content: t.menu.menuContent1,
    },
    {
      title: t.menu.services,
      content: "",
    },
    {
      title: t.menu.stages,
      content: (
        <div>
          <ul className="list-disc pl-5">
            {stages.map((stage, index) => (
              <li key={index}>
                <button
                  className="text-gray-600 hover:underline"
                  onClick={() => setCurrentStage(index)}
                >
                  {stage.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      title: t.menu.capabilities,
      content: (
        <div>
          <ul className="list-disc pl-5">
            <li>
              <span>{t.capabilities.title1}</span>
              <br />
              {t.capabilities.description1}
            </li>
            <li>
              <span>{t.capabilities.title2}</span>
              <br />
              {t.capabilities.description2}
            </li>
            <li>
              <span>{t.capabilities.title3}</span>
              <br />
              {t.capabilities.description3}
            </li>
            <li>
              <span>{t.capabilities.title4}</span>
              <br />
              {t.capabilities.description4}
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: t.menu.works,
      content: t.page.content,
    },
  ];

  return (
    <div
      className={`min-h-screen w-full relative lg:h-screen md:h-full sm:min-h-screen flex flex-col justify-between mainContainer ${
        isVideoBackground
          ? "homeVideo theme-dark"
          : isImageBackground
          ? "homeBg theme-dark bg-center"
          : "theme-light"
      }`}
    >
      {isVideoBackground && (
        <>
          <video
            autoPlay
            loop
            muted
            className="h-full w-full absolute top-0 left-0 object-cover z-[-2]"
          >
            <source src="/videos/video_services.mp4" type="video/mp4" />
            Ваш браузер не поддерживает видео.
          </video>
          <div className="absolute top-0 left-0 w-full h-full z-[-1] bg-gradient-to-b from-black/60 to-black/60" />
        </>
      )}
      <div
        className={`lg:h-[90%] md:h-full sm:h-full h-full flex ${
          isAnimating ? "animate-fade" : ""
        }`}
      >
        <div className="border-l-4 h-[99%]"></div>
        <div className="flex flex-col h-full w-full divider">
          <Header onLogoClick={() => setActiveMenuItem(0)} />
          <main className="h-full flex-grow lg:h-full align-center overflow-hidden">
            <section className="mainContent flex align-center flex-col w-full sm:flex-col md:flex-col lg:flex-row 2xl:flex-row gap-5">
              <div className="flex-grow sm:w-full md:w-full lg:w-3/12 flex">
                <nav className="h-full w-full max-h-[calc(100vh-150px)] overflow-y-auto pr-2">
                  <ul>
                    {menuItems.map((item, index) => (
                      <li key={index} className="border-b-3 border-black-500">
                        <button
                          className="w-full text-left py-3 font-sans heading font-medium uppercase"
                          onClick={() => toggleAccordion(index)}
                        >
                          <h2>{item.title}</h2>
                        </button>
                        {activeIndex === index && (
                          <div
                            className={`text-md font-thin menuText transition-all duration-500 ease-in-out ${
                              activeIndex === index
                                ? "max-h-[1000px] pb-3"
                                : "max-h-0"
                            }`}
                          >
                            {item.content}
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div
                className={`w-full sm:w-full md:w-full lg:w-8/12 ${
                  activeMenuItem === 4
                    ? "w-full max-h-[calc(100vh-150px)] overflow-y-auto"
                    : ""
                }`}
              >
                {activeMenuItem === 0 && <div></div>}
                {activeMenuItem === 1 && <Services />}
                {activeMenuItem === 2 && (
                  <Stages currentStage={currentStage} stages={stages} />
                )}
                {activeMenuItem === 4 && <Gallery />}
                {activeMenuItem === 3 && <div></div>}
              </div>
            </section>
          </main>
        </div>
      </div>
      <Footer isAnimating={isAnimating}></Footer>
    </div>
  );
}
"use client";

import { useState } from "react";
import Services from "./components/services";
import Stages from "./components/stages";
import Header from "./components/header";
import Footer from "./components/footer";
import Gallery from "./components/worksgGallery";
import { useLanguage } from "./context/langContext";


export default function Home() {
  const { t } = useLanguage();
  const [isImageBackground, setIsImageBackground] = useState(true);
  const [isVideoBackground, setIsVideoBackground] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [activeMenuItem, setActiveMenuItem] = useState<number>(0);
  const [currentStage, setCurrentStage] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const toggleAccordion = (index: number) => {
    setIsAnimating(true); // Включаем анимацию
    setTimeout(() => setIsAnimating(false), 1500); // Отключ
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
      title: "БРИФ",
      description:
        "Согласование брифа с заказчиком, обсуждение заказа, назначение срока выполнения. ДИЗАЙН ОТДЕЛ",
      icon: "/icons/brief.svg",
      position:
        "top-[-5%] left-[60%] md:top-[-5%] md:left-[-5%] lg:top-[-5%] lg:left-[-30%]",
      color: "skyGrad",
      delay: 0,
    },
    {
      title: "ДИЗАЙН ОТДЕЛ",
      description:
        "Поиск оригинальных идей, Отбор лучших идей по брифу и эстетическим критериям",
      icon: "/icons/design.svg",
      position: "lg:top-[25%] lg:left-[-10%] md:top-[20%] md:left-[5%] ",
      color: "yellGrad",
      delay: 300,
    },
    {
      title: "УТВЕРЖДЕНИЕ",
      description: "Согласование с заказчиком, Внесение правок и пожеланий.",
      icon: "/icons/approve.svg",
      position: "lg:top-[65%] lg:left-[-10%] md:top-[60%] md:left-[5%] ",
      color: "blueGrad",
      delay: 600,
    },
    {
      title: "ВОПЛОЩЕНИЕ",
      description: "Исполнение заказа с учетом всех пожеланий заказчика",
      icon: "/icons/realisation.svg",
      position:
        "lg:bottom-[-10%] lg:left-[-25%] md:bottom-[-5%] md:left-[-5%] ",
      color: "pinkGrad",
      delay: 900,
    },
  ];

  const menuItems = [
    {
      title: t.menu.company,
      content:
        "Мы – молодая компания, основанная в 2020 году, обладающая современным высокотехнологичным, прецизионным, высокопроизводительным оборудованием и опытными специалистами имеющими стаж в данной сфере не менее 10 лет. Мы ориентированы на стабильную работу с крупным и надежным заказчиком и со своей стороны гарантируем заказчику непревзойденное качество продукции и своевременные поставки в любую точку Туркменистана. Мы, в первую очередь производственная компания. Все что мы предлагаем клиенту – сделано в наших собственных цехах. Процесс производства контролируется от поставки материала до отгрузки на склад заказчику.",
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
              <span>Дизайн студия</span>
              <br></br>3D дизайн интерьера и экстерьера, Графический дизайн,
              Разработка логотипа, фирменного стиля, буклета, флаера, визитки,
              баннера и.т.п.
            </li>
            <li>
              <span>Центр печати</span>
              <br></br>Лазерная печать, Струйная печать, Офсетная печать,
              Широкоформатная Сольвентная до 140м в час, Эко-сольвентная печать,
              UV печать
            </li>
            <li>
              <span>Центр резки и гравировки</span>
              <br></br>Лазерная резка, Лазерная гравировка Фрезерная резка,
              Фрезерная гравировка Фрезерная 3D гравировка, Плоттерная резка
            </li>
            <li>
              <span>Сборочно-монтажный цех</span>
              <br></br> Ни одна рекламная конструкция не может избежать этапа
              ручной сборки. В сборочном цеху работают опытные специалисты,
              используется лучший ручной инструмент и машины.
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: t.menu.works,
      content:
        "Мы контролируем весь процесс от поставки материалов до отгрузки.",
    },
  ];

  return (
    <div
      className={`h-auto w-full lg:h-screen md:h-full sm:h-full flex flex-col justify-between mainContainer   ${
        isVideoBackground
          ? "homeVideo theme-dark"
          : isImageBackground
          ? "homeBg theme-dark bg-center"
          : "theme-light"
      }`}
    >
      {isVideoBackground && (
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        >
          <source src="/videos/video_services.mp4" type="video/mp4" />
          Ваш браузер не поддерживает видео.
        </video>
      )}
      <div
        className={`flex flex-grow h-full  overflow-y-hidden overflow-x-visible  ${isAnimating ? "animate-fade" : ""}`}
      >
        <div className="border-l-3 h-[99%]"></div>
        <div className="flex flex-col h-full w-full divider">
          <Header />
          <main className="h-full flex-grow lg:h-full align-center">
            <section className="mainContent flex align-center flex-col w-full sm:flex-col md:flex-col lg:flex-row 2xl:flex-row gap-5">
              <div
                className="flex-grow sm:w-full md:w-full lg:w-3/12 flex
              "
              >
                <nav className="h-full w-full max-h-[calc(100vh-150px)] overflow-y-auto pr-2">
                  <ul className="">
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
                            className={`text-md font-thin  transition-all duration-500 ease-in-out ${
                              activeIndex === index
                                ? "max-h-[1000px] pb-3"
                                : "max-h-0"
                            } 
                          `}
                          >
                            {item.content}
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div className="w-full h-full sm:w-full md:w-full lg:w-8/12 ]">
                {activeMenuItem === 0 && <div></div>}
                {activeMenuItem === 1 && <Services />}
                {activeMenuItem === 2 && (
                  <Stages currentStage={currentStage} stages={stages} />
                )}
                {activeMenuItem === 3 && <div></div>}
                {activeMenuItem === 4 && <Gallery />}
              </div>
            </section>
          </main>
        </div>
      </div>

      <Footer isAnimating={isAnimating}></Footer>
    </div>
  );
}

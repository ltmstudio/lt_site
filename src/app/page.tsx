"use client";

import { useState } from "react";
import Services from "./components/services";
import Stages from "./components/stages";
import Header from "./components/header";
import Footer from "./components/footer";
import Gallery from "./components/worksgGallery";

export default function Home() {
  const [isImageBackground, setIsImageBackground] = useState(true);
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [activeMenuItem, setActiveMenuItem] = useState<number>(0);
  const [currentStage, setCurrentStage] = useState<number | null>(null);
  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
    setActiveMenuItem(index);

    // Сбрасываем currentStage, если выбран другой пункт меню
    if (index !== 2) {
      setCurrentStage(null);
    }
    setIsImageBackground(index === 0);
  };
  const stages = [
    {
      title: "БРИФ",
      description:
        "Согласование брифа с заказчиком, обсуждение заказа, назначение срока выполнения. ДИЗАЙН ОТДЕЛ",
      icon: "/icons/brief.svg",
      position:
        "top-[-5%] left-[60%] md:top-[0%] md:left-[40%] lg:top-[-5%] lg:left-[-30%]",
      color: "skyGrad",
      delay: 0,
    },
    {
      title: "ДИЗАЙН ОТДЕЛ",
      description:
        "Поиск оригинальных идей, Отбор лучших идей по брифу и эстетическим критериям",
      icon: "/icons/design.svg",
      position: "lg:top-[25%] lg:left-[-10%] md:top-[30%] md:left-[55%] ",
      color: "yellGrad",
      delay: 300,
    },
    {
      title: "УТВЕРЖДЕНИЕ",
      description: "Согласование с заказчиком, Внесение правок и пожеланий.",
      icon: "/icons/approve.svg",
      position: "lg:top-[65%] lg:left-[-10%] md:top-[62%] md:left-[55%] ",
      color: "blueGrad",
      delay: 600,
    },
    {
      title: "ВОПЛОЩЕНИЕ",
      description: "Исполнение заказа с учетом всех пожеланий заказчика",
      icon: "/icons/realisation.svg",
      position:
        "lg:bottom-[-10%] lg:left-[-25%] md:bottom-[-5%] md:left-[40%] ",
      color: "pinkGrad",
      delay: 900,
    },
  ];

  const menuItems = [
    {
      title: "РЕКЛАМНО - ПРОИЗВОДСТВЕННАЯ КОМПАНИЯ",
      content:
        "Мы – молодая компания, основанная в 2020 году, обладающая современным высокотехнологичным, прецизионным, высокопроизводительным оборудованием и опытными специалистами имеющими стаж в данной сфере не менее 10 лет. Мы ориентированы на стабильную работу с крупным и надежным заказчиком и со своей стороны гарантируем заказчику непревзойденное качество продукции и своевременные поставки в любую точку Туркменистана. Мы, в первую очередь производственная компания. Все что мы предлагаем клиенту – сделано в наших собственных цехах. Процесс производства контролируется от поставки материала до отгрузки на склад заказчику.",
    },
    {
      title: "Услуги",
      content: "",
    },
    {
      title: "Этапы работы",
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
      title: "Производственные возможности",
      content:
        "Мы контролируем весь процесс от поставки материалов до отгрузки.",
    },
    {
      title: "Наши работы",
      content:
        "Мы контролируем весь процесс от поставки материалов до отгрузки.",
    },
  ];

  return (
    <div
      className={`h-full lg:h-screen flex flex-col justify-between mainContainer   ${
        isImageBackground ? "homeBg bg-center" : "bg-white"
      }`}
    >
      <div className="flex flex-grow h-full overflow-hidden">
        <div className="border-l-3 h-[99%]"></div>
        <div className="flex flex-col h-full w-full divider">
          <Header isImageBackground={isImageBackground} />
          <main className="h-full flex-grow lg:h-full align-center">
            <div className="flex align-center flex-col w-full sm:flex-col md:flex-col lg:flex-row 2xl:flex-row gap-5">
              <div className="flex-grow sm:w-full md:w-full lg:w-3/12 flex menuCont">
                <nav className="h-full max-h-[calc(100vh-150px)] overflow-y-auto pr-2">
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
                            className={`text-md font-thin overflow-hidden transition-all duration-500 ease-in-out ${
                              activeIndex === index
                                ? "max-h-[1000px] pb-3"
                                : "max-h-0"
                            } ${
                              isImageBackground
                                ? "text-gray-100 opacity-70"
                                : "text-gray-800 opacity-70"
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
              <div className="w-full sm:w-full md:w-full lg:w-8/12 flex flex-col">
                {activeMenuItem === 0 && <div></div>}
                {activeMenuItem === 1 && <Services />}
                {activeMenuItem === 2 && (
                  <Stages currentStage={currentStage} stages={stages} />
                )}
                {activeMenuItem === 3 && (
                  <div>Производственные возможности</div>
                )}
                {activeMenuItem === 4 && (
                 < Gallery/>
                )}
              </div>
            </div>
          </main>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

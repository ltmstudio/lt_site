"use client";

import Image from "next/image";

export default function Stages({
  currentStage,
  stages,
}: {
  currentStage: number | null;
  stages: Array<{
    title: string;
    description: string;
    icon: string;
    position: string;
    color: string;
    delay: number;
  }>;
}) {
  return (
    <div className="StagesCon w-full h-full flex flex-row">
      <div className="w-1/2 flex items-center justify-center hidden lg:flex md:flex sm:hidden">
        <Image
          src="/banners/stages.svg"
          alt="Stages"
          width={400}
          height={400}
          className="StagesBan w-[200px] md:w-[350px] lg:w-[300px] h-auto object-contain"
        />
      </div>

      <div className="w-1/2 relative flex items-center justify-center hidden lg:flex md:flex sm:hidden">
        {stages.map((stage, index) => (
          <div
            key={index}
            className={`absolute ${
              stage.position
            }  max-w-[90%] transition-all duration-700 ease-out ${
              currentStage === index
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="flex items-start gap-3">
              <div
                className={`rounded-full flex items-center justify-center p-3 ${stage.color}`}
              >
                <Image
                  src={stage.icon}
                  alt={`${stage.title} icon`}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-gray-800">
                  {stage.title}
                </h3>
                <h6 className="text-gray-600">{stage.description}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full  flex items-center justify-center gap-4 lg:hidden md:hidden sm:flex flex-col ">
        {stages.map((stage, index) => (
          <div
            key={index}
            className={`${
              currentStage === null
                ? "w-full max-w-[90%] animate-fadeIn md:animate-none"
                : `absolute ${stage.position} max-w-[90%]`
            } transition-all duration-700 ease-out ${
              currentStage === index || currentStage === null
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
            style={{
              animationDelay: `${stage.delay}ms`,
            }}
          >
            <div className="flex items-start gap-3">
              <div
                className={`rounded-full flex items-center justify-center p-3 ${stage.color}`}
              >
                <Image
                  src={stage.icon}
                  alt={`${stage.title} icon`}
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-gray-800">
                  {stage.title}
                </h3>
                <h6 className="text-gray-600">{stage.description}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

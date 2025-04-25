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
      {/* Левая часть с картинкой */}
      <div className="w-1/2 flex items-center justify-center hidden lg:flex md:flex sm:hidden">
        <Image
          src="/banners/stages.svg"
          alt="Stages"
          width={400}
          height={400}
          className="StagesBan w-[200px] md:w-[350px] lg:w-[300px] h-auto object-contain"
        />
      </div>

      {/* Правая часть с элементами stages */}
      <div className="w-1/2 relative flex items-center justify-center hidden lg:flex md:flex sm:hidden">
        {stages.map((stage, index) => (
          <div
            key={index}
            className={`absolute ${stage.position} max-w-[100%] transition-all duration-700 ease-out opacity-100`}
          >
            <div className="flex items-start gap-4">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${stage.color}`}
              >
                <Image
                  src={stage.icon}
                  alt={`${stage.title} icon`}
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-gray-800">
                  {stage.title}
                </h3>
                <p className="text-md text-gray-600">{stage.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex items-center justify-center gap-4 lg:hidden md:hidden sm:flex flex-col">
        {stages.map((stage, index) => (
          <div
            key={index}
            className="w-full px-4 py-3 transition-all duration-700 ease-out opacity-100"
          >
            <div className="flex items-start gap-4">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${stage.color}`}
              >
                <Image
                  src={stage.icon}
                  alt={`${stage.title} icon`}
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-800">
                  {stage.title}
                </h3>
                <p className="text-sm text-gray-600">{stage.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

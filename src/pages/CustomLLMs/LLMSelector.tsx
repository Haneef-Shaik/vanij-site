import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

import BackDropFilter from "../../assets/BackDropFilter.svg"

export default function Component() {
  return (
    <div className="relative min-h-screen grid grid-cols-12 gap-8 place-content-center">
      <h1 className="col-span-12 py-10 font-manrope text-[44px] leading-[52.8px] tracking-[-0.04em] text-center max-w-lg mx-auto text-[#FFFFFF] z-50">
        Choose the Right LLM for Your Needs
      </h1>
      <div className="col-span-12 md:col-start-2 md:col-end-5 pt-8 pb-32 z-50">
        <ModelCard
          title="2 Billion"
          subtitle="Parameter Model"
          description="Here we can have a small body copy regarding the domain here we can have a small body copy regarding the domain."
        />
      </div>
      <div className="hidden md:block md:col-start-6 md:col-end-8  pt-8 pb-32">
        <div className="h-full w-[3px] bg-gray-800 mx-auto rounded-full"></div>
      </div>
      <div className="col-span-12 md:col-start-9 md:col-end-12  pt-8 pb-32 z-50">
        <ModelCard
          title="7 Billion"
          subtitle="Parameter Model"
          description="Here we can have a small body copy regarding the domain here we can have a small body copy regarding the domain."
        />
      </div>
      <img src={BackDropFilter} alt="" className="absolute -top-[100px] -left-[170px] -z-0"/>
      <img src={BackDropFilter} alt="" className="absolute -top-[100px] right-[20px] -z-0"/>
    </div>
  );
}

function ModelCard({
  title,
  subtitle,
  description,
}: {
  title: string;
  subtitle: string;
  description: string;
}) {
  return (
    <div className="flex flex-col h-full justify-center items-center text-center">
      <div>
        <div className="text-gradient_1 z-10 max-sm:text-[36px] text-[72px] font-medium font-[Manrope] leading-[110%] pb-2">
          {title}
        </div>
        <h3 className="text-xl md:text-3xl mb-6">{subtitle}</h3>
        <p className="text-gray-400 text-sm mb-8 max-w-[16rem] mx-auto">{description}</p>
      </div>
      <Button className="max-w-[9rem]">
        Know More
        <ChevronRight />
      </Button>
    </div>
  );
}

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import AccAndPerIcon from "../../assets/icons/AIGenerateAfilled.svg";
import RupeeIcon from "../../assets/icons/Rupee.svg";
import AdvancedReasoningIcon from "../../assets/icons/AdvancedReasoning.svg";
import RecallIcon from "../../assets/icons/Recall.svg";

import Image1 from "../../assets/images/Image1.svg";

import TopToBottomBlue from "../../assets/backgrounds/TopToBottomBlue.png";

export default function Component() {
  const sections = [
    {
      id: "accuracy",
      title: "Accuracy & Performance",
      content:
        "With 98.6% accuracy, ADI consistently delivers precise results across diverse domains.",
      icon: AccAndPerIcon,
    },
    {
      id: "cost",
      title: "Cost Efficiency",
      content:
        "ADI 2.0 offers unparalleled cost-efficiency, reducing operational expenses by up to 40%.",
      icon: RupeeIcon,
    },
    {
      id: "reasoning",
      title: "Advanced Reasoning",
      content:
        "Advanced reasoning capabilities allow ADI 2.0 to tackle complex, multi-step problems with ease.",
      icon: AdvancedReasoningIcon,
    },
    {
      id: "recent",
      title: "Recent",
      content:
        "Latest updates include improved natural language understanding and faster processing times.",
      icon: RecallIcon,
    },
  ];

  return (
    <div
      style={{
        backgroundImage: `url(${TopToBottomBlue})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="relative min-h-screen grid grid-cols-12 gap-8 place-items-center w-full">
        <div className="col-start-2 col-end-8 w-full space-y-10">
          <div className="text-gradient_1 z-50 text-white max-sm:text-[34px] text-[32px] font-medium font-[Manrope] leading-[140%] max-w-5xl pb-2">
            Why ADI 2.0 Outshines <br /> SOTA models?
          </div>
          <Accordion type="single" collapsible className="w-full">
            {sections.map((section) => (
              <AccordionItem
                key={section.id}
                value={section.id}
                className="border-b-2 border-gray-400 py-2"
              >
                <AccordionTrigger className=" md:text-xl font-normal hover:no-underline">
                  <div className="flex items-center gap-5">
                    <img src={section.icon} alt="" /> {section.title}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-300 pl-11">
                  {section.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="col-start-9 col-end-12">
          <img src={Image1} alt="" />
        </div>
      </div>
    </div>
  );
}

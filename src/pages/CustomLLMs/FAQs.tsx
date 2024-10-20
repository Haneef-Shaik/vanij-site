import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Ellipse3 from "../../assets/backgrounds/Ellipse3.png"


export default function FAQs() {
  const sections = [
    {
      id: "accuracy",
      title: "Why are LLMs important for Enterprises?",
      content:
        "With 98.6% accuracy, ADI consistently delivers precise results across diverse domains.",
    },
    {
      id: "cost",
      title: "What are the Benefits of Customising LLMs ?",
      content:
        "ADI 2.0 offers unparalleled cost-efficiency, reducing operational expenses by up to 40%.",
    },
    {
      id: "reasoning",
      title: "How can Adya Help ?",
      content:
        "Advanced reasoning capabilities allow ADI 2.0 to tackle complex, multi-step problems with ease.",
    },
    {
      id: "recent",
      title: "Why do Custom LLMs Outperform Generic Ones? ",
      content:
        "Latest updates include improved natural language understanding and faster processing times.",
    },
  ];

  return (
    <div className="relative min-h-screen space-y-12 place-content-center overflow-hidden bg-black">
      <img src={Ellipse3} alt="" className="absolute -top-[50px] -left-[650px] opacity-70"/>
      <h1 className="col-span-12 font-manrope text-4xl leading-[52.8px] tracking-[-0.04em] text-center max-w-lg mx-auto text-[#FFFFFF] z-50">
        Frequently asked questions
      </h1>
      <div className="grid grid-cols-12 gap-8 place-items-center w-full">
        <div className="col-start-4 col-end-10 w-full space-y-10">
          <Accordion type="single" collapsible className="w-full">
            {sections.map((section) => (
              <AccordionItem
                key={section.id}
                value={section.id}
                className="border-b-2 border-gray-400 py-2"
              >
                <AccordionTrigger className=" md:text-xl font-normal hover:no-underline">
                  {section.title}
                </AccordionTrigger>
                <AccordionContent className="text-base text-gray-300">
                  {section.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}

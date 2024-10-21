import { Button } from "@/components/ui/button";
import GradientContainer from "@/components/GradientContainer/GradientContainer";
import { ChevronRight } from "lucide-react";
import HCards from "@/components/HorizontalCards/HCards";

export default function BuildYourAgents() {
  return (
    <div className="" >
      <GradientContainer>
        <div className="flex flex-col items-center gap-10 md:gap-12 p-12 w-[100dvw] overflow-x-hidden">
          <div className="flex flex-col items-center gap-3">
            {/* <div className="text-gradient_1 z-50 text-center text-white text-[3rem] leading-[3.6rem] xl:leading-[6.7rem] xl:text-[5.25rem] font-medium font-['Manrope']  w-[60dvw] 2xl:w-[50dvw]"> */}
            <div className="text-gradient_1 z-50 text-center text-white max-sm:text-[34px] text-[84px] font-medium font-[Manrope] leading-[110%] w-[80vw] md:w-[60dvw] 2xl:w-[49dvw] pb-2">
              Build and Deploy AI Agents in Hours
            </div>
            <div
              className=" text-[14px] md:text-[22px] "
              style={{
                width: "100%",
                textAlign: "center",
                color: "white",
                fontFamily: "Nunito Sans",
                fontWeight: "500",
                wordWrap: "break-word",
                letterSpacing: "-1%",
              }}
            >
              Transform enterprise workflows into <br />
              AI-powered agents.
            </div>
          </div>
          <Button className="">
            Know More
            <ChevronRight />
          </Button>
        </div>
      </GradientContainer>
      <div className="h-[100dvh] text-white grid items-center" >
              <h1 className="text-center text-5xl" >Video Here</h1>
      </div>
      <GradientContainer inverted={true}  >
              <div className="overflow-x-hidden rotate-180 p-12" >

              <div className="w-full grid place-items-center" >
              <div className="z-50 text-center text-white max-sm:text-[34px] text-[84px] font-medium font-[Manrope] leading-[110%] w-[80vw] max-w-[800px]">Vanij drag-and-drop workflow builder.</div>
              <div
              className=" text-[14px] md:text-[22px] w-2/3"
              style={{
                textAlign: "center",
                color: "white",
                fontFamily: "Nunito Sans",
                fontWeight: "500",
                wordWrap: "break-word",
                letterSpacing: "-1%",
              }}
            >Automated customer interactions or optimizing back-office operations, Vanij offers sophistication.</div>
              </div>
              <HCards  />

              </div>
      </GradientContainer>
    </div>
  );
}

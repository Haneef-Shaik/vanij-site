import { Button } from "@/components/ui/button";
import GradientContainer from "@/components/GradientContainer/GradientContainer";
import { ChevronRight } from "lucide-react";

export default function FirstBlock() {
  return (
    <div className="">
      <GradientContainer>
        <div className="flex flex-col items-center gap-10 md:gap-12">
          <div className="flex flex-col items-center gap-3">
            {/* <div className="text-gradient_1 z-50 text-center text-white text-[3rem] leading-[3.6rem] xl:leading-[6.7rem] xl:text-[5.25rem] font-medium font-['Manrope']  w-[60dvw] 2xl:w-[50dvw]"> */}
            <div className="text-gradient_1 z-50 text-center text-white max-sm:text-[34px] text-[84px] font-medium font-[Manrope] leading-[110%] max-w-5xl pb-2">
              ADI 2.0 <br /> The Next Generation of Domain-Specific LLMs
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
              Outperforming GPT-4 and other SOTA models in <br /> accuracy,
              cost-efficiency, and scalability.
            </div>
          </div>
          <Button className="">
            Know More
            <ChevronRight />
          </Button>
        </div>
      </GradientContainer>
    </div>
  );
}

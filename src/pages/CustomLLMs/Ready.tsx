import MagicColorFilledIcon from "../../assets/MagicColorFilledIcon.svg";

import BottomToTopThin from "../../assets/backgrounds/BottomToTopThin.png";

export default function Ready() {
  return (
    <div
      className="flex flex-col items-center justify-center gap-6 min-h-[50vh]"
      style={{
        backgroundImage: `url(${BottomToTopThin})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="text-gradient_1 z-10 max-sm:text-[36px] text-[32px] font-medium font-[Manrope] leading-[110%] pb-2">
        Ready to see a demo?
      </div>

      <button className="flex items-center px-4 py-2 bg-transparent text-blue-400 ring-1 ring-blue-400 rounded-full hover:bg-blue-900 hover:text-white transition-all duration-300 ease-in-out shadow-[0_0_10px_rgba(59,130,246,0.5)] hover:shadow-[0_0_20px_rgba(59,130,246,0.7)]">
        <img src={MagicColorFilledIcon} alt="" className="mr-2 w-6 h-6" />
        <span className=" font-medium">Join Waitlist</span>
      </button>
    </div>
  );
}

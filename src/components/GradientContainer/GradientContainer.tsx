import React from "react";
import "./GradientContainer.css";
export default function GradientContainer({
  inverted = false,
  children,
}: {
  inverted?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={`${ inverted ? "bg_container_inverted" :  "bg_container"} bg-red-300 !relative !p-0 w-full !overflow-hidden `}>
      <div className="!z-10 !p-0!m-0">
        <div className="!z-40 relative grid place-items-center min-h-[100dvh] p-0">
          {children}
          <div
            className=" !z-0 absolute"
            style={{
              width: "400px",
              height: "200px",
              bottom: "25%",
              right: "0%",
              background:
                "linear-gradient(182deg, #428CFC 0%, rgba(4.41, 38.80, 176.37, 0) 100%)",
              boxShadow: "100px 50px 100px ",
              borderRadius: 9999,
              filter: "blur(200px)",
            }}
          />

          <div
            className=" !z-0 absolute"
            style={{
              width: "400px",
              height: "200px",
              bottom: "25%",
              left: "25%",
              background: "#428CFC",
              // background: 'linear-gradient(182deg, #428CFC 0%, rgba(4.41, 38.80, 176.37, 0) 100%)',
              // boxShadow: '100px 50px 100px ',
              borderRadius: 9999,
              filter: "blur(200px)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

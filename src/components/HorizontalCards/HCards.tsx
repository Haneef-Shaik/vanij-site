import React from "react";

const features = [
  {
    name: "Workflow Builder: Simplifying Complexity",
    description:
      "Vanij’s intuitive workflow builder supports a wide array of components, from input/output options to data pipelines and prompt guidelines. ",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-feature-07-detail-01.jpg",
    imageAlt:
      "White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.",
  },
  {
    name: "Refined details",
    description:
      "We design every detail with the best materials and finishes. This laptop sleeve features durable canvas with double-stitched construction, a felt interior, and a high quality zipper that hold up to daily use.",
    imageSrc:
      "https://tailwindui.com/plus/img/ecommerce-images/product-feature-07-detail-02.jpg",
    imageAlt: "Detail of zipper pull with tan leather and silver rivet.",
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function HCards() {
  return (
    <div className="!z-10">
      <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <div className="mt-16 space-y-24">
          {features.map((feature, featureIdx) => {
            const isEven = featureIdx % 2 === 0;
            return (
              <div key={feature.name} className="grid grid-cols-12 items-center gap-y-8">
                {/* Text Section */}
                <div
                  className={classNames(
                    "col-span-12 md:col-span-5",
                    isEven ? "md:order-1" : "md:order-3"
                  )}
                >
                  <h3 className="text-white text-4xl font-medium font-manrope leading-tight">
                    {feature.name}
                  </h3>
                  <p className="mt-4 text-white text-lg font-nunito-sans">
                    {feature.description}
                  </p>
                </div>
                {/* i needed the gap of 2 cols here */}
                <div className={`md:order-2 col-span-1`}></div>
                {/* Image Section */}
                <div
                  className={classNames(
                    "col-span-12 md:col-span-6",
                    isEven ? "md:order-3" : "md:order-1"
                  )}
                >
                  <div className="aspect-w-5 aspect-h-2 overflow-hidden rounded-lg bg-gray-100">
                    <img
                      src={feature.imageSrc}
                      alt={feature.imageAlt}
                      className="object-cover object-center w-full h-full"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

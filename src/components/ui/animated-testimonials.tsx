"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
  repo: string;
  live: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
  light,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
  light: any;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 8000); // increased interval
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  return (
    <div className="mx-auto max-w-sm px-4 py-10 font-sans antialiased md:max-w-4xl md:px-8">
      <div className="relative grid grid-cols-1 md:gap-20 md:grid-cols-2">
        {/* Left Image Section */}
        <div>
          <div className="relative h-80 md:w-full w-80">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[active].src}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -30 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <img
                  loading="lazy"
                  src={testimonials[active].src}
                  alt={testimonials[active].name}
                  width={500}
                  height={500}
                  draggable={false}
                  className="h-full w-full p-1 rounded-md object-cover object-center"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Right Text Section */}
        <div className="flex flex-col justify-between py-4 space-y-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className={!light ? "text-2xl font-bold text-white" : "text-2xl font-bold text-black"}>
                {testimonials[active].name}
              </h3>
              <p className="text-sm text-gray-400">{testimonials[active].designation}</p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className={!light ? "mt-8 text-md md:text-xl text-gray-300" : "mt-8 text-lg text-gray-700"}
              >
                {testimonials[active].quote}
              </motion.p>
            </motion.div>
          </AnimatePresence>

          {/* Links */}
          <div className="flex space-x-5">
            <a
              href={testimonials[active].repo}
              target="_blank"
              rel="noopener noreferrer"
              className={
                !light
                  ? "border border-3 border-white px-2 py-1 text-white"
                  : "border border-3 px-2 py-1 text-black"
              }
            >
              GitHub Repo
            </a>
            <a
              href={testimonials[active].live}
              target="_blank"
              rel="noopener noreferrer"
              className={
                light
                  ? "border border-3 px-2 py-1 text-black"
                  : "border border-3 border-white px-2 py-1 text-white"
              }
            >
              Live
            </a>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-4">
            <button
              onClick={handlePrev}
              className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-black"
            >
              <IconArrowLeft className="h-5 w-5 text-white transition-transform duration-300 group-hover/button:rotate-12" />
            </button>
            <button
              onClick={handleNext}
              className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-black"
            >
              <IconArrowRight className="h-5 w-5 text-white transition-transform duration-300 group-hover/button:-rotate-12" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

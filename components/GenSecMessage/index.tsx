"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const GenSecMessage = () => {
  return (
    <section className="py-20 lg:py-25 xl:py-30 border-t border-stroke dark:border-strokedark bg-alabaster dark:bg-blacksection/30">
      <div className="px-4 mx-auto max-w-c-1235 md:px-8 xl:px-0">
        <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-20">
          {/* Portrait Container */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full md:w-2/5 flex justify-center"
          >
            <div className="relative group max-w-[360px] w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-solid-4 border-4 border-white dark:border-strokedark transition-all duration-300 hover:scale-[1.02]">
              <Image
                src="/images/wings/teampics/Animesh-1.JPG.jpeg"
                alt="Animesh Kumar Soni - General Secretary"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white text-sm font-medium">Animesh Kumar Soni</p>
              </div>
            </div>
          </motion.div>

          {/* Message Container */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full md:w-3/5"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 mb-4">
              Leadership Message
            </span>
            <h2 className="mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
              A Message from the{" "}
              <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                General Secretary
              </span>
            </h2>

            <div className="relative">
              <span className="absolute -top-6 -left-6 text-6xl text-primary/10 font-serif pointer-events-none select-none">
                &ldquo;
              </span>
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed font-medium mb-4">
                Dear Students,
              </p>
              <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Welcome to the Academics and Career Council. While our council is structured around various wings dedicated to your professional and academic growth, our most fundamental mandate is simple: we are here for you.
              </p>
              <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                We know that navigating the rigors of academic life, research pursuits, and career planning can sometimes feel overwhelming. That is why the AnC Council is fundamentally rooted in student welfare. We do not just organize events and provide resources; we act as your representatives and advocates in the rooms where decisions are made. Through active policy-making and constant dialogue with the administration, we strive to ensure that our campus's academic frameworks are equitable, transparent, and built entirely around your needs.
              </p>
              <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                Whether you are facing a hurdle in your coursework, seeking clarity on your career path, or hoping to propose a change in campus academic policies, please know that you are not alone. My door—and the doors of our entire team—are always open to you. We are here to listen to your concerns, to act on your feedback, and to empower you to reach your highest potential. Let’s work together to build a stronger, more supportive, and student-friendly campus.
              </p>
            </div>

            <div className="border-t border-stroke dark:border-strokedark pt-4 mt-6">
              <h4 className="text-lg font-bold text-black dark:text-white">
                Animesh Kumar Soni
              </h4>
              <p className="text-sm font-medium text-primary">
                PG, General Secretary
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500">
                Academics and Career Council, Students' Gymkhana
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GenSecMessage;

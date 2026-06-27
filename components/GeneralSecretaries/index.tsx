"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaUser } from "react-icons/fa";

const GeneralSecretaries = () => {
  return (
    <section className="py-16 md:py-20 bg-alabaster dark:bg-blacksection/20">
      <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
        
        {/* Centered Title Pill */}
        <div className="flex justify-center mb-16">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2.5 rounded-full border border-stroke bg-white px-6 py-2.5 shadow-solid-3 dark:border-strokedark dark:bg-blacksection"
          >
            <span className="flex h-2.5 w-2.5 rounded-full bg-primary animate-pulse"></span>
            <span className="text-sm md:text-base font-bold text-black dark:text-white uppercase tracking-wider">
              General Secretaries
            </span>
          </motion.div>
        </div>

        {/* Two Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-[900px] mx-auto pb-6">
          
          {/* Card 1: UG GenSec */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative border border-stroke bg-white p-8 md:p-10 shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:shadow-solid-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] flex flex-col items-center text-center"
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
              <FaUser className="text-2xl" />
            </div>
            
            <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
              UG GenSec Office
            </span>
            <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
              Adwaaiit Pande
            </h3>
            
            <div className="space-y-3 mb-10 w-full">
              <div className="flex items-center justify-center gap-2.5 text-gray-600 dark:text-gray-400">
                <FaEnvelope className="text-primary/70 shrink-0" />
                <a href="mailto:ug_anc@iitk.ac.in" className="hover:text-primary hover:underline transition-colors font-medium break-all">
                  ug_anc@iitk.ac.in
                </a>
              </div>
              <div className="flex items-center justify-center gap-2.5 text-gray-600 dark:text-gray-400">
                <FaPhoneAlt className="text-primary/70 shrink-0" />
                <a href="tel:+919372256863" className="hover:text-primary transition-colors font-medium">
                  +91 9372256863
                </a>
              </div>
            </div>

            {/* Overlapping Details Button */}
            <Link
              href="/team"
              className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 flex items-center justify-center rounded-full bg-primary px-8 py-2.5 text-sm font-bold text-white shadow-solid-3 transition-all duration-300 hover:bg-primaryho hover:scale-[1.05]"
            >
              Details
            </Link>
          </motion.div>

          {/* Card 2: PG GenSec */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative border border-stroke bg-white p-8 md:p-10 shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:shadow-solid-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] flex flex-col items-center text-center"
          >
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
              <FaUser className="text-2xl" />
            </div>

            <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
              PG GenSec Office
            </span>
            <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
              Animesh Kumar Soni
            </h3>

            <div className="space-y-3 mb-10 w-full">
              <div className="flex items-center justify-center gap-2.5 text-gray-600 dark:text-gray-400">
                <FaEnvelope className="text-primary/70 shrink-0" />
                <a href="mailto:pg_anc@iitk.ac.in" className="hover:text-primary hover:underline transition-colors font-medium break-all">
                  pg_anc@iitk.ac.in
                </a>
              </div>
              <div className="flex items-center justify-center gap-2.5 text-gray-600 dark:text-gray-400">
                <FaPhoneAlt className="text-primary/70 shrink-0" />
                <a href="tel:+918770586171" className="hover:text-primary transition-colors font-medium">
                  +91 8770586171
                </a>
              </div>
            </div>

            {/* Overlapping Details Button */}
            <Link
              href="/team"
              className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 flex items-center justify-center rounded-full bg-primary px-8 py-2.5 text-sm font-bold text-white shadow-solid-3 transition-all duration-300 hover:bg-primaryho hover:scale-[1.05]"
            >
              Details
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default GeneralSecretaries;

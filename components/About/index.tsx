"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";


const About = () => {
  return (
    <>
      {/* <!-- ===== About Start ===== --> */}
      <section className="pb-20 overflow-hidden lg:pb-25 xl:pb-30">
        <div className="px-4 mx-auto max-w-c-1235 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="/images/about/mission.jpg"
                alt="About"
                className="dark:block"
                fill
              />
              <Image
                src="/images/about/mission.jpg"
                alt="About"
                className="hidden dark:block"
                fill
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >
              
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
               
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                 Our Mission
                </span>
              </h2>
              <p>
              The mission of the Academic and Career Council (AnC) at IIT Kanpur is to empower students with the knowledge, skills, and resources necessary to achieve academic excellence and professional success. We are dedicated to providing comprehensive academic support, career guidance, and opportunities for personal and professional development. 
              </p>
              <div>
                {/* <Link href="#"
                  className="group mt-7.5 inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary"
                >
                  <span className="duration-300 group-hover:pr-2">
                    Know More
                  </span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="currentColor"
                  >
                    <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
                  </svg>
                </Link> */}
              </div>
            
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About End ===== --> */}

      {/* <!-- ===== About Two Start ===== --> */}
      <section>
        <div className="px-4 mx-auto overflow-hidden max-w-c-1235 md:px-8 2xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-1/2"
            >
            
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                 {"   "}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg2 dark:before:bg-titlebgdark">
                  Our Vision
                </span>
              </h2>
              <p>
              To be a leading center of excellence in academic and career services while serving as a steadfast advocate for the student body. We strive to bridge the gap between academia, administration, and industry, ensuring students are academically proficient, professionally equipped, and supported by a fair and transparent campus system.
              </p>
              <div>
                {/* <Link
                  href="#"
                  className="group mt-7.5 inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary"
                >
                  <span className="duration-300 group-hover:pr-2">
                    Know More
                  </span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="currentColor"
                  >
                    <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
                  </svg>
                </Link> */}
              </div>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="/images/about/vision.jpg"
                alt="About"
                className="dark:block"
                fill
              />
              <Image
                src="/images/about/vision.jpg"
                alt="About"
                className="hidden dark:block"
                fill
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About Two End ===== --> */}

      {/* <!-- ===== Core Mandates Start ===== --> */}
      <section className="py-20 lg:py-25 xl:py-30 border-t border-stroke dark:border-strokedark">
        <div className="px-4 mx-auto max-w-c-1235 md:px-8 xl:px-0">
          <div className="text-center mb-12">
            <h2 className="relative mb-4 text-3xl font-bold text-black dark:text-white xl:text-hero">
              <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                Our Core Mandates
              </span>
            </h2>
            <p className="mx-auto max-w-[800px] text-base text-gray-600 dark:text-gray-400">
              The Academics and Career Council functions under three primary pillars to support and advocate for the IIT Kanpur student community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7.5 mt-10">
            {/* Card 1 */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top border border-stroke bg-white p-7.5 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark rounded-xl"
            >
              <div className="flex items-center justify-center w-12.5 h-12.5 rounded-full bg-primary/10 text-primary mb-5 font-semibold text-lg">
                🎯
              </div>
              <h3 className="mb-3.5 text-xl font-bold text-black dark:text-white">
                Academic & Career Empowerment
              </h3>
              <p className="text-base text-gray-600 dark:text-gray-400">
                Providing comprehensive support, personalized career guidance, and expansive opportunities for professional development.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="animate_top border border-stroke bg-white p-7.5 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark rounded-xl"
            >
              <div className="flex items-center justify-center w-12.5 h-12.5 rounded-full bg-primary/10 text-primary mb-5 font-semibold text-lg">
                📜
              </div>
              <h3 className="mb-3.5 text-xl font-bold text-black dark:text-white">
                Policy Making & Advocacy
              </h3>
              <p className="text-base text-gray-600 dark:text-gray-400">
                Actively representing student interests in senate and administrative meetings to draft, amend, and implement student-friendly academic policies.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="animate_top border border-stroke bg-white p-7.5 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark rounded-xl"
            >
              <div className="flex items-center justify-center w-12.5 h-12.5 rounded-full bg-primary/10 text-primary mb-5 font-semibold text-lg">
                🤝
              </div>
              <h3 className="mb-3.5 text-xl font-bold text-black dark:text-white">
                Student Welfare
              </h3>
              <p className="text-base text-gray-600 dark:text-gray-400">
                Functioning as a primary grievance redressal body to resolve academic disputes, ease course loads, and ensure a healthy, balanced, and equitable academic environment for all students.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Core Mandates End ===== --> */}
    </>
  );
};

export default About;

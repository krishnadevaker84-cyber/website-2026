import React from "react";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Faculty Adviser | AnC Council",
  description: "Official profile and message from the Faculty Adviser of the Academics and Career Council, IIT Kanpur.",
};

export default function FacultyAdviserPage() {
  const adviser = {
    name: "Dr. Raghvendra Kumar Chaudhary",
    designation: "Faculty Adviser",
    department: " Department of Electrical Engineering",
    institution: "Indian Institute of Technology Kanpur",
    image: "/images/user/Dr. Raghvendra Kumar Chaudhary.jpeg",
    email: "raghvendra@iitk.ac.in",
    phone: " +91-512-679-2306",
    office: " ACES-325 ,Department of Electrical Engineering, IIT Kanpur",
    message: `Greetings! The Academics and Career Council (AnC) at IIT Kanpur plays a central role in guiding, supporting, and enriching the academic journeys and professional aspirations of our students. 

    Our goal is to foster an environment where students can discover their true potential, pursue academic excellence, and acquire the skills necessary for a successful career. Through peer-to-peer resource sharing, workshops, counseling, and interactive mentorship programs, the AnC council serves as a crucial link between the student body and the administration. I encourage all students to actively engage with the council's entities and make the most of the resources provided.`
  };

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen pb-20 pt-35 md:pt-40">
      <div className="mx-auto max-w-c-1154 px-4 md:px-8 xl:px-0">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Faculty Adviser</h1>
          <div className="mx-auto h-1 w-16 bg-primary"></div>
        </div>

        {/* Profile Card Container */}
        <div className="bg-gray-50 dark:bg-blacksection border border-stroke dark:border-strokedark rounded-2xl p-8 md:p-12 shadow-solid-3">
          <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
            
            {/* Left side: Profile Image & Direct contact */}
            <div className="w-full lg:w-1/3 flex flex-col items-center text-center">
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20 p-1 bg-white mb-6">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src={adviser.image}
                    alt={adviser.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-black dark:text-white mb-1">{adviser.name}</h2>
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">{adviser.designation}</p>
              <p className="text-sm text-waterloo dark:text-manatee leading-relaxed mb-6">
                {adviser.department} <br />
                {adviser.institution}
              </p>

              {/* Direct Info */}
              <div className="w-full border-t border-stroke dark:border-strokedark pt-6 space-y-3 text-left">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 text-primary p-2.5 rounded-lg">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-waterloo dark:text-manatee font-medium">Email Address</p>
                    <a href={`mailto:${adviser.email}`} className="text-sm font-medium hover:text-primary transition-all">
                      {adviser.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 text-primary p-2.5 rounded-lg">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-waterloo dark:text-manatee font-medium">Office Phone</p>
                    <p className="text-sm font-medium text-black dark:text-white">{adviser.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 text-primary p-2.5 rounded-lg">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-waterloo dark:text-manatee font-medium">Office Location</p>
                    <p className="text-sm font-medium text-black dark:text-white">{adviser.office}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: Message from Faculty Adviser */}
            <div className="w-full lg:w-2/3 border-t lg:border-t-0 lg:border-l border-stroke dark:border-strokedark pt-8 lg:pt-0 lg:pl-12">
              <h3 className="text-2xl font-bold mb-6 text-black dark:text-white">Message from the Faculty Adviser</h3>
              <div className="text-waterloo dark:text-manatee space-y-4 leading-relaxed text-base whitespace-pre-line">
                {adviser.message}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

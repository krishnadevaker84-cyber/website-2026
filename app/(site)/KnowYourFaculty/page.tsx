import React from "react";
import Image from "next/image";
import SectionHeader from "@/components/Common/SectionHeader";

export default function KnowYourFacultyPage() {
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

Our goal is to foster an environment where students can discover their true potential, pursue academic excellence, and acquire the skills necessary for a successful career. Through peer-to-peer resource sharing, workshops, counseling, and interactive mentorship programs, the AnC council serves as a crucial link between the student body and the administration. I encourage all students to actively engage with the council's entities and make the most of the resources provided.`,
  };

  return (
    <div className="bg-white pb-20 pt-40 text-black dark:bg-black dark:text-white">
      <SectionHeader
        headerInfo={{
          title: "",
          subtitle: "Know Your Faculty",
          description: '"Teaching is not the filling of a pail, but the lighting of a fire." — William Butler Yeats',
        }}
      />

      <div className="mx-auto mt-12 max-w-c-1154 px-4 md:px-8 xl:px-0">
        <div className="rounded-2xl border border-stroke bg-gray-50 p-8 shadow-solid-3 dark:border-strokedark dark:bg-blacksection md:p-12">
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-start">
            <div className="flex w-full flex-col items-center text-center lg:w-1/3">
              <div className="mb-6 h-48 w-48 overflow-hidden rounded-full border-4 border-primary/20 bg-white p-1">
                <div className="relative h-full w-full overflow-hidden rounded-full">
                  <Image src={adviser.image} alt={adviser.name} fill className="object-cover" />
                </div>
              </div>
              <h2 className="mb-1 text-2xl font-bold text-black dark:text-white">{adviser.name}</h2>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">{adviser.designation}</p>
              <p className="mb-6 text-sm leading-relaxed text-waterloo dark:text-manatee">
                {adviser.department} <br />
                {adviser.institution}
              </p>

              <div className="w-full space-y-3 border-t border-stroke pt-6 text-left dark:border-strokedark">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-primary/10 p-2.5 text-primary">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-waterloo dark:text-manatee">Email Address</p>
                    <a href={`mailto:${adviser.email}`} className="text-sm font-medium transition-all hover:text-primary">
                      {adviser.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-primary/10 p-2.5 text-primary">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-waterloo dark:text-manatee">Office Phone</p>
                    <p className="text-sm font-medium text-black dark:text-white">{adviser.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-primary/10 p-2.5 text-primary">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-waterloo dark:text-manatee">Office Location</p>
                    <p className="text-sm font-medium text-black dark:text-white">{adviser.office}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full border-t border-stroke pt-8 dark:border-strokedark lg:w-2/3 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
              <h3 className="mb-6 text-2xl font-bold text-black dark:text-white">Message from the Faculty Adviser</h3>
              <div className="space-y-4 whitespace-pre-line text-base leading-relaxed text-waterloo dark:text-manatee">
                {adviser.message}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

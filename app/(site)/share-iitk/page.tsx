import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Share IITK | AnC Council",
  description: "Centralized academic resource repository and peer learning platform by Academics and Career Council, IIT Kanpur.",
};

export default function ShareIITKPage() {
  const features = [
    {
      title: "Academic Repository",
      description: "A comprehensively structured directory containing course notes, lecture presentations, recommended textbooks, and prep guides.",
      icon: (
        <svg className="h-8 w-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "Peer Mentorship",
      description: "Get personalized guidance from senior students who have successfully cleared these courses and can offer deep subject matter tips.",
      icon: (
        <svg className="h-8 w-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Interactive Forums",
      description: "Ask academic questions, coordinate group studies, and discuss course concepts with fellow students on dedicated forums.",
      icon: (
        <svg className="h-8 w-8 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    }
  ];

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pb-16 pt-35 md:pt-40 xl:pb-20 xl:pt-46">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent dark:from-blue-900/15 pointer-events-none"></div>
        <div className="relative mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 mb-6">
              New Initiative
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Share <span className="bg-gradient-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">IITK</span>
            </h1>
            <p className="text-lg md:text-xl text-waterloo dark:text-manatee mb-8 leading-relaxed">
              Empowering peer learning and academic excellence. Share IITK is a collaborative platform designed to centralize academic resources, notes, and mentor guidance for all courses at IIT Kanpur.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#resources"
                className="bg-primary hover:bg-primaryho text-white font-medium px-8 py-3 rounded-full shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                Explore Resources
              </a>
              <a
                href="#contribute"
                className="bg-transparent hover:bg-gray-100 dark:hover:bg-gray-900 text-black dark:text-white border border-stroke dark:border-strokedark font-medium px-8 py-3 rounded-full transition-all duration-300"
              >
                Become a Mentor
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services/Features Grid */}
      <section id="resources" className="py-16 md:py-24 bg-gray-50 dark:bg-blacksection border-t border-stroke dark:border-strokedark">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Features & Initiatives</h2>
            <div className="mx-auto h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-600 mb-4"></div>
            <p className="text-waterloo dark:text-manatee">
              Designed to help students access quality learning resources and resolve doubts through structured peer guidance systems.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <div
                key={i}
                className="bg-white dark:bg-black rounded-2xl border border-stroke dark:border-strokedark p-8 transition-all duration-300 hover:shadow-solid-4 hover:-translate-y-1"
              >
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 w-fit mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-waterloo dark:text-manatee text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Action / Contact Section */}
      <section id="contribute" className="py-16 md:py-24">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-3xl p-8 md:p-16 shadow-solid-13">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent)]"></div>
            <div className="relative max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Contribute to the Initiative</h2>
              <p className="text-blue-100 mb-8 text-base leading-relaxed">
                Have high-quality lecture notes, tutorial answers, or cheatsheets for a course? Join us in making academic materials accessible to everyone. You can also apply to become an academic mentor.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:anc_share@iitk.ac.in"
                  className="bg-white hover:bg-gray-100 text-blue-600 font-bold px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-lg"
                >
                  Upload Resources
                </a>
                <a
                  href="mailto:anc_share@iitk.ac.in"
                  className="bg-transparent hover:bg-white/10 text-white border border-white/40 hover:border-white font-bold px-8 py-3.5 rounded-full transition-all duration-300"
                >
                  Contact Coordinator
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Indian Game Theory Society (IGTS) | AnC Council",
  description: "Explore strategic reasoning, game theory models, and logic workshops by the Indian Game Theory Society at IIT Kanpur.",
};

export default function IGTSPage() {
  const domains = [
    {
      title: "Strategic Decision Making",
      description: "Analyzing optimal strategies in conflict and cooperation scenarios, mapping outcomes with Nash Equilibria and cooperative models.",
      icon: (
        <svg className="h-8 w-8 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "Behavioral Economics",
      description: "Investigating the boundaries of rational choice theory, combining psychological insights with classical game models.",
      icon: (
        <svg className="h-8 w-8 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Algorithmic Game Theory",
      description: "Designing mechanism protocols, auction systems, and network protocols using computer science tools for optimal efficiency.",
      icon: (
        <svg className="h-8 w-8 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    }
  ];

  const events = [
    {
      title: "Introduction to Game Theory Workshop",
      date: "August 2026",
      desc: "An interactive, hands-on workshop covering matrix games, dominant strategies, and Nash equilibria with practical simulations."
    },
    {
      title: "Strategic Simulation Tournament",
      date: "September 2026",
      desc: "Formulate your algorithms and compete against peers in simulation games of negotiation, bargaining, and competitive bidding."
    }
  ];

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pb-16 pt-35 md:pt-40 xl:pb-20 xl:pt-46">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 to-transparent dark:from-indigo-900/15 pointer-events-none"></div>
        <div className="relative mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 mb-6">
              Official Student Society
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Indian Game Theory Society <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">(IGTS)</span>
            </h1>
            <p className="text-lg md:text-xl text-waterloo dark:text-manatee mb-8 leading-relaxed">
              Analyzing strategy and interactive logic. IGTS is the primary hub at IIT Kanpur for exploring mathematical game theory models, strategic reasoning, behavioral choices, and logical optimization.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#domains"
                className="bg-primary hover:bg-primaryho text-white font-medium px-8 py-3 rounded-full shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                Our Domains
              </a>
              <a
                href="#events"
                className="bg-transparent hover:bg-gray-100 dark:hover:bg-gray-900 text-black dark:text-white border border-stroke dark:border-strokedark font-medium px-8 py-3 rounded-full transition-all duration-300"
              >
                Upcoming Events
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About & Core Domains Section */}
      <section id="domains" className="py-16 md:py-24 bg-gray-50 dark:bg-blacksection border-t border-stroke dark:border-strokedark">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Core Focus Domains</h2>
            <div className="mx-auto h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-600 mb-4"></div>
            <p className="text-waterloo dark:text-manatee">
              Our academic interest spans across mathematical modeling, economic experiments, and programmatic implementations of game logic.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {domains.map((domain, i) => (
              <div
                key={i}
                className="bg-white dark:bg-black rounded-2xl border border-stroke dark:border-strokedark p-8 transition-all duration-300 hover:shadow-solid-4 hover:-translate-y-1"
              >
                <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-4 w-fit mb-6">
                  {domain.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{domain.title}</h3>
                <p className="text-waterloo dark:text-manatee text-sm leading-relaxed">
                  {domain.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events / Workshops Section */}
      <section id="events" className="py-16 md:py-24">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Events & Workshops</h2>
              <div className="mx-auto h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-600 mb-4"></div>
              <p className="text-waterloo dark:text-manatee">
                Participate in guest lectures, tournaments, and interactive sessions organized by the society.
              </p>
            </div>

            <div className="space-y-8">
              {events.map((event, i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-blacksection border border-stroke dark:border-strokedark rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-solid-3 transition-all duration-300"
                >
                  <div>
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">{event.date}</span>
                    <h3 className="text-xl font-bold mt-1 mb-2">{event.title}</h3>
                    <p className="text-waterloo dark:text-manatee text-sm leading-relaxed">{event.desc}</p>
                  </div>
                  <a
                    href="mailto:anc_igts@iitk.ac.in"
                    className="w-full md:w-auto bg-primary hover:bg-primaryho text-white text-sm text-center font-bold px-6 py-3 rounded-full transition-all duration-300"
                  >
                    Register / Query
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

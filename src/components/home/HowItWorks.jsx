import React from "react";
import { FaSearch, FaComments, FaChalkboardTeacher } from "react-icons/fa";

const steps = [
  {
    icon: <FaSearch className="text-4xl text-blue-600" />,
    title: "Browse Skills",
    description: "Find the skill you want to learn in your local area."
  },
  {
    icon: <FaComments className="text-4xl text-blue-600" />,
    title: "Connect",
    description: "Contact the provider and schedule your session."
  },
  {
    icon: <FaChalkboardTeacher className="text-4xl text-blue-600" />,
    title: "Learn & Enjoy",
    description: "Start learning and improve your skills effectively."
  }
];

const HowItWorks = () => (
  <section className="my-12 px-4 md:px-8 bg-gray-50 py-12">
    <h2 className="text-3xl font-bold mb-6 text-center">How It Works</h2>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      {steps.map((step, idx) => (
        <div
          key={idx}
          className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition"
        >
          <div className="mb-4">{step.icon}</div>
          <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
          <p className="text-gray-500">{step.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default HowItWorks;

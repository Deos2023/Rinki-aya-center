"use client";
import Image from "next/image";
import { FaUserNurse, FaBaby, FaWheelchair, FaHospitalUser, FaHeartbeat, FaHome, FaUserShield, FaBroom } from "react-icons/fa";
import { Wheelchair, Bed, AirVent, Move3D, BedIcon, AirVentIcon, Phone } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <FaUserNurse className="text-4xl text-teal-700" />,
      title: "Professional Nursing Care",
      description: "24/7 nursing services provided by certified professionals for post-operative care and chronic illness management.",
      details: [
        "Post-surgical care",
        "Medication administration",
        "Wound dressing",
        "IV therapy",
        "Critical care nursing"
      ]
    },
    {
      icon: <FaBaby className="text-4xl text-teal-700" />,
      title: "Aya & Nanny Services",
      description: "Trained and experienced ayas for newborn care, maternity support, and general patient assistance.",
      details: [
        "Newborn care specialists",
        "Post-delivery mother care",
        "24/7 aya services",
        "Child care attendants",
        "Patient attendants"
      ]
    },
    {
      icon: <FaHeartbeat className="text-4xl text-teal-700" />,
      title: "Elder Care Services",
      description: "Specialized care programs for senior citizens including daily assistance and companionship.",
      details: [
        "Daily activity support",
        "Medication reminders",
        "Mobility assistance",
        "Health monitoring",
        "Social engagement"
      ]
    },
    {
      icon: <FaHospitalUser className="text-4xl text-teal-700" />,
      title: "Patient Care Services",
      description: "Comprehensive care plans for patients needing assistance at home or hospital.",
      details: [
        "Recovery monitoring",
        "Physical therapy support",
        "Medication management",
        "Doctor coordination",
        "Progress reporting"
      ]
    },
    {
      icon: <FaHome className="text-4xl text-teal-700" />,
      title: "Housekeeping Services",
      description: "Professional cleaning and household management services for homes and offices.",
      details: [
        "Regular house cleaning",
        "Deep cleaning services",
        "Laundry and ironing",
        "Utensil cleaning",
        "Pantry management"
      ]
    },
    {
      icon: <FaUserShield className="text-4xl text-teal-700" />,
      title: "Domestic Help Services",
      description: "Reliable and trustworthy domestic helpers for your daily household needs.",
      details: [
        "Cooking assistants",
        "Cleaning staff",
        "Elderly companions",
        "Full-time maids",
        "Part-time helpers"
      ]
    },
    {
      icon: <FaBroom className="text-4xl text-teal-700" />,
      title: "Office Housekeeping",
      description: "Professional cleaning staff for corporate offices and commercial spaces.",
      details: [
        "Daily office cleaning",
        "Restroom maintenance",
        "Pantry cleaning",
        "Floor maintenance",
        "Waste management"
      ]
    },
    {
      icon: <FaWheelchair className="text-4xl text-teal-700" />,
      title: "Babysitter Services",
      description: "Trained and caring babysitters for your children's safety and development.",
      details: [
        "Child supervision",
        "Homework assistance",
        "Playtime activities",
        "Meal preparation",
        "Routine maintenance"
      ]
    }
  ];

  return (
    <div className="relative w-full overflow-hidden">
      {/* Hero Section */}
      <div className="relative w-full h-96">
        {/* Hero Image Background */}
        <div className="absolute top-0 left-0 w-full h-full bg-teal-800">
          {/* <Image
            src="/services-hero.jpg"
            alt="Our Healthcare Services"
            fill
            className="object-cover"
          /> */}
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full w-full px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h1>
          <p className="text-white text-xl max-w-2xl">
            Comprehensive care solutions since 2016
          </p>
        </div>

        {/* Wavey Bottom */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 150"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#ffffff"
            d="M0,0 C360,150 1080,0 1440,150 L1440,150 L0,150 Z"
          />
        </svg>
      </div>

      {/* All Services Section */}
      <div className="bg-white py-20 px-8 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-teal-800 mb-12 text-center">
            Services We Offer
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="border border-teal-100 rounded-lg p-6 hover:shadow-lg transition-all hover:border-teal-200"
              >
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-teal-800 mb-3 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-700 mb-4 text-center">
                  {service.description}
                </p>
                <ul className="text-gray-700 space-y-2">
                  {service.details.map((detail, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-teal-600 mr-2">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Process Section */}
      <div className="bg-gray-100 py-20 px-8 md:px-20 relative">
        <svg
          className="absolute top-0 left-0 w-full rotate-180"
          viewBox="0 0 1440 150"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#ffffff"
            d="M0,0 C360,150 1080,0 1440,150 L1440,150 L0,150 Z"
          />
        </svg>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-teal-800 mb-12 text-center">
            How Our Service Works
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold text-teal-800">1</span>
              </div>
              <h3 className="text-lg font-bold text-teal-800 mb-2">Contact Us</h3>
              <p className="text-gray-700">
                Call or message us with your requirements
              </p>
            </div>
            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold text-teal-800">2</span>
              </div>
              <h3 className="text-lg font-bold text-teal-800 mb-2">Assessment</h3>
              <p className="text-gray-700">
                We evaluate your specific needs
              </p>
            </div>
            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold text-teal-800">3</span>
              </div>
              <h3 className="text-lg font-bold text-teal-800 mb-2">Service Plan</h3>
              <p className="text-gray-700">
                We propose a customized solution
              </p>
            </div>
            <div className="text-center">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold text-teal-800">4</span>
              </div>
              <h3 className="text-lg font-bold text-teal-800 mb-2">Implementation</h3>
              <p className="text-gray-700">
                We deliver the service as agreed
              </p>
            </div>
          </div>
        </div>
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 150"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#ffffff"
            d="M0,0 C360,150 1080,0 1440,150 L1440,150 L0,150 Z"
          />
        </svg>
      </div>

      {/* Nursing Services Detail Section */}
      <div className="bg-teal-800 text-white py-20 px-8 md:px-20 relative">
        <svg
          className="absolute top-0 left-0 w-full rotate-180"
          viewBox="0 0 1440 150"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#ffffff"
            d="M0,0 C360,150 1080,0 1440,150 L1440,150 L0,150 Z"
          />
        </svg>
        <div className="max-w-6xl mb-5 mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Our Nursing & Aya Services
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Service Image</span>
              </div>
            </div>
            <div>
              <p className="mb-6 text-lg">
                Our certified nurses and trained ayas provide compassionate care tailored to each client's unique needs. We carefully match caregivers based on specialty and personality to ensure the best care experience.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-teal-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">General Duty Nurses</h4>
                  <p className="text-sm">For basic care and monitoring</p>
                </div>
                <div className="bg-teal-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Maternity Ayas</h4>
                  <p className="text-sm">For newborn and mother care</p>
                </div>
                <div className="bg-teal-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Geriatric Caregivers</h4>
                  <p className="text-sm">Specialized in elderly care</p>
                </div>
                <div className="bg-teal-700 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Pediatric Nannies</h4>
                  <p className="text-sm">For child care and development</p>
                </div>
              </div>
              <button className="bg-white text-teal-800 px-6 py-3 rounded hover:bg-gray-100 font-semibold">
                Request a Caregiver
              </button>
            </div>
          </div>
        </div>
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 150"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#ffffff"
            d="M0,0 C360,150 1080,0 1440,150 L1440,150 L0,150 Z"
          />
        </svg>
      </div>

      {/* CTA Section */}
     <div className="text-teal-800 bg-white py-16 px-8 text-center">
  <h2 className="text-3xl font-bold mb-6">Need Care Services?</h2>
  <p className="text-xl mb-8 max-w-2xl mx-auto">
    Contact us today for reliable and compassionate care solutions tailored to your family's needs.
  </p>
  <div className="flex flex-col sm:flex-row justify-center gap-4">
    <a 
      href="tel:8777563481" 
      className="bg-white text-teal-800 px-8 py-3 border border-neutral-400 rounded font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
    >
      <Phone size={20} /> Call Now: 8777563481
    </a>
    <a 
      href="https://wa.me/918777563481" 
      target="_blank" 
      rel="noopener noreferrer"
      className="bg-green-500 text-white px-8 py-3 rounded font-semibold hover:bg-green-600 transition-colors inline-flex items-center justify-center gap-2"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
      </svg>
      Chat on WhatsApp
    </a>
    <a 
      href="mailto:pradippahar2017@gmail.com" 
      className="bg-blue-500 text-white px-8 py-3 rounded font-semibold hover:bg-blue-600 transition-colors inline-flex items-center justify-center gap-2"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
      </svg>
      Email Us
    </a>
  </div>
</div>
    </div>
  );
}
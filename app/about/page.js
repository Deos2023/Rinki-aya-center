"use client";
import Image from "next/image";
import { Target, Eye, HeartHandshake } from "lucide-react";

export default function About() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Hero Section */}
      <div className="relative w-full h-96">
        {/* Hero Image Background */}
        <div className="absolute top-0 left-0 w-full h-full bg-teal-800">
          {/* <Image
            src="/about-hero.jpg"
            alt="Rinki Nurses Team"
            fill
            className="object-cover"
          /> */}
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full w-full px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Rinki Nurses and Ayah Centre
          </h1>
          <p className="text-white text-xl max-w-2xl">
            Providing compassionate nursing and caregiving services in Kolkata since 2022
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

      {/* Our Story Section */}
      <div className="bg-white py-20 px-8 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-teal-800 mb-12 text-center">
            Our Story
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <p className="text-gray-700 mb-6">
                Established on 26th May 2022, Rinki Nurses and Ayah Centre began with a vision to provide reliable and professional nursing and caregiving services to the Kolkata community.
              </p>
              <p className="text-gray-700 mb-6">
                Founded by Pradip Pahar, our center quickly gained recognition for our dedicated team of nurses and caregivers who provide compassionate care to patients of all ages.
              </p>
              <p className="text-gray-700">
                In just a short time, we've built a reputation for trustworthy services that include nursing care, aya services, babysitting, and comprehensive home care solutions.
              </p>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-xl order-1 md:order-2">
              <Image 
                src="/img3.jpg" 
                alt="Rinki Nurses and Ayah Centre Team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Values Section */}
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
            Our Mission & Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Mission Card */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Target className="text-teal-800 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-teal-800 mb-3 text-center">Mission</h3>
              <p className="text-gray-700 text-center">
                To provide dependable, professional nursing and caregiving services that enhance quality of life for our clients and their families.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Eye className="text-teal-800 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-teal-800 mb-3 text-center">Vision</h3>
              <p className="text-gray-700 text-center">
                To become Kolkata's most trusted nursing and caregiving service through reliability, professionalism, and compassionate care.
              </p>
            </div>

            {/* Core Values Card */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <HeartHandshake className="text-teal-800 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-teal-800 mb-3 text-center">Core Values</h3>
              <ul className="text-gray-700 space-y-2 text-center">
                <li>• Reliability</li>
                <li>• Professionalism</li>
                <li>• Compassion</li>
                <li>• Trustworthiness</li>
              </ul>
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

      {/* Team Section */}
      <div className="bg-white py-20 px-8 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-teal-800 mb-12 text-center">
            Our Team
          </h2>
          <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
            Our strength lies in our team of dedicated nursing professionals and caregivers who bring expertise and compassion to every assignment.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-4 border-4 border-teal-100">
                <Image 
                  src="/nurse-team.jpg" 
                  alt="Nursing Team"
                  width={192}
                  height={192}
                  className="object-cover h-full"
                />
              </div>
              <h3 className="text-xl font-bold text-teal-800 mb-2">Professional Nurses</h3>
              <p className="text-gray-700">
                Qualified nurses trained in patient care, post-operative care, and medical assistance.
              </p>
            </div>
            <div className="text-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-4 border-4 border-teal-100">
                <Image 
                  src="/aya-team.jpg" 
                  alt="Aya Team"
                  width={192}
                  height={192}
                  className="object-cover h-full"
                />
              </div>
              <h3 className="text-xl font-bold text-teal-800 mb-2">Ayah Professionals</h3>
              <p className="text-gray-700">
                Experienced ayahs specialized in newborn care, maternity support, and elderly care.
              </p>
            </div>
            <div className="text-center">
              <div className="w-48 h-48 rounded-full overflow-hidden mx-auto mb-4 border-4 border-teal-100">
                <Image 
                  src="/support-team.jpg" 
                  alt="Support Team"
                  width={192}
                  height={192}
                  className="object-cover h-full"
                />
              </div>
              <h3 className="text-xl font-bold text-teal-800 mb-2">Caregivers</h3>
              <p className="text-gray-700">
                Trained caregivers for babysitting, housekeeping, and domestic help services.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
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
        <div className="max-w-6xl mb-8 mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Our Comprehensive Services
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="mb-6 text-lg">
                We offer a wide range of services to meet all your nursing and caregiving needs.
              </p>
              <p className="mb-6 text-lg">
                From professional nursing care to domestic help, our team is equipped to handle various requirements with professionalism and care.
              </p>
              <p className="text-lg">
                Available 24/7 for emergency services, we ensure you get the support you need when you need it.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-teal-700 p-6 rounded-lg text-center">
                <div className="text-xl font-bold mb-2">Nursing Care</div>
                <div>Professional medical assistance</div>
              </div>
              <div className="bg-teal-700 p-6 rounded-lg text-center">
                <div className="text-xl font-bold mb-2">Ayah Services</div>
                <div>Maternity & newborn care</div>
              </div>
              <div className="bg-teal-700 p-6 rounded-lg text-center">
                <div className="text-xl font-bold mb-2">Babysitting</div>
                <div>Reliable child care</div>
              </div>
              <div className="bg-teal-700 p-6 rounded-lg text-center">
                <div className="text-xl font-bold mb-2">Housekeeping</div>
                <div>Domestic help services</div>
              </div>
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
      <div className="bg-white py-16 px-8 text-center">
        <h2 className="text-3xl font-bold text-teal-800 mb-6">Ready to Experience Our Services?</h2>
        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          Whether you need nursing care, a babysitter, or domestic help, we're here to assist you.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="/contact" 
            className="bg-teal-700 text-white px-8 py-3 rounded font-semibold hover:bg-teal-800 transition-colors"
          >
            Contact Us
          </a>
          <a 
            href="/services" 
            className="bg-white text-teal-700 px-8 py-3 rounded font-semibold border border-teal-700 hover:bg-teal-50 transition-colors"
          >
            View Services
          </a>
        </div>
      </div>
    </div>
  );
}
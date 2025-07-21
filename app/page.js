"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Stethoscope, Baby, HeartPulse, Clock, Phone,  HomeIcon } from "lucide-react";

export default function Home() {
  const titles = [
    "Professional Nursing & Care Services",
    "Your Family's Care is Our Priority",
    "Trusted Healthcare Professionals",
  ];
  const [currentTitle, setCurrentTitle] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [titles.length]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const sendWhatsAppMessage = () => {
    const { name, phone, message } = formData;
    const text = `Name: ${name}%0APhone: ${phone}%0AMessage: ${message}`;
    window.open(`https://wa.me/918777563481?text=${text}`, '_blank');
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Hero Section */}
      <div className="relative w-full h-screen">
        {/* Hero Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/vid1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-teal-800/20"></div>

        {/* Content Wrapper */}
        <div className="relative z-10 flex flex-col md:flex-row justify-center items-center h-full w-full px-8 md:px-20 gap-12">
          {/* Logo */}
          <div className="flex-shrink-0 mb-8 md:mb-0">
            <Image
              src="/logo.png"
              alt="Rinki Nurses and Ayah Centre Logo"
              width={320}
              height={100}
              priority
            />
          </div>

          {/* Text Content */}
          <div className="text-white max-w-xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 transition-all duration-500">
              {titles[currentTitle]}
            </h1>
            <p className="mb-6 text-lg">
              Providing trusted nursing and caregiving services in Kolkata since 2022.
            </p>
            <a 
              href="tel:8777563481" 
              className="bg-white text-teal-700 px-6 py-3 rounded hover:bg-gray-100 font-semibold inline-flex items-center gap-2"
            >
              <Phone size={20} /> Call Now
            </a>
          </div>
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

      {/* About Us Section */}
      <div className="bg-white py-20 px-8 md:px-20 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-teal-800 mb-12 text-center">About Rinki Nurses and Ayah Centre</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 mb-6">
                Established on 26th May 2022, Rinki Nurses and Ayah Centre has quickly become a trusted name in Kolkata's healthcare sector. Under the leadership of Pradip Pahar, we specialize in providing comprehensive care solutions for families and medical institutions.
              </p>
              <p className="text-gray-700 mb-6">
                Our team of dedicated professionals is committed to delivering exceptional care with compassion and expertise. We understand that every client has unique needs, and we tailor our services accordingly.
              </p>
              <p className="text-gray-700">
                Located in the heart of Kolkata at 12 Mayfair Road, Ballygunge, we serve clients across the city with reliable and professional caregiving services.
              </p>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/img2.jpg" 
                alt="About Rinki Nurses and Ayah Centre"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Our Services Section */}
      <div className="bg-teal-100 py-20 px-8 md:px-20 relative">
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
        <div className="max-w-6xl my-10 mx-auto">
          <h2 className="text-4xl font-bold text-teal-800 mb-12 text-center">Our Core Services</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Stethoscope className="text-teal-800 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-teal-800 mb-3">Professional Nursing Care</h3>
              <p className="text-gray-700">
                Qualified nurses for hospital and home care, including post-operative care, chronic disease management, and medical assistance.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Baby className="text-teal-800 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-teal-800 mb-3">Nanny & Ayah Services</h3>
              <p className="text-gray-700">
                Experienced caregivers for newborn care, maternity support, and child care with proper training and background verification.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <HeartPulse className="text-teal-800 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-teal-800 mb-3">Elder Care Services</h3>
              <p className="text-gray-700">
                Compassionate care for seniors including companionship, medication management, and daily living assistance.
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

      {/* All Services Section */}
      <div className="bg-white py-20 px-8 md:px-20 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-teal-800 mb-12 text-center">Our Complete Service Offerings</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border border-teal-100 rounded-lg p-6 hover:bg-teal-50 transition-all">
              <h3 className="text-xl font-bold text-teal-800 mb-3">24/7 Nursing Care</h3>
              <p className="text-gray-700">
                Round-the-clock nursing services for post-operative care, chronic illness management, and medical support.
              </p>
            </div>
            <div className="border border-teal-100 rounded-lg p-6 hover:bg-teal-50 transition-all">
              <h3 className="text-xl font-bold text-teal-800 mb-3">Trained Ayas</h3>
              <p className="text-gray-700">
                Certified ayas for maternity care, newborn care, and patient assistance in hospitals and homes.
              </p>
            </div>
            <div className="border border-teal-100 rounded-lg p-6 hover:bg-teal-50 transition-all">
              <h3 className="text-xl font-bold text-teal-800 mb-3">Elderly Care</h3>
              <p className="text-gray-700">
                Specialized care for senior citizens including companionship and daily assistance.
              </p>
            </div>
            <div className="border border-teal-100 rounded-lg p-6 hover:bg-teal-50 transition-all">
              <h3 className="text-xl font-bold text-teal-800 mb-3">Babysitting Services</h3>
              <p className="text-gray-700">
                Reliable and caring babysitters for your children with proper background checks.
              </p>
            </div>
            <div className="border border-teal-100 rounded-lg p-6 hover:bg-teal-50 transition-all">
              <h3 className="text-xl font-bold text-teal-800 mb-3">Housekeeping Staff</h3>
              <p className="text-gray-700">
                Professional domestic help for your home or office cleaning needs.
              </p>
            </div>
            <div className="border border-teal-100 rounded-lg p-6 hover:bg-teal-50 transition-all">
              <h3 className="text-xl font-bold text-teal-800 mb-3">Patient Care Services</h3>
              <p className="text-gray-700">
                Comprehensive care plans for patients recovering from illness or surgery.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-teal-800 text-white py-20 px-8 md:px-20 relative text-center bg-cover bg-fixed"
        style={{ backgroundImage: "url('/img1.jpg')" }}>
        <div className="absolute inset-0 bg-black/40 z-0"></div>

        <svg
          className="absolute top-0 left-0 w-full rotate-180 z-10"
          viewBox="0 0 1440 150"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#ffffff"
            d="M0,0 C360,150 1080,0 1440,150 L1440,150 L0,150 Z"
          />
        </svg>

        <div className="relative z-10 max-w-6xl my-10 mx-auto">
          <h2 className="text-4xl font-bold mb-12">Why Choose Rinki Nurses and Ayah Centre</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-teal-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 Availability</h3>
              <p>Emergency services available round the clock for urgent requirements.</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-teal-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <HomeIcon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Home Services</h3>
              <p>We bring professional care to your doorstep for maximum convenience.</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-teal-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Trained Professionals</h3>
              <p>All our staff are properly trained, certified and background verified.</p>
            </div>
          </div>
        </div>

        <svg
          className="absolute bottom-0 left-0 w-full z-10"
          viewBox="0 0 1440 150"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#ffffff"
            d="M0,0 C360,150 1080,0 1440,150 L1440,150 L0,150 Z"
          />
        </svg>
      </div>

      {/* Testimonials Section */}
      <div className="bg-white text-black py-20 px-8 md:px-20 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-teal-800 mb-12 text-center">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-800 font-bold mr-4">AS</div>
                <div>
                  <h4 className="font-bold">Amit Sharma</h4>
                  <div className="flex text-yellow-400">
                    ★ ★ ★ ★ ★
                  </div>
                </div>
              </div>
              <p className="text-gray-700">
                "The nurse provided for my mother's post-surgery care was extremely professional and compassionate. Highly recommended!"
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-800 font-bold mr-4">PD</div>
                <div>
                  <h4 className="font-bold">Priya Das</h4>
                  <div className="flex text-yellow-400">
                    ★ ★ ★ ★ ★
                  </div>
                </div>
              </div>
              <p className="text-gray-700">
                "Their aya service helped us tremendously when my wife delivered our baby. The caregiver was experienced and very caring."
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-800 font-bold mr-4">RK</div>
                <div>
                  <h4 className="font-bold">Rajiv Kumar</h4>
                  <div className="flex text-yellow-400">
                    ★ ★ ★ ★ ☆
                  </div>
                </div>
              </div>
              <p className="text-gray-700">
                "We've been using their elder care services for 6 months. The caregiver is punctual, professional and treats my father with respect."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
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
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold text-teal-800 mb-6">Contact Us</h2>
            <div className="mb-8">
              <h3 className="text-xl font-bold text-teal-800 mb-3">Address</h3>
              <p className="text-gray-700">
                12 Mayfair Road, Ballygunge, Kolkata - 700019
              </p>
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-bold text-teal-800 mb-3">Contact Information</h3>
              <p className="text-gray-700 mb-2">
                <strong>Phone:</strong> 8777563481 / 9007964904
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Email:</strong> pradippahar2017@gmail.com
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-teal-800 mb-3">Business Hours</h3>
              <p className="text-gray-700">
                Monday - Sunday: 24/7 Services Available
              </p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-teal-800 mb-6">Send Us a Message</h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                ></textarea>
              </div>
              <button
                onClick={sendWhatsAppMessage}
                className="bg-teal-700 text-white px-6 py-3 rounded hover:bg-teal-800 font-semibold w-full flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                Send via WhatsApp
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
      <div className="bg-teal-800 text-white py-16 px-8 text-center">
        <h2 className="text-3xl font-bold mb-6">Need Care Services?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Contact us today for reliable and compassionate care solutions tailored to your family's needs.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="tel:8777563481" 
            className="bg-white text-teal-800 px-8 py-3 rounded font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
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
        </div>
      </div>
    </div>
  );
}
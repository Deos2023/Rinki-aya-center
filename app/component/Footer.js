"use client";
import Link from "next/link";
import { 
  FaPhone, FaMapMarkerAlt, FaEnvelope, FaClock, 
  FaFacebook, FaTwitter, FaInstagram 
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-teal-900 text-white">
      {/* Wave divider at top */}
      <svg 
        className="w-full"
        viewBox="0 0 1440 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          fill="#ffffff" 
          d="M0,50 C150,150 350,0 500,50 C700,100 800,0 1000,50 C1200,100 1300,0 1440,50 L1440,100 L0,100 Z"
        />
      </svg>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* About Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">RINKI NURSES AND AYAH CENTRE</h3>
            <p className="mb-4">
              Providing quality nursing and caregiving services in Kolkata since 2016.
              <br />
              <span className="text-sm">Established: 26th May 2016</span>
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-teal-300">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="hover:text-teal-300">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="hover:text-teal-300">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/nursing-agency" className="hover:text-teal-300">Nursing Agency</Link>
              </li>
              <li>
                <Link href="/nanny-service" className="hover:text-teal-300">Nanny Service</Link>
              </li>
              <li>
                <Link href="/elder-care" className="hover:text-teal-300">Elder Care Services</Link>
              </li>
              <li>
                <Link href="/patient-care" className="hover:text-teal-300">Patient Care Services</Link>
              </li>
              <li>
                <Link href="/aya-service" className="hover:text-teal-300">Aya Service</Link>
              </li>
              <li>
                <Link href="/professional-nurse-care" className="hover:text-teal-300">Professional Nurse Care</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 flex-shrink-0" />
                <span>12 Mayfair Road, Ballygunge, Kolkata - 700019</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3" />
                <div>
                  <a href="tel:8777563481" className="hover:text-teal-300 block">8777563481</a>
                  <a href="tel:9007964904" className="hover:text-teal-300 block">9007964904</a>
                </div>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3" />
                <a href="mailto:pradippahar2017@gmail.com" className="hover:text-teal-300">
                  pradippahar2017@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <FaClock className="mr-3" />
                <span>24/7 Services Available</span>
              </li>
            </ul>
          </div>

          {/* Additional Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">More Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/babysitter" className="hover:text-teal-300">Babysitter</Link>
              </li>
              <li>
                <Link href="/housekeeping" className="hover:text-teal-300">Housekeeping</Link>
              </li>
              <li>
                <Link href="/domestic-help" className="hover:text-teal-300">Domestic Help</Link>
              </li>
              <li>
                <Link href="/office-cleaning" className="hover:text-teal-300">Office Housekeeping</Link>
              </li>
              <li>
                <Link href="/cleaning-staff" className="hover:text-teal-300">Cleaning Staff</Link>
              </li>
              <li>
                <Link href="/night-day-nursing" className="hover:text-teal-300">Night & Day Nursing</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-teal-800 mt-8 pt-6 text-center">
          <p>
            © {new Date().getFullYear()} Rinki Nurses and Ayah Centre / Pradip Pahar. All rights reserved. Website Developed & Maintained By Digital Exposure Online Services.
          </p>
        </div>
      </div>
    </footer>
  );
}
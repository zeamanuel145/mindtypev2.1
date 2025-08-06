import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#f0f4ff] dark:bg-gray-900 text-[#1f2937] dark:text-gray-300 border-t border-[#d0d7e2] dark:border-gray-700 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          
          {/* Logo and Branding */}
          <div>
            <h2 className="text-xl font-bold">
              <span className="text-gray-800 dark:text-white">MIND</span>
              <span className="text-blue-600">TYPE</span>
            </h2>
            <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">
              ©2025 MINDTYPE. All rights reserved.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 text-sm">
            <a href="/terms" className="hover:underline hover:text-blue-600">Terms & Conditions</a>
            <a href="/privacy" className="hover:underline hover:text-blue-600">Privacy Policy</a>
            <a href="/contact" className="hover:underline hover:text-blue-600">Contact</a>
            <a href="/about" className="hover:underline hover:text-blue-600">About Us</a>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 text-lg">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-500">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
              <FaLinkedinIn />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 dark:hover:text-white">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

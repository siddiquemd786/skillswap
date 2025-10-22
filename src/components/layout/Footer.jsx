import React from "react";
import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* 🔹 1. Contact Info */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">Contact Us</h2>
          <p className="flex items-center gap-2">
            <Mail size={18} /> support@skilltrade.com
          </p>
          <p className="flex items-center gap-2 mt-2">
            <Phone size={18} /> +880 1234-567890
          </p>
          <p className="mt-2">Dhaka, Bangladesh</p>
        </div>

        {/* 🔹 2. Social Links */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">Follow Us</h2>
          <div className="flex items-center gap-4">
            <div className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 cursor-pointer transition">
              <Facebook size={20} />
            </div>
            <div className="p-2 bg-gray-800 rounded-full hover:bg-pink-500 cursor-pointer transition">
              <Instagram size={20} />
            </div>
            <div className="p-2 bg-gray-800 rounded-full hover:bg-sky-500 cursor-pointer transition">
              <Twitter size={20} />
            </div>
          </div>
        </div>

        {/* 🔹 3. Privacy Policy */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">Legal</h2>
          <p className="cursor-pointer hover:text-white transition">
            Privacy Policy
          </p>
          <p className="cursor-pointer hover:text-white transition">
            Terms of Service
          </p>
          <p className="cursor-pointer hover:text-white transition">
            Cookie Policy
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} SkillTrade — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

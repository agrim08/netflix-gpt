import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-10 ">
      <div className="container mx-auto px-6">
        {/* Top Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          <div>
            <ul>
              <li className="mb-2">
                <div href="#" className="hover:underline">
                  FAQ
                </div>
              </li>
              <li className="mb-2">
                <div href="#" className="hover:underline">
                  Investor Relations
                </div>
              </li>
              <li className="mb-2">
                <div href="#" className="hover:underline">
                  Privacy
                </div>
              </li>
              <li className="mb-2">
                <div href="#" className="hover:underline">
                  Speed Test
                </div>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="mb-2">
                <div href="#" className="hover:underline">
                  Help Center
                </div>
              </li>
              <li className="mb-2">
                <div href="#" className="hover:underline">
                  Jobs
                </div>
              </li>
              <li className="mb-2">
                <div href="#" className="hover:underline">
                  Cookie Preferences
                </div>
              </li>
              <li className="mb-2">
                <div href="#" className="hover:underline">
                  Legal Notices
                </div>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="mb-2">
                <div href="#" className="hover:underline">
                  Account
                </div>
              </li>
              <li className="mb-2">
                <div href="#" className="hover:underline">
                  Ways to Watch
                </div>
              </li>
              <li className="mb-2">
                <div href="#" className="hover:underline">
                  Corporate Information
                </div>
              </li>
              <li className="mb-2">
                <div href="#" className="hover:underline">
                  Only on Netflix
                </div>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="mb-2">
                <div href="#" className="hover:underline">
                  Media Center
                </div>
              </li>
              <li className="mb-2">
                <div href="#" className="hover:underline">
                  Terms of Use
                </div>
              </li>
              <li className="mb-2">
                <div href="#" className="hover:underline">
                  Contact Us
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Language Selection */}
        <div className="mt-8">
          <button className="border border-gray-500 text-gray-400 py-2 px-4 rounded">
            English
          </button>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 text-sm text-gray-500">
          <p>© 2024 Netflix, Inc.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

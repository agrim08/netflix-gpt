import React from "react";

const Footer = () => {
  const footerContent = {
    groupOne: [
      {
        title: "FAQ",
        link: "https://help.netflix.com/en/node/412",
      },
      {
        title: "Investor Relations",
        link: "https://ir.netflix.net/ir-overview/profile/default.aspx",
      },
      {
        title: "Privacy",
        link: "https://help.netflix.com/legal/privacy",
      },
      {
        title: "Speed Test",
        link: "https://fast.com/",
      },
    ],

    groupTwo: [
      {
        title: "Jobs",
        link: "https://jobs.netflix.com/",
      },
      {
        title: "Cookie Preferences",
        link: "/browse",
      },
      {
        title: "Legal Notices",
        link: "https://help.netflix.com/legal/notices",
      },
      {
        title: "Account",
        link: "https://www.netflix.com/account",
      },
    ],
    groupThree: [
      {
        title: "Ways to watch",
        link: "https://help.netflix.com/en/node/14361",
      },
      {
        title: "Corporate Information",
        link: "https://help.netflix.com/en/node/134094",
      },
      {
        title: "Only on Netflix",
        link: "https://www.netflix.com/in/browse/genre/839338",
      },
      {
        title: "Media Center",
        link: "https://media.netflix.com/en/",
      },
    ],

    groupFour: [
      {
        title: "Terms of Use",
        link: "https://help.netflix.com/legal/termsofuse",
      },
      {
        title: "Contact Us",
        link: "https://help.netflix.com/en/contactus",
      },
      {
        title: "Help Center",
        link: "https://help.netflix.com/en",
      },
    ],
  };

  return (
    <footer className="bg-gray-950 text-white py-10 ">
      <div className="container mx-auto px-6">
        {/* Top Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm ml-8">
          {Object.keys(footerContent)?.map((footer) => (
            <ul>
              {footerContent?.[footer]?.map((footerItem) => (
                <li
                  className="mb-2 cursor-pointer underline"
                  onClick={() => window.open(footerItem?.link)}
                >
                  <div href="#" className="hover:underline">
                    {footerItem?.title}
                  </div>
                </li>
              ))}
            </ul>
          ))}
        </div>

        {/* Language Selection */}
        <div className="mt-8 ml-8">
          <button className="border border-gray-500 text-gray-400 py-2 px-4 rounded">
            English
          </button>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 text-sm text-gray-500 ml-8">
          <p>© 2024 Netflix, Inc.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

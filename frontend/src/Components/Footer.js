import React, { useState } from "react";

const Footer = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <footer className="bg-gray-100 border-t border-gray-300 mt-10">
      <div className="container mx-auto py-6 px-4">
        {/* About Section (Top Section, Full Width) */}
        <div className="mb-6 w-full">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">About ixigo</h2>
          <p className="text-gray-600 text-sm">
            Launched in 2007, ixigo is a technology company focused on empowering Indian travellers to plan, book and manage their trips across rail, air, buses, and hotels. We assist travellers in making smarter travel decisions by leveraging artificial intelligence, machine learning, and data science-led innovations on our OTA platforms, comprising our websites and mobile applications. Our vision is to become the most customer-centric travel company, by offering the best customer experience to our users. Our focus on travel utility and customer experience for travellers in the 'next billion user' segment is driven by technology, cost-efficiency and our culture of excellence.
            {isExpanded && (
              <span> We continuously strive to enhance our services to provide a seamless experience across all travel categories.</span>
            )}
          </p>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-600 text-sm mt-2 inline-block"
          >
            {isExpanded ? "Read less" : "Read more"}
          </button>
        </div>

        {/* Links Section (Structured like Ixigo) */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex flex-wrap">
            {[
              { title: "Popular Flight Routes", links: ["Delhi to Kolkata flights", "Mumbai to Chennai flights", "Delhi to Hyderabad flights", "Bengaluru to Kochi flights"] },
              { title: "Top Flight Routes", links: ["Delhi to Hyderabad flights", "Surat to Ayodhya flights", "Mumbai to Ahmedabad flights", "Bengaluru to Kochi flights"] },
              { title: "Popular Train Routes", links: ["Delhi to Chandigarh trains", "Mumbai to Jaipur trains", "Chennai to Coimbatore trains", "Hyderabad to Ayodhya trains"] },
              { title: "Top Train Routes", links: ["Hydreabad to Ayodhya flights", "Chennai to Coimbatore flights", "Delhi to Chandigarh flights", "Mumbai to Jaipur flights"] },
              // { title: "Top Hotel Destinations", links: ["Delhi to Ahmedabad hotels", "Mumbai to Ayodhya hotels", "Delhi to Amritsar hotels", "Coimbatore to Chennai hotels"] },
              { title: "Plan Your Trip", links: ["Bengaluru to Kolkata", "Delhi to Patna", "Bangalore to Pune", "Bengaluru to Kolkata"] }
            ].map((section, index) => (
              <div key={index} className="w-full md:w-1/5 mb-4 md:mb-0">
                <h3 className="text-md font-medium text-gray-800 mb-2">{section.title}</h3>
                <ul>
                  {section.links.map((link, idx) => (
                    <li key={idx} className="text-gray-600 text-sm mb-1">
                      <a href="#" className="hover:text-blue-600">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="border-t border-gray-300 mt-6 pt-4 text-center">
          <p className="text-gray-600 text-sm">&copy; 2025 ixigo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

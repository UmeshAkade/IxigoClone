import React, { useState } from "react";
import { Card, CardContent } from "../Components/Card";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import flightIcon from "../Assets/Images/flight.f515b25a.svg";
import hotelIcon from "../Assets/Images/hotel.4b63222d.svg";
import trainIcon from "../Assets/Images/train.d3e3d1e5.svg";
import busIcon from "../Assets/Images/bus.1942c5dd.svg";

const Home = () => {
  const [tripType, setTripType] = useState("One Way");

  return (
    <>
      <Header />

      <div className='container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 mt-1'>
        {/* Navigation Tabs */}
        <Card className='p-3 shadow-lg rounded-lg'>
          <CardContent>
            <div className='flex justify-between items-center'>
              {/* Travel Options */}
              <div className='flex space-x-2'>
                {[
                  { icon: flightIcon, label: "Flights" },
                  // { icon: hotelIcon, label: "Hotels" },
                  // { icon: trainIcon, label: "Trains" },
                  { icon: busIcon, label: "Buses" },
                ].map(({ icon, label }) => (
                  <div
                    key={label}
                    className='flex items-center space-x-1 cursor-pointer'
                  >
                    <img
                      src={icon}
                      alt={`${label} Icon`}
                      className='w-14 h-14'
                    />
                    <span className='text-lg font-semibold'>{label}</span>
                  </div>
                ))}
              </div>

              {/* Booking Text */}
              <div className='text-right'>
                <p className='text-lg  text-black'>
                  Book Flights, Trains, Buses & Hotels
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Booking Section */}
        <div className='mt-0 p-3 bg-white w-full md:w-100 shadow-lg rounded-2xl'>
          {/* One Way / Round Trip Toggle */}
          <div className='flex justify-start space-x-2 mb-3'>
            {["One Way", "Round Trip"].map((type) => (
              <button
                key={type}
                className={`py-2 px-4 rounded-full text-lg shadow-md ${
                  tripType === type
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => setTripType(type)}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Input Fields & Search Button */}
          <div className='grid grid-cols-1 md:grid-cols-6 gap-2 mb-2'>
            {["From", "To", "Departure", "Return", "Travellers & Class"].map(
              (placeholder) => (
                <input
                  key={placeholder}
                  type='text'
                  placeholder={placeholder}
                  defaultValue={
                    placeholder === "Departure"
                      ? "Tue, 18 Mar"
                      : placeholder === "Travellers & Class"
                      ? "1 Traveller, Economy"
                      : ""
                  }
                  className={`p-3 text-base border border-gray-300 w-full bg-gray-50 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-gray-500 focus:ring-2 focus:ring-gray-200 transition ${
                    placeholder === "From"
                      ? "rounded-l-full rounded-r-md"
                      : "rounded-md"
                  }`}
                />
              )
            )}
            <button className='bg-orange-500 text-white py-3 px-6 text-lg rounded-r-full rounded-l-md hover:bg-orange-600 transition'>
              Search
            </button>
          </div>

          {/* Special Fares */}
          <div className='flex flex-wrap items-center mt-3 mb-2 space-x-3'>
            <label className='font-semibold text-base whitespace-nowrap'>
              Special Fares (Optional):
            </label>
            {["Student", "Senior Citizen", "Armed Forces"].map((fare) => (
              <button
                key={fare}
                className='border border-black px-3 py-1.5 text-sm bg-white rounded-md shadow-md hover:bg-gray-100 transition'
              >
                {fare}
              </button>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className='mt-6'>
          <h2 className='text-lg font-bold mb-3'>Do More With</h2>
          <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2'>
            {[
              { emoji: "✈️", label: "Flight Tracker" },
              { emoji: "📄", label: "Book Visa" },
              { emoji: "🛡️", label: "Travel Insurance" },
              { emoji: "💳", label: "Credit Card" },
              { emoji: "👥", label: "Group Booking" },
              { emoji: "🚕", label: "Airport Cabs" },
              { emoji: "📝", label: "Plan" },
              { emoji: "🔔", label: "Fare Alerts" },
            ].map((feature) => (
              <div
                key={feature.label}
                className='text-center flex flex-col items-center p-2 shadow-md rounded-md hover:shadow-lg transition'
              >
                <div className='text-2xl mb-1'>{feature.emoji}</div>
                <p className='text-blue-700 font-medium text-sm'>
                  {feature.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;

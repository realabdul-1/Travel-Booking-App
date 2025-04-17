import React from 'react';
import { Link } from 'react-router-dom';
import { Plane, Hotel, User, Globe } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Globe className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold">TravelHub</span>
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-4">
                <Link to="/flights" className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-gray-700">
                  <Plane className="w-5 h-5" />
                  <span>Flights</span>
                </Link>
                <Link to="/hotels" className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-gray-700">
                  <Hotel className="w-5 h-5" />
                  <span>Hotels</span>
                </Link>
              </div>
            </div>
          </div>
          <Link to="/login" className="flex items-center space-x-2 px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700">
            <User className="w-5 h-5" />
            <span>Login</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
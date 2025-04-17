import React from 'react';
import { Plane, Hotel, Calendar, MapPin, Search } from 'lucide-react';
import DestinationCarousel from '../components/DestinationCarousel';

const Home = () => {
  const [searchType, setSearchType] = React.useState<'flights' | 'hotels'>('flights');

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-gray-800 rounded-xl p-6 shadow-xl">
        <div className="flex space-x-4 mb-6">
          <button
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition ${
              searchType === 'flights' ? 'bg-blue-600 text-white' : 'bg-gray-700 hover:bg-gray-600'
            }`}
            onClick={() => setSearchType('flights')}
          >
            <Plane className="w-5 h-5" />
            <span>Flights</span>
          </button>
          <button
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition ${
              searchType === 'hotels' ? 'bg-blue-600 text-white' : 'bg-gray-700 hover:bg-gray-600'
            }`}
            onClick={() => setSearchType('hotels')}
          >
            <Hotel className="w-5 h-5" />
            <span>Hotels</span>
          </button>
        </div>

        {searchType === 'flights' ? (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="col-span-1">
              <label className="block text-sm font-medium mb-2">From</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Departure city"
                />
              </div>
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-medium mb-2">To</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Arrival city"
                />
              </div>
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-medium mb-2">Date</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="date"
                  className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-medium mb-2">Search</label>
              <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition">
                <Search className="w-5 h-5" />
                <span>Search Flights</span>
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="col-span-1">
              <label className="block text-sm font-medium mb-2">Destination</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Where are you going?"
                />
              </div>
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-medium mb-2">Check-in</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="date"
                  className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-medium mb-2">Check-out</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="date"
                  className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-medium mb-2">Search</label>
              <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition">
                <Search className="w-5 h-5" />
                <span>Search Hotels</span>
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Popular Destinations</h2>
        <DestinationCarousel />
      </div>
    </div>
  );
};

export default Home;
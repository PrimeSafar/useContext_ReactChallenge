import { useState, useContext } from "react";
import { places } from "./data.jsx";
import { getImageUrl } from "./utils.jsx";
import ImagePass from "./ImagePass.jsx";

export default function App() {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6">
        <ImagePass.Provider value={imageSize}>
          {/* Header Section */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Travel Destinations</h1>
            <label className="flex items-center space-x-3 cursor-pointer bg-gray-50 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors">
              <input
                type="checkbox"
                checked={isLarge}
                onChange={(e) => setIsLarge(e.target.checked)}
                className="w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-500 focus:ring-2"
              />
              <span className="text-gray-700 font-medium">Use large images</span>
            </label>
          </div>

          <div className="border-t border-gray-200 my-6"></div>

          {/* Content Section */}
          <List />
        </ImagePass.Provider>
      </div>
    </div>
  );
}

function List() {
  const imageSize = useContext(ImagePass);

  const listItems = places.map((place) => (
    <li key={place.id} className="mb-8 last:mb-0">
      <Place place={place} imageSize={imageSize} />
    </li>
  ));
  
  return (
    <ul className="space-y-8">
      {listItems}
    </ul>
  );
}

function Place({ place, imageSize }) {
  return (
    <div className="flex flex-col sm:flex-row items-start gap-6 p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300 border border-gray-100">
      <PlaceImage place={place} imageSize={imageSize} />
      <div className="flex-1">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{place.name}</h3>
        <p className="text-gray-600 leading-relaxed">{place.description}</p>
      </div>
    </div>
  );
}

function PlaceImage({ place, imageSize }) {
  return (
    <div className={`flex-shrink-0 ${imageSize === 150 ? 'ring-4 ring-indigo-200' : 'ring-2 ring-gray-200'} rounded-lg overflow-hidden transition-all duration-300`}>
      <img
        src={getImageUrl(place)}
        alt={place.name}
        width={imageSize}
        height={imageSize}
        className="object-cover rounded-lg transition-transform duration-300 hover:scale-105"
      />
    </div>
  );
}
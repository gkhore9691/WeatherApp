import React, { useEffect, useState } from "react";
import { MdWbSunny } from "react-icons/md";
import { IoSearchSharp, IoLocationSharp } from "react-icons/io5";
import useLocation from "../Hooks/useLocation";
import debounce from "debounce";
import { useAppContext } from "../Context/AppContext";

const Searchbar = () => {
  const [search, setSearch] = useState("");
  let { error, isLoading, locationData } = useLocation(search);
  const { setLocation, location } = useAppContext();

  const debouncedSearch = debounce((e) => {
    setSearch(e.target.value);
  }, 500);

  useEffect(() => {
    console.log(locationData, error, isLoading);
  }, [locationData, error, isLoading]);

  const handleSelectLocation = (location) => {
    setLocation(location);
    setSearch("");
  };

  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between p-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
      {/* Logo and title */}
      <div className="flex items-center gap-2 mb-2 md:mb-0">
        <MdWbSunny className="text-2xl sm:text-3xl" />
        <p className="text-xl sm:text-2xl font-semibold">Aganitha Weather</p>
      </div>

      {/* Location display */}
      {location && (
        <div className="flex items-center gap-2 mt-2 md:mt-0 md:ml-auto md:mr-6 text-center text-sm md:text-lg">
          <IoLocationSharp className="text-xl md:text-2xl" />
          <p className="font-medium">
            {location.name}, {location.admin1}, {location.country}
          </p>
        </div>
      )}

      {/* Search input */}
      <div className="flex items-center gap-2 bg-blue-700 bg-opacity-80 rounded-lg p-2 border border-blue-300 w-full md:w-1/3 relative mt-4 md:mt-0">
        <IoSearchSharp className="text-lg md:text-xl" />
        <input
          type="text"
          placeholder="Search city"
          className="bg-transparent outline-none text-white text-sm md:text-lg w-full placeholder-white"
          onChange={(e) => debouncedSearch(e)}
        />
        {(locationData?.results?.length > 0 || isLoading || error) && (
          <div className="absolute left-0 top-[100%] w-full bg-blue-800 bg-opacity-90 text-white border border-blue-300 rounded-lg mt-2 z-10 overflow-hidden">
            {locationData?.results?.length > 0 &&
              locationData.results.map((location, index) => (
                <div
                  key={index}
                  className="flex items-center w-full p-3 text-xs md:text-sm font-semibold cursor-pointer hover:bg-blue-700"
                  onClick={() => handleSelectLocation(location)}
                >
                  <p>
                    {location.name}, {location.admin1}, {location.country}
                  </p>
                </div>
              ))}
            {isLoading && <p className="p-3 text-sm">Loading...</p>}
            {error && <p className="p-3 text-red-400 text-sm">Error loading data</p>}
          </div>
        )}
      </div>
    </div>
  );
};

export default Searchbar;

import { useState, useEffect } from "react";

const { fetchLocationData } = require("../Services/fetchLocationData");

const useLocation = (search) => {
  const [locationData, setLocationData] = useState({
    results: [],
    generationtime_ms: 1.101017,
  });
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!search) {
      return;
    }
    const fetchLocation = async () => {
      setIsLoading(true);
      try {
        const data = await fetchLocationData(search);
        setLocationData(data);
        setError(false);
      } catch (error) {
        setError(true);
      }
      setIsLoading(false);
    };
    fetchLocation();
  }, [search]);

  if (!search) {
    return {
      locationData: {
        results: [],
        generationtime_ms: 1.101017,
      },
      error,
      isLoading,
    };
  }
  

  return { locationData, error, isLoading };
};

export default useLocation;

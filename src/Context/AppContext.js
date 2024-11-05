import React, { createContext, useContext, useState } from 'react';

// Create the context
const AppContext = createContext();

// Custom hook to use the context
export const useAppContext = () => {
  return useContext(AppContext);
};

// Context provider component
export const AppProvider = ({ children }) => {
  // Define the state you want to share across components
  const [state, setState] = useState({
    // Add any default values here
    location: null,
  });

  // Define any functions to update the state
  const setLocation = (location) => {
    setState({ ...state, location });
  }

  // Pass the state and any functions as context value
  const value = {
    state,
    setState,
    setLocation,
    location: state.location
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

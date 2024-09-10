// app/context/CountryContext.tsx
import React, { createContext, useContext, useState } from 'react';
import { Country } from '../types/Country';

interface CountryContextProps {
  countries: Country[];
  setCountries: React.Dispatch<React.SetStateAction<Country[]>>;
}

const CountryContext = createContext<CountryContextProps | undefined>(undefined);

export const CountryProvider: React.FC = ({ children }) => {
  const [countries, setCountries] = useState<Country[]>([]);

  return (
    <CountryContext.Provider value={{ countries, setCountries }}>
      {children}
    </CountryContext.Provider>
  );
};

export const useCountryContext = () => {
  const context = useContext(CountryContext);
  if (!context) throw new Error('useCountryContext must be used within a CountryProvider');
  return context;
};

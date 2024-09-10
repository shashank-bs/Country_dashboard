// app/context/CountryContext.tsx
import React, { createContext, useContext, useState } from 'react';
import { Country } from '../types/Country';

interface CountryContextProps {
  countries: Country[];
  setCountries: React.Dispatch<React.SetStateAction<Country[]>>;
}

/** Not using this Context at the time */
const CountryContext = createContext<CountryContextProps | undefined>(undefined);

export const CountryProvider: React.FC = ({  }) => {
  const [countries, setCountries] = useState<Country[]>([]);

  return (
    <CountryContext.Provider value={{ countries, setCountries }}>
      {}
    </CountryContext.Provider>
  );
};

export const useCountryContext = () => {
  const context = useContext(CountryContext);
  if (!context) throw new Error('useCountryContext must be used within a CountryProvider');
  return context;
};

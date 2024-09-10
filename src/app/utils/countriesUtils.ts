// app/utils/countriesUtils.ts
import { Country } from "../types/Country";

export const sortCountriesByPopulation = (
  countries: Country[],
  order: "asc" | "desc"
): Country[] => {
  return countries.sort((a, b) =>
    order === "asc" ? a.population - b.population : b.population - a.population
  );
};

export const filterCountriesByRegion = (
  countries: Country[],
  region: string
): Country[] => {
  return countries.filter((country) => country.region === region);
};

export const searchCountriesByNameOrCapital = (
  countries: Country[],
  query: string
): Country[] => {
  const filteredCountries = countries.filter(
    (country) =>
      country.name.common.toLowerCase().includes(query.toLowerCase()) ||
      country.capital?.[0]?.toLowerCase().includes(query.toLowerCase())
  );
  return filteredCountries;
};

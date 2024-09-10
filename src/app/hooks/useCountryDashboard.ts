// hooks/useCountryDashboard.ts
import { useState, useEffect, useRef, useCallback } from "react";
import useCountries from "./useCountries";
import { Country } from "../types/Country";
import {
  sortCountriesByPopulation,
  searchCountriesByNameOrCapital,
} from "../utils/countriesUtils";

const ITEMS_PER_PAGE = 20; // Number of items to load per scroll

const useCountryDashboard = () => {
  const { countries, loading, error } = useCountries(); // Fetch countries from the custom hook
  const [displayedCountries, setDisplayedCountries] = useState<Country[]>([]); // Countries to display
  const [searchQuery, setSearchQuery] = useState<string>(""); // Search query state
  const [hasMore, setHasMore] = useState(false);
  const [page, setPage] = useState<number>(1); // Pagination state

  // Observer reference for infinite scrolling
  const observerRef = useRef<HTMLDivElement | null>(null);

  // Function to load more countries when the user scrolls down
  const loadMoreCountries = useCallback(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;
    const end = page * ITEMS_PER_PAGE;
    const newCountries = searchQuery
      ? displayedCountries.slice(start, end)
      : countries.slice(start, end);
    const hasMoreCountries = searchQuery
      ? displayedCountries.splice(end).length > 0
      : countries.slice(end).length > 0;
    setHasMore(hasMoreCountries);
    setDisplayedCountries((prevCountries) => [
      ...prevCountries,
      ...newCountries,
    ]);
  }, [countries, page, displayedCountries, searchQuery]);

  // Load more countries when the page state changes
  useEffect(() => {
    if (countries.length) {
      loadMoreCountries();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, countries]);

  // Handle Searching by country name or capital
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    const filtered = searchCountriesByNameOrCapital(countries, query);
    setDisplayedCountries(filtered); // Update displayedCountries based on search results
    setPage(1); // Reset pagination when searching
  };

  // Handle Sorting (asc or desc by population)
  const handleSort = (order: "asc" | "desc") => {
    const sorted = sortCountriesByPopulation(displayedCountries, order);
    setDisplayedCountries([...sorted]); // Update the displayed countries list
  };

  return {
    page,
    loading,
    error,
    displayedCountries,
    searchQuery,
    observerRef,
    hasMore,
    handleSearch,
    handleSort,
    setPage,
  };
};

export default useCountryDashboard;

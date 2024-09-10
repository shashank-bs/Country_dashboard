// app/page.tsx
"use client";

import {
  CircularProgress,
  TextField,
  Button,
  Box,
  Typography,
} from "@mui/material";
import { CountryGrid } from "./components";
import useCountryDashboard from "./hooks/useCountryDashboard";
import InfiniteScroll from "react-infinite-scroll-component";

const HomePage = () => {
  const {
    page,
    loading,
    error,
    displayedCountries,
    searchQuery,
    hasMore,
    handleSearch,
    handleSort,
    setPage,
  } = useCountryDashboard();

  // Display loading state
  if (loading && page === 1) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress />
      </Box>
    );
  }

  // Display error state
  if (error) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <Typography color="error">
          Failed to fetch countries. Please try again later.
        </Typography>
      </Box>
    );
  }

  return (
    <>
      <Box>
        {/* Search Bar */}
        <Box mb={4}>
          <TextField
            label="Search by country or capital"
            variant="outlined"
            fullWidth
            value={searchQuery}
            onChange={handleSearch}
          />
        </Box>

        {/* Sort Buttons */}
        <Box mb={4} display="flex" justifyContent="space-between">
          <Button variant="contained" onClick={() => handleSort("asc")}>
            Sort by Population (Asc)
          </Button>
          <Button variant="contained" onClick={() => handleSort("desc")}>
            Sort by Population (Desc)
          </Button>
        </Box>
      </Box>
      <div
        style={{
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <InfiniteScroll
          style={{ overflow: "hidden" }}
          dataLength={displayedCountries.length}
          next={() => {
            setPage((prev) => prev + 1);
          }}
          hasMore={hasMore}
          loader={
            <Box display="flex" justifyContent="center" mt={4}>
              <CircularProgress />
            </Box>
          }
          endMessage={
            <Box display="flex" justifyContent="center" mt={4}>
              <Typography>No more countries to display.</Typography>
            </Box>
          }
        >
          {/* Country Grid */}
          <CountryGrid countries={displayedCountries}></CountryGrid>
        </InfiniteScroll>
      </div>
    </>
  );
};

export default HomePage;

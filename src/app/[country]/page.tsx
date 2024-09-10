// app/[country]/page.tsx
"use client"
import { useParams } from 'next/navigation';
import { Box, CircularProgress, Typography } from '@mui/material';
import useCountries from '../hooks/useCountries';
import CountryDetail from '../components/CountryDetail/CountryDetail';

const CountryPage = () => {
  const { country } = useParams(); // Access the dynamic country param from the URL
  const { countries, loading } = useCountries(); // Fetch all countries

  // Display loading state
  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress />
      </Box>
    );
  }

  // Find the selected country by name (decodeURIComponent for proper matching)
  const selectedCountry = countries.find(
    (c) => c.name.common.toLowerCase() === decodeURIComponent(country as string).toLowerCase()
  );

  // Handle case where the country is not found
  if (!selectedCountry) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <Typography color="error" variant="h5">Country not found</Typography>
      </Box>
    );
  }

  // Display country details
  return (
    <Box>
      <CountryDetail country={selectedCountry} />
    </Box>
  );
};

export default CountryPage;

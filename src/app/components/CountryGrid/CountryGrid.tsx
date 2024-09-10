// src/components/CountryGrid.tsx
import { Country } from "../../types/Country";
import { Grid2 } from "@mui/material";
import CountryCard from "../CountryCard/CountryCard";

interface CountryGridProps {
  countries: Country[];
}

const CountryGrid: React.FC<CountryGridProps> = ({ countries }) => {
  return (
    <Grid2 container spacing={2}>
      {countries.map((country) => (
        <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={country.cca2}>
          <CountryCard country={country} key={country.name.official} />
        </Grid2>
      ))}
    </Grid2>
  );
};

export default CountryGrid;

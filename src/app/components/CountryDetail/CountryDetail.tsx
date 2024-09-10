// app/components/CountryDetail.tsx
import { Typography, Box } from '@mui/material';
import { Country } from '../../types/Country';

interface CountryDetailProps {
  country: Country;
}

const CountryDetail: React.FC<CountryDetailProps> = ({ country }) => {
  return (
    <Box p={4}>
      <Typography variant="h4">{country.name.common}</Typography>
      <Typography variant="h6">Capital: {country.capital?.[0]}</Typography>
      <Typography variant="body1">Population: {country.population.toLocaleString()}</Typography>
      <Typography variant="body1">Region: {country.region}</Typography>
      <Typography variant="body1">Timezones: {country.timezones.join(', ')}</Typography>
      <Typography variant="body1">
        Languages: {Object.values(country.languages).join(', ')}
      </Typography>
      <Typography variant="body1">
        Currencies: {Object.values(country.currencies).map(c => c.name).join(', ')}
      </Typography>
    </Box>
  );
};

export default CountryDetail;

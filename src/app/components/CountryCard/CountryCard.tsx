// app/components/CountryCard.tsx
import { Card, CardContent, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { Country } from "../../types/Country";

export interface CountryCardProps {
  country: Country;
}

const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
  // URL encode the country name for the route
  const countryNameUrl = encodeURIComponent(country.name.common.toLowerCase());

  return (
    <Link href={`/${countryNameUrl}`}>
      <Card
        sx={{ maxWidth: 345, cursor: "pointer" }}
        data-testid="country-card"
        variant="elevation"
      >
        <div style={{ textAlign: "center" }}>
          <Image
            src={country.flags.svg}
            alt={`Flag of ${country.name.common}`}
            width={150}
            height={100}
            style={{ objectFit: "cover" }}
            placeholder="blur"
            blurDataURL={country.flags.svg}
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {country.name.common}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Capital: {country.capital?.[0] || "N/A"}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Population: {country.population.toLocaleString()}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Region: {country.region}
            </Typography>
          </CardContent>
        </div>
      </Card>
    </Link>
  );
};

export default CountryCard;

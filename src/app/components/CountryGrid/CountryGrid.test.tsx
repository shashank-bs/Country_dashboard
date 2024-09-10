import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import CountryGrid from "./CountryGrid";
import { Country } from "../../types/Country";

describe("CountryGrid Component", () => {
  const mockCountries: Country[] = [
    {
      name: {
        common: "United States",
        official: "United States of America",
      },
      flags: { svg: "https://example.com/flag-us.svg" },
      capital: ["Washington, D.C."],
      population: 331000000,
      region: "Americas",
      currencies: {},
      languages: {},
      timezones: [],
      cca2: "US",
    },
    {
      name: {
        common: "Canada",
        official: "Canada",
      },
      flags: { svg: "https://example.com/flag-ca.svg" },
      capital: ["Ottawa"],
      population: 37742154,
      region: "Americas",
      currencies: {},
      languages: {},
      timezones: [],
      cca2: "CA",
    },
  ];

  test("renders without crashing", () => {
    render(<CountryGrid countries={mockCountries} />);
  });

  test("renders correct number of CountryCard components", () => {
    const { getAllByTestId } = render(
      <CountryGrid countries={mockCountries} />
    );
    expect(getAllByTestId("country-card").length).toBe(mockCountries.length);
  });

  test("renders country names correctly", () => {
    const { getByText } = render(<CountryGrid countries={mockCountries} />);
    mockCountries.forEach((country) => {
      expect(getByText(country.name.common)).toBeInTheDocument();
    });
  });

  test("renders country flags correctly", () => {
    const { getByAltText } = render(<CountryGrid countries={mockCountries} />);
    mockCountries.forEach((country) => {
      expect(
        getByAltText(`Flag of ${country.name.common}`)
      ).toBeInTheDocument();
    });
  });
  test("matches snapshot", () => {
    const { asFragment } = render(<CountryGrid countries={mockCountries} />);
    expect(asFragment()).toMatchSnapshot();
  });
});

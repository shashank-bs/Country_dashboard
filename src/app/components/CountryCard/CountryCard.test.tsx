import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import CountryCard from "./CountryCard";
import { Country } from "../../types/Country";

describe("CountryCard Component", () => {
  const mockCountry: Country = {
    name: {
      common: "United States",
      official: "",
    },
    flags: { svg: "https://example.com/flag.svg" },
    capital: ["Washington, D.C."],
    population: 331000000,
    region: "Americas",
    currencies: {},
    languages: {},
    timezones: [],
    cca2: "",
  };

  test("renders country name correctly", () => {
    const { getByText } = render(<CountryCard country={mockCountry} />);
    expect(getByText("United States")).toBeInTheDocument();
  });

  test("renders country capital correctly", () => {
    const { getByText } = render(<CountryCard country={mockCountry} />);
    expect(getByText("Capital: Washington, D.C.")).toBeInTheDocument();
  });

  test("renders country region correctly", () => {
    const { getByText } = render(<CountryCard country={mockCountry} />);
    expect(getByText("Region: Americas")).toBeInTheDocument();
  });

  test("renders country flag correctly", () => {
    const { getByAltText } = render(<CountryCard country={mockCountry} />);
    expect(getByAltText("Flag of United States")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<CountryCard country={mockCountry} />);
    expect(asFragment()).toMatchSnapshot();
  });
});

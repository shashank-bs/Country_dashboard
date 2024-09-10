// app/components/CountryDetail.test.tsx
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import CountryDetail from "./CountryDetail";
import { Country } from "../../types/Country";

describe("CountryDetail Component", () => {
  const mockCountry: Country = {
    name: {
      common: "United States",
      official: "",
    },
    flags: { svg: "https://example.com/flag.svg" },
    capital: ["Washington, D.C."],
    population: 331000000,
    region: "Americas",
    currencies: {
      USD: { name: "United States dollar" },
    },
    languages: {
      eng: "English",
    },
    timezones: ["UTC-05:00"],
    cca2: "",
  };

  test("renders country name correctly", () => {
    const { getByText } = render(<CountryDetail country={mockCountry} />);
    expect(getByText("United States")).toBeInTheDocument();
  });

  test("renders country capital correctly", () => {
    const { getByText } = render(<CountryDetail country={mockCountry} />);
    expect(getByText("Capital: Washington, D.C.")).toBeInTheDocument();
  });

  test("renders country region correctly", () => {
    const { getByText } = render(<CountryDetail country={mockCountry} />);
    expect(getByText("Region: Americas")).toBeInTheDocument();
  });

  test("renders country timezones correctly", () => {
    const { getByText } = render(<CountryDetail country={mockCountry} />);
    expect(getByText("Timezones: UTC-05:00")).toBeInTheDocument();
  });

  test("renders country languages correctly", () => {
    const { getByText } = render(<CountryDetail country={mockCountry} />);
    expect(getByText("Languages: English")).toBeInTheDocument();
  });

  test("renders country currencies correctly", () => {
    const { getByText } = render(<CountryDetail country={mockCountry} />);
    expect(getByText("Currencies: United States dollar")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<CountryDetail country={mockCountry} />);
    expect(asFragment()).toMatchSnapshot();
  });
});

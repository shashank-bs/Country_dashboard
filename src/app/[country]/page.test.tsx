// src/app/[country]/page.test.tsx
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useParams } from "next/navigation";
import CountryPage from "./page";
import useCountries from "../hooks/useCountries";
import { Country } from "../types/Country";

// Mock the useParams hook
jest.mock("next/navigation", () => ({
  useParams: jest.fn(),
}));

// Mock the useCountries hook
jest.mock("../hooks/useCountries", () => ({
  __esModule: true,
  default: jest.fn(),
}));

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

describe("CountryPage Component", () => {
  beforeEach(() => {
    (useParams as jest.Mock).mockReturnValue({ country: "United States" });
  });

  test("displays loading state initially", () => {
    (useCountries as jest.Mock).mockReturnValue({
      countries: [],
      loading: true,
    });
    render(<CountryPage />);
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  test("displays 'Country not found' when country is not found", () => {
    (useCountries as jest.Mock).mockReturnValue({
      countries: [],
      loading: false,
    });
    render(<CountryPage />);
    expect(screen.getByText("Country not found")).toBeInTheDocument();
  });

  test("displays country details when country is found", () => {
    (useCountries as jest.Mock).mockReturnValue({
      countries: [mockCountry],
      loading: false,
    });
    render(<CountryPage />);
    expect(screen.getByText("United States")).toBeInTheDocument();
  });

  test("displays country details when country is found", () => {
    (useCountries as jest.Mock).mockReturnValue({
      countries: [mockCountry],
      loading: false,
    });
    render(<CountryPage />);
    expect(screen.getByText("United States")).toBeInTheDocument();
  });

  test("matches snapshot when loading", () => {
    (useCountries as jest.Mock).mockReturnValue({
      countries: [],
      loading: true,
    });
    const { asFragment } = render(<CountryPage />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("matches snapshot when country is not found", () => {
    (useCountries as jest.Mock).mockReturnValue({
      countries: [],
      loading: false,
    });
    const { asFragment } = render(<CountryPage />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("matches snapshot when country is found", () => {
    (useCountries as jest.Mock).mockReturnValue({
      countries: [mockCountry],
      loading: false,
    });
    const { asFragment } = render(<CountryPage />);
    expect(asFragment()).toMatchSnapshot();
  });
});

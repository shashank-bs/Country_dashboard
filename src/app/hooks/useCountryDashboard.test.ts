import useCountryDashboard from "./useCountryDashboard";
import useCountries from "./useCountries";
import { Country } from "../types/Country";
import { renderHook, act } from "@testing-library/react";

jest.mock("./useCountries");

const mockCountries: Country[] = [
  {
    name: {
      common: "Canada",
      official: "Canada",
    },
    population: 37742154,
    region: "Americas",
    capital: ["Ottawa"],
    flags: {
      svg: "https://restcountries.com/v3.1/flags/can.svg",
    },
    currencies: {
      CAD: { name: "Canadian dollar" },
    },
    languages: {
      eng: "English",
      fra: "French",
    },
    timezones: ["UTC-08:00", "UTC-07:00", "UTC-06:00", "UTC-05:00"],
    cca2: "CA",
  },
  {
    name: {
      common: "Germany",
      official: "Federal Republic of Germany",
    },
    population: 83240525,
    region: "Europe",
    capital: ["Berlin"],
    flags: {
      svg: "https://restcountries.com/v3.1/flags/deu.svg",
    },
    currencies: {
      EUR: { name: "Euro" },
    },
    languages: {
      deu: "German",
    },
    timezones: ["UTC+01:00"],
    cca2: "DE",
  },
  {
    name: {
      common: "Japan",
      official: "Japan",
    },
    population: 126476461,
    region: "Asia",
    capital: ["Tokyo"],
    flags: {
      svg: "https://restcountries.com/v3.1/flags/jpn.svg",
    },
    currencies: {
      JPY: { name: "Japanese yen" },
    },
    languages: {
      jpn: "Japanese",
    },
    timezones: ["UTC+09:00"],
    cca2: "JP",
  },
];

describe("useCountryDashboard", () => {
  beforeEach(() => {
    (useCountries as jest.Mock).mockReturnValue({
      countries: mockCountries,
      loading: false,
      error: null,
    });
  });

  it("should initialize with default values", () => {
    const { result } = renderHook(() => useCountryDashboard());

    expect(result.current.page).toBe(1);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(null);
    expect(result.current.displayedCountries).toEqual(mockCountries);
    expect(result.current.searchQuery).toBe("");
    expect(result.current.hasMore).toBe(false);
  });

  it("should not load more countries on page change", () => {
    const { result } = renderHook(() => useCountryDashboard());

    act(() => {
      result.current.setPage(2);
    });

    expect(result.current.displayedCountries.length).toEqual(mockCountries.length);
    expect(result.current.hasMore).toBe(false);
  });

  it("should handle search correctly", () => {
    const { result } = renderHook(() => useCountryDashboard());

    act(() => {
      result.current.handleSearch({
        target: { value: "Canada" },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.searchQuery).toBe("Canada");
    expect(result.current.displayedCountries).toEqual([mockCountries[0]]);
  });

  it("should handle sort correctly", () => {
    const { result } = renderHook(() => useCountryDashboard());

    act(() => {
      result.current.handleSort("asc");
    });

    expect(result.current.displayedCountries[0].name.common).toBe("Canada");

    act(() => {
      result.current.handleSort("desc");
    });

    expect(result.current.displayedCountries[0].name.common).toBe("Japan");
  });
});

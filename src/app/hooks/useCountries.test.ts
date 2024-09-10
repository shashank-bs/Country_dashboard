import { renderHook, waitFor } from "@testing-library/react";
import axios from "axios";
import useCountries from "./useCountries";

jest.mock("axios");

describe("useCountries", () => {
  it("should fetch countries successfully", async () => {
    const mockCountries = [{ name: "Country1" }, { name: "Country2" }];
    (axios.get as jest.Mock).mockResolvedValue({ data: mockCountries });

    const { result } = renderHook(() => useCountries());

    expect(result.current.loading).toBe(true);

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.countries).toEqual(mockCountries);
    expect(result.current.error).toBeNull();
  });

  it("should handle fetch countries error", async () => {
    (axios.get as jest.Mock).mockRejectedValue(
      new Error("Failed to fetch countries")
    );

    const { result } = renderHook(() => useCountries());

    expect(result.current.loading).toBe(true);

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.countries).toEqual([]);
    expect(result.current.error).toBe("Failed to fetch countries");
  });
});

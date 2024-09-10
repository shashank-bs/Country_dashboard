export interface Country {
    name: {
      common: string;
      official:string;
    };
    population: number;
    region: string;
    capital: string[];
    flags: {
      svg: string;
    };
    currencies: Record<string, { name: string }>;
    languages: Record<string, string>;
    timezones: string[];
    cca2:string;
  }
  
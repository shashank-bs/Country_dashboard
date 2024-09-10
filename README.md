 

Country Dashboard
=================

This project is a Country Dashboard application built with React, Next.js, and TypeScript. It allows users to search, sort, and paginate through a list of countries.

Application can be Viewed at [https://country-dashboard-sigma.vercel.app/](https://country-dashboard-sigma.vercel.app/)

Table of Contents
-----------------

*   [Setup Instructions](#setup-instructions)
*   [Folder Structure](#folder-structure)
*   [Component Details](#component-details)
*   [Testing Information](#testing-information)

Setup Instructions
------------------

### Prerequisites

*   Node.js (>= 14.x)
*   npm (>= 6.x) or yarn (>= 1.x)

### Installation

1.  Clone the repository:
    
        git clone https://github.com/shashank-bs/Country_dashboard.git
        cd Country_dashboard
    
2.  Install dependencies:
    
        npm install
        # or
        yarn install
    
3.  Run the development server:
    
        npm run dev
        # or
        yarn dev
    
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
    

### Build for Production

To create an optimized production build:

    npm run build
    # or
    yarn build

### Linting

To run the linter:

    npm run lint
    # or
    yarn lint

Folder Structure
----------------

    .
    ├── .eslintrc.json
    ├── .gitignore
    ├── .next/
    ├── .swc/
    ├── coverage/
    ├── jest.config.js
    ├── jest.setup.js
    ├── next-env.d.ts
    ├── next.config.mjs
    ├── package.json
    ├── postcss.config.mjs
    ├── README.md
    ├── src/
    │   ├── app/
    │   │   ├── components/
    │   │   │   ├── CountryCard/
    │   │   │   │   ├── CountryCard.tsx
    │   │   │   │   ├── CountryCard.test.tsx
    │   │   │   ├── CountryDetail/
    │   │   │   │   ├── CountryDetail.tsx
    │   │   │   │   ├── CountryDetail.test.tsx
    │   │   │   ├── CountryGrid/
    │   │   │   │   ├── CountryGrid.tsx
    │   │   │   │   ├── CountryGrid.test.tsx
    │   │   │   └── index.ts
    │   │   ├── [country]/
    │   │   │   ├── page.tsx
    │   │   │   └── useCountryDashboard.test.tsx
    │   │   ├── hooks/
    │   │   │   ├── useCountryDashboard.ts
    │   │   │   └── useCountryDashboard.test.ts
    │   │   │   ├── useCountryCountries.ts
    │   │   │   └── useCountryCountries.test.ts
    │   │   ├── page.tsx
    │   │   ├── layout.tsx
    │   │   ├── global.css
    │   │   ├── types/
    │   │   │   └── Country.ts
    │   │   └── utils/
    │           └── countriesUtils.ts
    ├── tailwind.config.ts
    └── tsconfig.json
    

Component Details
-----------------

### [src/app/components/CountryCard/CountryCard.tsx](src/app/components/CountryCard/CountryCard.tsx)

This component displays the details of a single country, including its name, population, region, and flag.

### [src/app/components/CountryGrid/CountryGrid.tsx](src/app/components/CountryGrid/CountryGrid.tsx)

This component is responsible for displaying a grid of `CountryCard` components.

### [src/app/components/CountryDetail/CountryDetail.tsx](src/app/components/CountryDetail/CountryDetail.tsx)

This component provides a detail info on Country

### [src/app/hooks/useCountries.ts](src/app/hooks/useCountries.ts)

This custom hook manages the api call to get countries.

### [src/app/hooks/useCountryDashboard.ts](src/app/hooks/useCountryDashboard.ts)

This custom hook manages the state and logic for the Country Dashboard, including fetching countries, handling search, sorting, and pagination.

### [src/app/page.tsx](src/app/page.tsx)

This is the main page component that uses the `useCountryDashboard` hook to display the country dashboard. It includes search and sort functionality and uses `InfiniteScroll` for pagination.

### [src/utils/countriesUtils.ts](src/utils/countriesUtils.ts)

This utility file contains functions for sorting and searching countries by name or capital.

Testing Information
-------------------

### Running Tests

To run the tests:

    npm test
    # or
    yarn test

### Test Configuration

The test configuration is set up using Jest with the following configuration in [jest.config.js](jest.config.js):

    const nextJest = require("next/jest");
    
    const createJestConfig = nextJest({
      dir: "./",
    });
    
    const config = {
      coverageProvider: "v8",
      testEnvironment: "jsdom",
      setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
      preset: "ts-jest",
    };
    
    module.exports = createJestConfig(config);

License
-------

This project is licensed under the MIT License.
import { useState } from "react";
import "./index.css";

const countries = [
  {
    name: "India",
    value: "IN",
    cities: ["Delhi", "Mumbai", "Chennai", "Kolkata"],
  },
  {
    name: "Austria",
    value: "AUS",
    cities: ["Sydney", "Melbourne", "Brisbane", "Perth"],
  },
  {
    name: "USA",
    value: "US",
    cities: ["New York", "Los Angeles", "Chicago", "Houston"],
  },
];

const Assignment1 = () => {
  const [currentCountry, setCurrentCountry] = useState<string>(
    countries[0].value
  );

  const country =
    countries.find((country) => country.value === currentCountry) ||
    countries[0];

  return (
    <div className="container">
      Country:
      <select
        data-testid="change-country"
        value={currentCountry}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          setCurrentCountry(e.target.value)
        }
      >
        {countries.map((country) => (
          <option key={country.name} value={country.value}>
            {country.name}
          </option>
        ))}
      </select>
      <br />
      Cities:
      <select data-testid="change-city">
        {country.cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Assignment1;

import React, { useContext } from "react";
import AddressContext from "../providers/AddressContext";
import { iso3166 } from "../../data/iso3166";

interface SelectProps {
    autoFocus: boolean;
}

const sortedCountries = iso3166.sort((x, y) => {
    if (x.name > y.name) {
        return 1;
    }
    if (y.name > x.name) {
        return -1;
    }
    return 0;
});

const CountryDropdown = (): JSX.Element => {
    const locale = useContext(AddressContext);

    const countries = sortedCountries.map(country => (
        <option key={country.alpha2}>{country.name}</option>
    ));

    return <select>{countries}</select>;
};

export default CountryDropdown;

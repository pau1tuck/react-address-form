import React, { useContext } from "react";
import AddressContext from "../providers/AddressContext";

interface SelectProps {
    autoFocus: boolean;
}

const CountryDropdown = ({ autoFocus }: SelectProps): JSX.Element => {
    const locale = useContext(AddressContext);
    return (
        <select>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
        </select>
    );
};

export default CountryDropdown;

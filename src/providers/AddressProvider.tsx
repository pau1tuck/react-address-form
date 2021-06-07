import React, { createContext } from "react";

const { Provider } = createContext({});

const locales = {
    AD: "",
    AE: "",
    AF: "",
};

export const AddressProvider = () => {
    <Provider value={locales}></Provider>;
};

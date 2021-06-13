import React, { createContext } from "react";
import AddressContext from "./AddressContext";

type Props = {
    locale: any;
};

const AddressProvider: React.FC<Props> = (locale: any, children: any) => {
    return (
        <AddressContext.Provider value={locale}>
            {children}
        </AddressContext.Provider>
    );
};

export default AddressProvider;

import React, { createContext } from "react";

type Props = {
    locale: any;
};

const { Provider } = createContext({});

const AddressProvider: React.FC<Props> = (locale: any, children: any) => {
    return <Provider value={locale}>{children}</Provider>;
};

export default AddressProvider;

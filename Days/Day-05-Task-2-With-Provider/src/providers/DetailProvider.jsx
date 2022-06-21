import React, { useState, createContext } from "react";

export const DetailContext = createContext();

export default function DetailProvider({ children }) {
    const [userDetails, setUserDetails] = useState(null);
    return <DetailContext.Provider value={{ userDetails, setUserDetails }}>
        {children}
    </DetailContext.Provider>
}
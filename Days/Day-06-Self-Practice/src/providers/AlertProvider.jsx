import React, { useState, createContext } from "react";

export const AlertContext = createContext();

export default function AlertProvider({ children }) {
    const
        [alert, setAlert] = useState({ showAlert: false, message: '' })
    return <AlertContext.Provider value={{ alert, setAlert }}>
        {children}
    </AlertContext.Provider>
}
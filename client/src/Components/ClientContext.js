import React, { createContext, useState } from 'react';

export const ClientContext = createContext();

export function ClientProvider({ children }) {
  const [clients, setClients] = useState([]);

  return (
    <ClientContext.Provider value={{ clients, setClients }}>
      {children}
    </ClientContext.Provider>
  );
}

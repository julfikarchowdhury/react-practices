import { createContext } from "react";

export const Context = createContext();
export const ContextProvider = ({ children }) => {
  const user = {
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
    age: 30,
    address: {
      street: "123 Main St",
      city: "Springfield",
      state: "IL",
      country: "USA",
    },
    hobbies: ["reading", "gaming", "traveling"],
  };

  return <Context.Provider value={user}>{children}</Context.Provider>;
};

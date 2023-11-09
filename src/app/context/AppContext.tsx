import { PropsWithChildren, createContext, useContext, useState } from "react";

import useLocalStorage from "../hooks/useLocalStorage";

type AppContextProviderProps = object;

type AppContextType = AppContextProviderProps & {
  isOpenFilter: boolean;
  setOpenFilter: (val: boolean) => void;
  handleTheme: () => void;
  theme: string;
};

const AppContext = createContext({} as AppContextType);

function AppContextProvider({
  children,
  ...props
}: PropsWithChildren<AppContextProviderProps>) {
  const [isOpenFilter, setOpenFilter] = useState(true);

  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <AppContext.Provider
      value={{
        ...props,
        isOpenFilter,
        setOpenFilter,
        handleTheme,
        theme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

function useAppContext() {
  return useContext(AppContext);
}

// eslint-disable-next-line react-refresh/only-export-components
export { useAppContext };

export default AppContextProvider;

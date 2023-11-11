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
  const checkTheme = () => {
    if (typeof window === "undefined") return false;
    const prefersDark =
      typeof window !== "undefined"
        ? localStorage.theme === "dark" ||
          (!("theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
        : true;
    if (prefersDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    return prefersDark;
  };
  const [theme, setTheme] = useLocalStorage<string>(
    "theme",
    "light"
  );
  console.log(theme);
  
  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
    setTimeout(() => {
      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }, 200);
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

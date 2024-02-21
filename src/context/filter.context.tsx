import { createContext, ReactNode, useContext, useMemo, useState } from "react";

interface FilterContextData {

}

const FilterContext = createContext<FilterContextData>({} as FilterContextData);

interface FilterProviderProps {
  children: ReactNode;
}

export function FilterProvider({ children }: Readonly<FilterProviderProps>): JSX.Element {
  const [user, setUser] = useState<any>();

  const contextValue = useMemo(() => {
    return { user, setUser };
  }, [user]);

  return (
    <FilterContext.Provider value={contextValue}>{children}</FilterContext.Provider>
  );
}

export function useFilter() {
  const context = useContext(FilterContext);
  return context;
}

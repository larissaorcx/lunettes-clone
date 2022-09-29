import { createContext, ReactNode, useContext, useState } from 'react';
import { useTheme } from 'styled-components';

interface ScrollPageProps {
  children: ReactNode;
}

interface ScrollContextData {
  openMenu: boolean | null;
  setOpenMenu: (arg0: boolean) => void;
  openBag: boolean | null;
  setOpenBag: (arg0: boolean) => void;
}

const ScrollContext = createContext<ScrollContextData>({} as ScrollContextData);

export default function PScrollPage({ children }: ScrollPageProps) {
  const [openMenu, setOpenMenu] = useState<boolean | null>(null);
  const [openBag, setOpenBag] = useState<boolean | null>(null);

  return (
    <ScrollContext.Provider
      value={{
        openMenu,
        setOpenMenu,
        openBag,
        setOpenBag,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
}

export function useScroll(): ScrollContextData {
  const context = useContext(ScrollContext);

  return context;
}

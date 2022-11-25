import { createContext, ReactNode, useContext, useState } from 'react';
import { ProductProps } from '../../pages/produtos/[slug]';
import { Colorproducts } from '../Filters/Color/ColorFilter';
import { ProdDetalhe } from '../ListProducts';

interface FilterProviderProps {
  children: ReactNode;
}

interface FilterContextData {
  setProdutoFiltered: (produtos: ProdDetalhe[]) => void;
  filterColor: (color: string) => void;
  setBackupProd: (produtos: ProdDetalhe[]) => void;
  produtoFiltered: ProdDetalhe[];
  filterModel: (model: string) => void;
  filterPrice: (price: number) => void;
  activeFilters: any[];
  setActiveFilters: (arg: any[]) => void;
}

const FilterContext = createContext<FilterContextData>({} as FilterContextData);

export default function FilterProvider({
  children,
}: // products,
FilterProviderProps) {
  const [produtoFiltered, setProdutoFiltered] = useState<ProdDetalhe[]>([]);
  const [backupProd, setBackupProd] = useState<ProdDetalhe[]>([]);
  const [activeFilters, setActiveFilters] = useState<any[]>([]);

  console.log('estadodos filtrados', activeFilters);

  const filterColor = (color: string) => {
    let filteredByColor: string[] = [...activeFilters];

    const sameColor = backupProd.filter(prod =>
      Boolean(prod.images.find(colors => colors.colorname === color))
    );

    if (sameColor) {
      setProdutoFiltered(sameColor);
    }

    filteredByColor.push(color);
    setActiveFilters(filteredByColor);
  };

  const filterModel = (model: string) => {
    let filteredByColor: string[] = [...activeFilters];

    const sameModel = backupProd.filter(prod =>
      Boolean(prod.subcategories.find(models => models === model))
    );

    if (sameModel) {
      setProdutoFiltered(sameModel);
    }

    filteredByColor.push(model);
    setActiveFilters(filteredByColor);
  };

  const filterPrice = (price: number) => {
    let filteredByColor: number[] = [...activeFilters];

    const samePrice = backupProd.filter(prod => prod.formatedPrice === price);

    if (samePrice) {
      setProdutoFiltered(samePrice);
    }

    filteredByColor.push(price);
    setActiveFilters(filteredByColor);
  };

  const removeFilters = (buttonSelect: boolean) => {
    let newActiveFiltered = [];
  };

  return (
    <FilterContext.Provider
      value={{
        setProdutoFiltered,
        filterColor,
        setBackupProd,
        produtoFiltered,
        filterModel,
        activeFilters,
        filterPrice,
        setActiveFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
export function useFilter(): FilterContextData {
  const context = useContext(FilterContext);

  return context;
}

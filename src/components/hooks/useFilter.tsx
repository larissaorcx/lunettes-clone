import { createContext, ReactNode, useContext, useState } from 'react';
import { prototype } from 'react-modal';
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
  removeAllFilters: () => void;
  removeFilters: (arg: any) => void;
}

const FilterContext = createContext<FilterContextData>({} as FilterContextData);

export default function FilterProvider({ children }: FilterProviderProps) {
  const [produtoFiltered, setProdutoFiltered] = useState<ProdDetalhe[]>([]);
  const [backupProd, setBackupProd] = useState<ProdDetalhe[]>([]);
  const [activeFilters, setActiveFilters] = useState<any[]>([]);
  console.log('prod filtrados', produtoFiltered);
  console.log('filtros act', activeFilters);

  const filterColor = (color: string) => {
    let filteredByColor: string[] = [...activeFilters];

    const sameColor = backupProd.filter(prod => {
      if (prod.images.find(colors => colors.colorname === color)) {
        if (produtoFiltered.find(produto => produto._id === prod._id)) {
          return false;
        } else {
          return true;
        }
      }
    });

    setProdutoFiltered([...produtoFiltered, ...sameColor]);

    filteredByColor.push(color);
    setActiveFilters(filteredByColor);
  };

  const filterModel = (model: string) => {
    let filteredByColor: string[] = [...activeFilters];

    const sameModel = backupProd.filter(prod => {
      if (prod.subcategories.find(models => models === model)) {
        if (produtoFiltered.find(produto => produto._id === prod._id)) {
          return false;
        } else {
          return true;
        }
      }
    });

    setProdutoFiltered([...produtoFiltered, ...sameModel]);

    filteredByColor.push(model);
    setActiveFilters(filteredByColor);
  };

  const filterPrice = (price: number) => {
    let filteredByColor: number[] = [...activeFilters];

    const samePrice = backupProd.filter(prod => {
      if (prod.formatedPrice === price) {
        if (produtoFiltered.find(produto => produto._id === prod._id)) {
          return false;
        } else {
          return true;
        }
      }
    });

    setProdutoFiltered([...produtoFiltered, ...samePrice]);

    filteredByColor.push(price);
    setActiveFilters(filteredByColor);
  };

  const removeFilters = (buttonSelect: any) => {
    let newActiveFilter: any[] = [...activeFilters];
    let newProdutoFiltered: ProdDetalhe[] = [...produtoFiltered];

    const sameFilter = newActiveFilter.findIndex(
      filter => filter === buttonSelect
    );

    const difProduct = newProdutoFiltered.filter(
      prod =>
        !Boolean(prod.images.find(color => color.colorname === buttonSelect)) &&
        !Boolean(prod.subcategories.find(model => model === buttonSelect)) &&
        Boolean(prod.price !== buttonSelect)
    );

    console.log('prod dif', difProduct);

    if (sameFilter !== -1) {
      newActiveFilter.splice(sameFilter, 1);
    }

    setProdutoFiltered(difProduct);
    setActiveFilters(newActiveFilter);
  };

  const removeAllFilters = () => {
    setActiveFilters([]);
    setProdutoFiltered([]);
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
        removeFilters,
        removeAllFilters,
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

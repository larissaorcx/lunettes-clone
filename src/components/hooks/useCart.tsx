import { createContext, ReactNode, useContext, useState } from 'react';
import { ProductProps } from '../../pages/produtos/[...slug]';
import mocklistProducts from '../ListProducts/mocklistProducts';

interface CartProviderProps {
  children: ReactNode;
}

type CartProps = {
  product: ProductProps;
  amount: number;
};

interface CartContextData {
  cart: CartProps[];
  addProduct: (product: ProductProps) => void;
  openBag: boolean;
  deleteProduct: (product: ProductProps) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export default function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartProps[]>([]);
  const [openBag, setOpenBag] = useState<boolean>(false);
  console.log(cart, 'carrinho');

  const addProduct = (product: ProductProps) => {
    let newCart: CartProps[] = [...cart];

    const productId = newCart.find(
      products => products.product._id === product._id
    );
    if (productId) {
      productId.amount += 1;
    } else {
      newCart.push({
        product,
        amount: 1,
      });
    }
    setCart(newCart);
    setOpenBag(true);
  };

  const deleteProduct = (product: ProductProps) => {
    let newCart: CartProps[] = [...cart];
    const remove = newCart.findIndex(
      products => products.product._id === product._id
    );
    if (remove !== -1) {
      newCart.splice(remove, 1);
    }
    setCart(newCart);
    setOpenBag(false);
  };

  return (
    <CartContext.Provider value={{ cart, addProduct, openBag, deleteProduct }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}

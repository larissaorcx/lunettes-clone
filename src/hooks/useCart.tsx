import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

import { ProductCardProps } from '../components/Detalhes/ButtonReserva/ButtonReserva';

import { useScroll } from './ProviderscrollPage';

interface CartProviderProps {
  children: ReactNode;
  openBag: boolean | null;
  setOpenBag: (arg0: boolean) => void;
}

type CartProps = {
  product: ProductCardProps;
};

type AmountCart = {
  productId: string;
  amount: number;
};

interface CartContextData {
  cart: CartProps[];
  addProduct: (productCart: ProductCardProps) => void;
  openBag: boolean | null;
  deleteProduct: (productId: String) => void;
  setOpenBag: (arg0: boolean) => void;
  amountBag: ({ productId, amount }: AmountCart) => void;
  setCart: (arg0: CartProps[]) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export default function CartProvider({
  children,
  openBag,
  setOpenBag,
}: CartProviderProps) {
  const [cart, setCart] = useState<CartProps[]>([]);

  const addProduct = (productCart: ProductCardProps) => {
    let newCart: CartProps[] = [...cart];

    const productId = newCart.find(
      products => products.product.id === productCart.id
    );
    if (!productId) {
      newCart.push({
        product: productCart,
      });
    }
    localStorage.setItem('cart', JSON.stringify(newCart));
    setCart(newCart);
    setOpenBag(true);
  };

  const deleteProduct = (productId: String) => {
    let newCart: CartProps[] = [...cart];
    const remove = newCart.findIndex(
      products => products.product.id === productId
    );
    if (remove !== -1) {
      newCart.splice(remove, 1);
    }
    localStorage.setItem('cart', JSON.stringify(newCart));
    setCart(newCart);

    if (newCart.length === 0) {
      setOpenBag(false);
    } else {
      setOpenBag(true);
    }
  };

  const amountBag = ({ productId, amount }: AmountCart) => {
    let newCart: CartProps[] = [...cart];

    const sameProduct = newCart.find(id => id.product.id === productId);

    if (sameProduct) {
      if (amount > 0) {
        sameProduct.product.amount = amount;
      }
    }
    localStorage.setItem('cart', JSON.stringify(newCart));
    setCart(newCart);
  };

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('cart') ?? '[]'));
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        addProduct,
        openBag,
        deleteProduct,
        setOpenBag,
        amountBag,
        setCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}

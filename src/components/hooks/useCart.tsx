import { createContext, ReactNode, useContext, useState } from 'react';
import { ProductProps } from '../../pages/produtos/[...slug]';
import { ProductCardProps } from '../Detalhes/ButtonReserva/ButtonReserva';
import mocklistProducts from '../ListProducts/mocklistProducts';

interface CartProviderProps {
  children: ReactNode;
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
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export default function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartProps[]>([]);
  const [openBag, setOpenBag] = useState<boolean | null>(null);

  console.log(cart, 'carrinho');

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
    console.log(sameProduct, 'sameProduct');

    if (sameProduct) {
      if (sameProduct.product.amount < amount) {
        sameProduct.product.amount += 1;
      } else {
        if (sameProduct.product.amount >= 2) {
          sameProduct.product.amount -= 1;
        }
      }
    }

    setCart(newCart);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addProduct,
        openBag,
        deleteProduct,
        setOpenBag,
        amountBag,
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
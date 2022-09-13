import { FaRegHeart, FaWhatsapp } from 'react-icons/fa';
import { BsFillHeartFill } from 'react-icons/bs';

import Link from 'next/link';
import {
  BotaoReservaSacola,
  BotaoReservaWhats,
  ContainerButton,
} from './style';
import { TextoBotao } from '../../Product/style';
import { useCart } from '../../hooks/useCart';
import { ProductDetalhesProps } from '../../../pages/detalhes/[slug]';
import { Colorproducts } from '../../Filters/Color/ColorFilter';

interface ButtonReservaProps {
  product: ProductDetalhesProps;
  contador: number;
}

export type ProductCardProps = {
  id: string;
  image: string;
  name: string;
  code: string;
  amount: number;
  price: number;
  discount: number;
  color: Colorproducts;
};

export default function ButtonReserva({
  product,
  contador,
}: ButtonReservaProps) {
  const productCart: ProductCardProps = {
    id: product._id,
    image: product.images[0].allImages.lg,
    color: product.images[1].color,
    name: product.productName,
    code: product.code,
    amount: contador,
    price: product.price,
    discount: product.discount,
  };

  const { addProduct, deleteProduct, cart } = useCart();

  const productInTheBag = cart.find(
    products => products.product.id === product._id
  );
  return (
    <ContainerButton>
      {productInTheBag ? (
        <BotaoReservaSacola
          type="button"
          onClick={() => deleteProduct(product._id)}
          productInBag
        >
          <BsFillHeartFill className="heart" />
          <TextoBotao>Na Sacola</TextoBotao>
        </BotaoReservaSacola>
      ) : (
        <>
          <BotaoReservaSacola
            type="button"
            onClick={() => addProduct(productCart)}
            productInBag={false}
          >
            <FaRegHeart />
            <TextoBotao>Por na sacola</TextoBotao>
          </BotaoReservaSacola>
          <Link
            href="https://api.whatsapp.com/send/?phone=5511947584716&text=Lunettes%2C+gostaria+de+ter+informa%C3%A7%C3%B5es+sobre+um+produto.+%0A+%0A1+unidade+do+%C3%B3culos+Dricc+na+cor%3A+Rosa.+%0A&type=phone_number&app_absent=0"
            passHref
          >
            <BotaoReservaWhats type="button">
              <FaWhatsapp />
              <TextoBotao>Comprar agora</TextoBotao>
            </BotaoReservaWhats>
          </Link>
        </>
      )}
    </ContainerButton>
  );
}

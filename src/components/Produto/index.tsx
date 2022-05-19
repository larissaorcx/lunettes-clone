// import { useState } from 'react';
// import Image from 'next/image';

// import {
//   InfosProduto,
//   NomeProduto,
//   ContainerPoduto,
//   CodigoProduto,
//   Preço,
//   BotaoReserva,
//   TextoBotao,
//   BotaoCores,
//   CoresContainer,
// } from './style';
// import { FaRegHeart } from 'react-icons/fa';

// type ImageProps = {
//   id: string;
//   url: string;
//   color?: {
//     name: string;
//     background: string;
//   };
// };

// export type Products = {
//   status: string;
//   isNewCollection: boolean;
//   images: ImageProps[];
//   _id: string;
//   code: string;
//   discount: number;
//   price: number;
//   productName: string;
//   createdAt: string;
//   __v: number;
// };

// type DestaquesProps = {
//   config: Products[];
// };

// export default function Produto({ config }: DestaquesProps) {
//   const [hover, setHover] = useState({ id1: { hover: false } });
//   const [click, setClick] = useState(false);
//   const [productID, setProductID] = useState(config.map(id => id._id));

//   function handleClickColor() {
//     setClick(!click);
//   }

//   function handleMouseOver() {
//     setProductID(config.map(id => id._id));
//     setClick(!click);
//   }
//   function handleMouseOut() {
//     setProductID(config.map(id => id._id));
//   }

//   return (
//     <ContainerPoduto>
//       <Image
//         alt="product"
//         src={
//           click
//             ? config.map(img => img.images[1].url)
//             : config.map(img => img.images[0].url)
//         }
//         width={360}
//         height={360}
//         onMouseOver={() => handleMouseOver()}
//         onMouseOut={() => handleMouseOut()}
//       />
//       <CoresContainer>
//         {config.map(
//           image =>
//             image.images.map(colors => colors.color?.background) && (
//               <BotaoCores
//                 type="button"
//                 color={image.images.map(colors => colors.color?.background)}
//                 onClick={() => handleClickColor()}
//                 click={click}
//               />
//             )
//         )}
//       </CoresContainer>
//       <InfosProduto>
//         <NomeProduto>{config.map(name => name.productName)}</NomeProduto>
//         <CodigoProduto>{config.map(code => code.code)}</CodigoProduto>
//       </InfosProduto>
//       <Preço>
//         {new Intl.NumberFormat('pt-BR', {
//           style: 'currency',
//           currency: 'BRL',
//         }).format(config.map(prices => prices.price))}
//       </Preço>
//       <BotaoReserva type="button">
//         <FaRegHeart />
//         <TextoBotao>Reservar</TextoBotao>
//       </BotaoReserva>
//     </ContainerPoduto>
//   );
// }

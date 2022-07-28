// import ColorFilter, { Colorproducts } from '../components/Filters/ColorFilter';
// import { ProductProps } from '../pages/produtos/grau';

// interface FilterProps {
//   products: ProductProps[];
// }

// export function Filter({ products }: FilterProps) {
//   let colors: Colorproducts[] = [];
//   let model: number = [];

//   products.forEach(product => {
//     const color = product.images
//       .filter(image => {
//         if (image.color.name !== 'NOTCOLOR') {
//           const existsColor = colors.find(
//             equal => equal.name === image.color.name
//           );
//           if (!existsColor) {
//             return true;
//           }
//         }
//       })
//       .map(arraycolor => arraycolor.color);

//     colors = [...colors, ...color];

//     const filterModel = product.category;
//     console.log('preço', filterModel);

//     // model = [...filterModel];
//   });

//   return colors;
// }

import ColorFilter, { Colorproducts } from '../components/Filters/ColorFilter';
import { ProductProps } from '../pages/produtos/grau';

interface FilterProps {
  products: ProductProps[];
}

export default function Filter({ products }: FilterProps) {
  let colors: Colorproducts[] = [];

  products.forEach(product => {
    const color = product.images
      .filter(image => {
        if (image.color.name !== 'NOTCOLOR') {
          const exists = colors.find(equal => equal.name === image.color.name);
          if (!exists) {
            return true;
          }
        }
      })
      .map(arraycolor => arraycolor.color);

    colors = [...colors, ...color];
  });

  return <ColorFilter colorproducts={colors} />;
}

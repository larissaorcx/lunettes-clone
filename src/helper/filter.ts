import { useState } from 'react';
import { Colorproducts } from '../components/Filters/Color/ColorFilter';
import { ProductProps } from '../pages/produtos/[slug]';

export interface FilterProps {
  products: ProductProps[];
}

export function filterColor({ products }: FilterProps) {
  let colors: Colorproducts[] = [];

  products.forEach(product => {
    const color = product.images
      .filter(image => {
        if (image.colorname !== 'NOTCOLOR') {
          return !Boolean(colors.find(equal => equal.name === image.colorname));
        }
      })
      .map(arraycolor => {
        return {
          name: arraycolor.colorname,
          background: arraycolor.backgroundcolor,
        };
      });

    colors = [...colors, ...color];
  });

  return colors;
}

export function filterModel({ products }: FilterProps) {
  let models: string[] = [];

  products.forEach(product => {
    const model = product.subcategories.filter(category => {
      return !Boolean(models.find(equal => equal === category));
    });

    models = [...models, ...model];
  });

  return models;
}

export function filterPrice({ products }: FilterProps) {
  let prices: number[] = [];

  products.forEach(product => {
    const value = product.price;
    const price = prices.find(price => price === value);
    if (!price) {
      new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(value);
      prices.push(value);
      prices.sort();
    }
  });

  return prices;
}

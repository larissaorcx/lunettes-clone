import React from 'react';
import { PrismicRichText, PrismicLink } from '@prismicio/react';

const Produto = ({ slice }) => (
  <section>
    {slice?.items?.map((item, i) => (
      <img
        key={i}
        className="image"
        src={item.images.url}
        alt={item.images.alt}
      />
    ))}
    {slice?.items?.map((item, i) => (
      <PrismicRichText key={i} field={item.name} />
    ))}
    {slice?.items?.map((item, i) => (
      <span key={i}>{item.colorprod}</span>
    ))}
    {slice?.items?.map((item, i) => (
      <PrismicRichText key={i} field={item.tagnovacolecao} />
    ))}
    {slice?.items?.map((item, i) => (
      <PrismicRichText key={i} field={item.price} />
    ))}
    {slice?.items?.map((item, i) => (
      <PrismicLink key={i} field={item.vermais}>
        My Link
      </PrismicLink>
    ))}

    <style jsx>{`
      section {
        max-width: 600px;
        margin: 4em auto;
        text-align: center;
      }
      .title {
        color: #8592e0;
      }
      .image {
        width: 100px;
        height: 100px;
      }
    `}</style>
  </section>
);

export default Produto;

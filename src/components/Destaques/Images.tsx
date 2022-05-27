import { BotaoCores, CoresContainer } from './style';

import Image from 'next/image';
import { ImageProps } from '.';
import { useState } from 'react';

type ImagesProps = {
  data: ImageProps[];
};

export default function Images({ data }: ImagesProps) {
  const [image, setImage] = useState(data[0].url);
  const [clickButton, setClickButton] = useState(false);

  return (
    <>
      <Image alt="product" src={image} width={360} height={360} />
      <CoresContainer>
        {data.map(
          image =>
            image.color?.background && (
              <BotaoCores
                key={image.id}
                type="button"
                color={image.color.background}
                clickButton={clickButton}
                onClick={() => {
                  setClickButton(!clickButton);
                  setImage(image.url);
                }}
              />
            )
        )}
      </CoresContainer>
    </>
  );
}

import ItemFilterModel from './ItemFilterModel';
import { Container } from './style';

export interface ModelFilterProps {
  products: string[];
  setOpenButton: (arg: boolean) => void;
}

export default function ModelFilter({
  products,
  setOpenButton,
}: ModelFilterProps) {
  return (
    <Container>
      {products.map(model => (
        <ItemFilterModel
          key={model}
          model={model}
          setOpenButton={setOpenButton}
        />
      ))}
    </Container>
  );
}

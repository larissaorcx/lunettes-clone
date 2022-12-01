import ItemFilterModel from './ItemFilterModel';
import { Container } from './style';

export interface ModelFilterProps {
  products: string[];
}

export default function ModelFilter({ products }: ModelFilterProps) {
  return (
    <Container>
      {products.map(model => (
        <ItemFilterModel key={model} model={model} />
      ))}
    </Container>
  );
}

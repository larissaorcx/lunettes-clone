import { useCart } from './hooks/useCart';

export default function ProviderscrollPage() {
  const { openBag } = useCart();

  return <h1>scroll</h1>;
}

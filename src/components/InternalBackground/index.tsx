import { HeaderType } from '../../pages/types';
import { Internalbg } from './style';

interface InternalBackgroundProps {
  background: HeaderType;
  height: string;
}

export default function InternalBackground({
  background,
  height,
}: InternalBackgroundProps) {
  return <Internalbg background={background} height={height} />;
}

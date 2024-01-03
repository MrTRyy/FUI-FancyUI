import { styled } from 'styled-components';

import { FancyImage } from '@/components/atoms/FancyImage';
import { TFancyImage } from '@/components/atoms/FancyImage/FancyImage.model';
import { TTheme } from '@/types/TTheme';
import { TComponentSizesExtended } from '@/types/TComponentSizes';

import IStyledPrefixAndPicker from '@/types/IStyledPrefixAndPicker';
import { TBorderRadiusSizes } from '@/types/TBorderRadiusSizes';
import { checkThemeValue } from '@/design/designFunctions/checkThemeValue';

type TCardImage = {
  size?: TComponentSizesExtended | 'complete';
  borderRadius?: string;
};
export default function CardImage(props: TCardImage & Omit<TFancyImage, 'borderRadius'>) {
  const { size, borderRadius, ...fancyImageProps } = props;

  return (
    <WarpperImage $size={size} $borderRadius={borderRadius}>
      <FancyImage {...fancyImageProps} />
    </WarpperImage>
  );
}

type TWrapperImage = IStyledPrefixAndPicker<TCardImage>;
const WarpperImage = styled.div<TWrapperImage & { theme: TTheme }>`
  box-sizing: border-box;

  img {
    width: 100%;
    border-radius: ${({ $borderRadius, theme }) =>
      checkThemeValue($borderRadius) ? theme.borderRadius[$borderRadius as TBorderRadiusSizes] : $borderRadius};
  }
`;

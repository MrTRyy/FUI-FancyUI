import { styled, css } from 'styled-components';

import { TStyleProps } from './TFancyFlexBox.model';
import { TStyledPrefixAndOmiter } from '@/types/TStyledPrefixAndOmiter';
import { getThemeOrValueAsCSS } from '@/design/designFunctions/getThemeOrValueAsCss';

const generateFlexSytles = (props: TStyledFlexBoxProps) => {
  const { $direction, $justify, $align, $gap } = props;

  return css`
    display: flex;
    width: 100%;
    flex-direction: ${$direction ?? 'row'};
    justify-content: ${$justify ?? 'flex-start'};
    align-items: ${$align ?? 'flex-start'};
    gap: ${getThemeOrValueAsCSS($gap, 'spacing')};
  `;
};

type TStyledFlexBoxProps = TStyledPrefixAndOmiter<TStyleProps>;
export const StyledFlexBox = styled.div<TStyledFlexBoxProps & { as: React.ElementType }>`
  padding: 0;
  margin: 0;
  ${(props: TStyledFlexBoxProps) => generateFlexSytles({ ...props })}
  ${({ $externalStyle }) => $externalStyle}
`;

import styled from 'styled-components';
import { getBackgroundColor, getTextColor } from '../../Design/color/colorCalculatorForComponet';
import { TUiColorsType } from '../../Design/color/designColor';
import { TLayer } from '../../Design/color/generateColorSteps';

type StyledMenuProps = {
  $themeType?: keyof TUiColorsType;
  $layer?: TLayer;
  theme: TUiColorsType;
  as?: 'a' | 'button';
};

export const MenuItem = styled.button<StyledMenuProps>`
  display: flex;
  box-sizing: border-box;
  padding: 10px 20px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  text-decoration: none;
  color: ${({ theme, $themeType }) =>
      getTextColor({ theme, $themeType: $themeType ?? 'secondary', $textLayer: 1 })};

  &:hover {
    background-color: ${({ theme, $themeType, $layer }) =>
      getBackgroundColor({ theme, $themeType: $themeType ?? 'primary', $layer: $layer ?? 3 })};
  }
`;

import { styled } from 'styled-components';
import { borderRadius, spacingPx } from '../../Design/design';
import { TUiColorsType } from '../../Design/color/designColor';

import { TLayer } from '../../Design/color/generateColorSteps';
import getColorsForComponent, { getBackgroundColor } from '../../Design/color/colorCalculatorForComponet';

export const DatePickerContainer = styled.div<{ theme: TUiColorsType; $themeType?: keyof TUiColorsType; $layer?: TLayer }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ theme, $themeType = 'primary', $layer = 1 }) => getColorsForComponent({ theme, $themeType, $layer })};
  border-radius: ${borderRadius.xl};
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
`;

export const WrapperYearSelector = styled.div`
  width: 100%;
  padding: ${spacingPx.md} ${spacingPx.md} ${spacingPx.md};
  box-sizing: border-box;
`;

export const WrapperWeekdays = styled.div<{ theme: TUiColorsType, $themeType?: keyof TUiColorsType  }>`
  width: 100%;
  border-bottom: solid 1px ${({ theme, $themeType = 'secondary'  }) => getBackgroundColor({ theme, $themeType })};
  padding-bottom: ${spacingPx.xxs};
`;

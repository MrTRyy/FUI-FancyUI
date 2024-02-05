import { styled } from 'styled-components';

import { TWeekDays } from '@/components/atoms/WeekDays/TWeekdays.model';
import { getBackgroundColor } from '@/design/designFunctions/colorCalculatorForComponent';
import IStyledPrefixAndPicker from '@/types/IStyledPrefixAndPicker';
import { TTheme } from '@/types/TTheme';

type TWeekdaysConatiner = IStyledPrefixAndPicker<TWeekDays, 'border' | 'layer' | 'themeType'>;
export const WeekdaysConatiner = styled.div<TWeekdaysConatiner & { theme: TTheme }>`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  width: 100%;

  color: ${({ theme, $themeType, $layer }) =>
    getBackgroundColor({ theme, $themeType: $themeType ?? 'secondary', $layer: $layer ?? 0 })};

  ${({ theme, $themeType = 'secondary', $border, $layer }) =>
    generateBorder({ theme, $themeType, $border, $layer: $layer ?? 0 })};

  & > * {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

// --------------------------------------------------------------------------- //
// ----------------------------- Helper Functions ---------------------------- //
// --------------------------------------------------------------------------- //
const generateBorder = (props: TWeekdaysConatiner & { theme: TTheme }) => {
  const { $border, $layer, theme } = props;
  if ($border === 'none') return;

  const borderColor = getBackgroundColor({ theme, $themeType: 'secondary', $layer: $layer });

  return `
    border-${$border ?? 'bottom'}: solid 1px ${borderColor};
    padding-${$border ?? 'bottom'}: ${theme.spacing.xs};
  `;
};

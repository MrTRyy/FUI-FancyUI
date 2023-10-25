import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';

import { spacingPx } from '../../Design/design';
import Typography from '../Typography/Typography';
import { TUiColorsType } from '../../Design/color/designColor';
import { TLayer } from '../../Design/color/generateColorSteps';
import { getBackgroundColor } from '../../Design/color/colorCalculatorForComponet';

const WeekdaysConatiner = styled.div<{ theme: TUiColorsType; $themeType?: keyof TUiColorsType; $layer?: TLayer }>`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  width: 100%;
  margin-bottom: ${spacingPx.xs};
  color: ${({ theme, $themeType, $layer }) => getBackgroundColor({ theme, $themeType: $themeType ?? 'secondary', $layer: $layer ?? 0 })};

  & > * {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
// --------------------------------------------------------------------------- //
// ---------- This Atom creates a List of all Weekdas from Mo - Su ----------- //
// --------------------------------------------------------------------------- //
interface IWeekDays {
  themeType?: keyof TUiColorsType;
  layer?: TLayer;
}
export default function WeekDays({ themeType, layer }: IWeekDays) {
  const [weekdays, setWeekdays] = useState<string[]>([]);

  useEffect(() => {
    const days = [];
    for (let i = 5; i <= 11; i++) {
      const day = new Date(1970, 0, i);
      days.push(day.toLocaleString(navigator.language, { weekday: 'short' }).slice(0, 2));
    }
    setWeekdays(days);
  }, []);

  return (
    <WeekdaysConatiner $themeType={themeType} $layer={layer}>
      {weekdays.map((day) => (
        <Typography type="label" key={day}>
          {day}
        </Typography>
      ))}
    </WeekdaysConatiner>
  );
}

import { css, styled } from "styled-components";
import RawInput, { IRawInput } from "../../Atoms/RawInput/RawInput";
import { getBackgroundColor } from "../../Design/color/colorCalculatorForComponet";
import { TUiColorsType } from "../../Design/color/designColor";
import { TLayer } from "../../Design/color/generateColorSteps";
import { IDateInputProps } from "../../Molecules/DateInput/DateInput";
import { simpleColorTransition } from "../../Design/simpleTransition";

interface IRawInputWrapper extends IRawInput {
  value?: string;
  $themeType?: keyof TUiColorsType;
  $layer?: TLayer;
}
export const StyledDatePicker = styled(RawInput)<IRawInputWrapper & IDateInputProps>`
  color: ${({ value }) => (value ? '' : 'transparent')};
  transition: color 0.3s ease-in;

  /* This renders a Placerholder in Text when its needed */
  ${({placeholder, $themeType = 'secondary', $layer = 4, value, theme, align, }) => {
    if(placeholder && !value) {
      return css`
        &:not(:focus):before {
          content: attr(placeholder);
          width: 100%;
          text-align: ${align};
          color: ${getBackgroundColor({ theme, $themeType, $layer })};
          position: absolute;
          transition: all 0.3s ease-in-out;
          pointer-events: none;
        }
      `
    }
  }}

  /* This renders the calendar Icon with the color theme */
  &::-webkit-calendar-picker-indicator {
    ${simpleColorTransition}

    ${({ theme, $themeType = 'secondary', $layer = 4 }) =>
      css`
        background-image: ${`url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 24 24"><path fill="${getBackgroundColor(
          { theme, $themeType, $layer }
        ).replace(
          '#',
          '%23'
        )}" d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"/></svg>')`};
      `};
  }
`;
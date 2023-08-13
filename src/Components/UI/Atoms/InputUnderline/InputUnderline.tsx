import React from 'react';
import styled, { css } from 'styled-components';

import { colorPalet, uiColors } from '../../Design/design';
import IStyledPrefixAndPicker from '../../Interface/IStyledPrefixAndPicker.model';

// Define the styled component for the underline
type IStyledUnderline = IStyledPrefixAndPicker<IFancyUnderline>;
const UnderLine = styled.i<IStyledUnderline>`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  border-radius: 5px;
  background: ${uiColors.secondary.darkest};
  overflow: hidden;
  width: 100%;

  // Define the styles for the gradient overlay
  &::before {
    content: '';
    width: 100%;
    border-radius: 5px;
    position: absolute;
    left: 0;
    bottom: 0;
    opacity: ${({ $colorState }) => ($colorState === 'default' ? '0' : '1')};
    height: 100%;
    background: ${({ $colorState }) => {
      switch ($colorState) {
        case 'active':
          return css`linear-gradient(90deg, ${uiColors.accent.main}, ${uiColors.accent.light})`;
        case 'error':
          return css`linear-gradient(90deg, ${colorPalet.red_dark}, ${colorPalet.red_light})`;
        default:
          return 'transparent';
      }
    }};

    // Define the transition styles for the gradient overlay
    transition: 0.25s;
    transition-timing-function: cubic-bezier(0.46, 0.03, 0.52, 0.96);
  }
`;

// Define the props for the FancyInputUnderline component
interface IFancyUnderline {
  colorState?: 'error' | 'active' | 'default';
  autoWidth?: boolean;
}
// --------------------------------------------------------------------------- //
// --------- The underline for the input components with state style --------- //
// --------------------------------------------------------------------------- //
export default function FancyInputUnderline(props: IFancyUnderline) {
  const { colorState = 'default', autoWidth } = props;

  // Render the FancyInputUnderline component with the appropriate props
  return <UnderLine $colorState={colorState} $autoWidth={autoWidth} />;
}
import styled, { css } from 'styled-components';
import { colorPalet, uiColors } from '../../Design/design';
import { alignHandler } from '../../HelperFunctions/designFunctions/alignmentHandler';

import InputLabel from '../InputLabel/InputLabel';

//the animated label is for the inputs where the Placholder is the label
export const AnimatedInputLabel = styled(InputLabel)<{ $align?: string; $disabledAndSelected?: boolean }>`
  position: absolute;
  padding: 12px 0 5px;
  ${({ $align, $disabledAndSelected }) => alignHandler($align!, 'LabelInput', $disabledAndSelected)};
`;

export const AnimatedLabelFocusStyle = ($align?: 'center' | 'left', $errorMessage?: string) => {
  const isErrorMessage = $errorMessage ? colorPalet.red_dark : uiColors.accent.main;
  const alignStyle = $align !== 'center' ? 'translateY(-20px)' : 'translateY(-20px) translate(-50%)';

  //the focus animation for the Label
  return css`
    &:focus ~ ${AnimatedInputLabel}, &:valid ~ ${AnimatedInputLabel} {
      color: ${isErrorMessage};
      transform: ${alignStyle};
      font-weight: 600;
    }
  `;
};

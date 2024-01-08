import { styled } from 'styled-components';

import InputLabel from '../InputLabel/InputLabel';
import { IAlignedInputLabel } from './TalignedInputLabel.model';

//the aligned label is only with align left or centerd {align?: string; active?: boolean}

export const AlignedInputLabel = styled(InputLabel)<IAlignedInputLabel>`
  display: flex;
  align-items: flex-end;
  margin-bottom: ${({ theme }) => theme.spacing.xxs};
  justify-content: ${({ $align }) => ($align === 'left' ? 'flex-start' : $align === 'center' ? 'center' : 'flex-end')};
`;
/* color: ${({ $colorState, theme, $themeType = 'secondary', $layer = 4 }) => {
  switch ($colorState) {
    case 'error':
      return theme.colors.error[0];
    case 'active':
      return theme.colors.accent[0];
    case 'success':
      return theme.colors.success[0];
    case 'warning':
      return theme.colors.warning[0];
    case 'info':
      return theme.colors.info[0];
    default:
      return getTextColor({ theme, $themeType, $textLayer: $layer });
  }
}}; */

export default AlignedInputLabel;

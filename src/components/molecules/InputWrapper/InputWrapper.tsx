import { useEffect, useState } from 'react';

import { calcColorState } from '@/design/designFunctions/calcColorState';

import { AnimatedInputLabel } from '@/components/atoms/AnimatedInputLabel';
import { FancySVGAtom } from '@/components/atoms/FancySVGAtom';
import { InputUnderline } from '@/components/atoms/InputUnderline';

import { IInputWrapper } from './IInputWrapper.model';
import {
  InputContainer,
  StyledInputWrapper,
  SystemMessageWrapper,
  iconStyle,
  WrapperInput,
} from './InputWrapper.style';
import SystemMessage from '@/components/atoms/SystemMessage/SystemMessage';

// --------------------------------------------------------------------------- //
// ------ The Wrapper for the inputs that give him some extra features  ------ //
// ------------------ like a Label icon errormessage ------------------------- //
export default function InputWrapper(props: IInputWrapper) {
  const {
    id,
    value,
    isActive,
    disabled,
    InputElement,
    systemMessage,
    icon,
    label,
    align,
    underline = true,
    autoWidth,
    placeholder,
    layer = 4,
    themeType = 'secondary',
  } = props;
  const [isInitial, setIsInitial] = useState(false);

  const labelShouldMoveUp =
    !!((isInitial && value === 0 ? undefined : value) || (isInitial && value === 0)) || isActive || !!placeholder;

  // Calculate the color state for the label and underline
  const colorStateLabel = calcColorState({
    type: 'text',
    isActive,
    systemMessage: systemMessage?.type,
    value,
    placeholder,
  });

  const colorStateUnderline = calcColorState({
    type: 'item',
    isActive,
    systemMessage: systemMessage?.type,
    value,
    placeholder,
  });

  // Set the initial state of the input field
  useEffect(() => {
    if (isActive) setIsInitial(true);
  }, [isActive]);

  // Render the InputWrapper component with the appropriate props
  return (
    <StyledInputWrapper disabled={disabled} $autoWidth={autoWidth}>
      {icon && (
        <FancySVGAtom
          themeType={themeType}
          layer={layer}
          isPassive={false}
          externalStyle={iconStyle}
          size="xs"
          isActive={isActive}
        >
          {icon}
        </FancySVGAtom>
      )}
      <InputContainer $givePadding={Boolean(label)} $themeType={themeType} $layer={layer}>
        <WrapperInput className="wrapperinput">{InputElement}</WrapperInput>
        {/* Render the label for the input field if a label prop exists */}
        {label && (
          <AnimatedInputLabel
            htmlFor={id}
            $align={align}
            $themeType={themeType}
            $layer={layer}
            $moveUp={labelShouldMoveUp}
            $colorState={colorStateLabel}
          >
            {label}
          </AnimatedInputLabel>
        )}
        {/* Render the underline for the input field if the underline prop is true */}
        {underline && (
          <InputUnderline
            colorState={colorStateUnderline !== 'active' ? colorStateUnderline : 'active'}
            themeType={themeType}
            layer={layer}
            isActive={isActive}
          />
        )}
      </InputContainer>
      {/* Render the error message if an errorMessage prop exists */}
      {systemMessage && (
        <SystemMessageWrapper>
          <SystemMessage systemMessageState={systemMessage.type}>{systemMessage.message}</SystemMessage>
        </SystemMessageWrapper>
      )}
    </StyledInputWrapper>
  );
}

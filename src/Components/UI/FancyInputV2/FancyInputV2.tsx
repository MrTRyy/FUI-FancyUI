import React, { useId, useState } from 'react';

import { uiColors, fontSize, colorPalet, spacingPx } from '../Design/design';

import IFancyInput from './FancyInput.model';

import styled, { css } from 'styled-components';

//this function handles some alignment of the elements
import { alignHandler } from '../HelperFunctions/alignmentHandler';

//the input icon displayed on the left

// color: ${({errorMessage}) => errorMessage && 'red'}; */
const StyledIcon = styled.i<{ active: boolean; errorMessage?: string }>`
  color: ${({ active, errorMessage }) => (!errorMessage ? (active ? uiColors.accent.main : 'gray') : colorPalet.red_dark)};
  margin-right: 8px;
  margin-bottom: 2px;
  transition: 0.5s;
  display: flex;
  align-items: flex-end;

  svg {
    height: 20px;
    width: 20px;
  }
`;

//the underline for the input field
const UnderLinedStyle = styled.i<IFancyInput>`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  border-radius: 5px;
  background: gray;
  overflow: hidden;
  width: 100%;

  &::before {
    content: '';
    width: 100%;
    border-radius: 5px;
    position: absolute;
    left: 0;
    bottom: 0;
    opacity: 0;
    height: 100%;
    background: ${({ errorMessage }) =>
      !errorMessage
        ? css`linear-gradient(90deg, ${uiColors.accent.main}, ${uiColors.accent.main_light})`
        : css`linear-gradient(90deg, ${colorPalet.red_dark}, ${colorPalet.red_light})`};
    transition: 0.25s;
    transition-timing-function: cubic-bezier(0.46, 0.03, 0.52, 0.96);
  }
`;

//the label for the input field
const LabelInput = styled.label<IFancyInput>`
  position: absolute;
  ${({ align }) => alignHandler(align!, 'LabelInput')};
  padding: 12px 0 5px;
  font-weight: bold;
  color: gray;
  pointer-events: none;
  transition: 0.3s;
  user-select: none;
  transition-timing-function: cubic-bezier(0.46, 0.03, 0.52, 0.96);
`;

//the input/label/underline are all wrapped in thid container
const InputContainer = styled.div`
  width: 100%;
  grid-column: 2/3;
  padding-top: 10px;
  position: relative;
`;

//only the input field
const InputStyle = styled.input<IFancyInput>`
  font-weight: 500;
  box-sizing: border-box;
  caret-color: ${uiColors.accent.main};
  width: 100%;
  appearance: none;
  background-color: transparent;
  color: ${colorPalet.light};
  text-align: ${({ align }) => (align !== 'center' ? 'left' : 'center')};
  border: none;
  height: 40px;
  outline: none;
  box-shadow: none;
  font-size: ${fontSize.medium};
  padding: ${({ calculatedType, align }) =>
    calculatedType !== 'password'
      ? //if type is not password
        align === 'center'
        ? `12px 10px 4px`
        : `12px 0px 4px`
      : //if type is password
      align === 'center'
      ? `12px 20px 4px 20px`
      : `12px 20px 4px 0px`};

  //this disables the MS Edge password eye
  ${({ type }) =>
    type === 'password' &&
    css`
      &::-ms-reveal,
      &::-ms-clear {
        display: none;
      }
    `}

  //the focus animation for the Label
  &:focus ~ ${LabelInput}, &:valid ~ ${LabelInput} {
    color: ${({ errorMessage }) => (errorMessage ? colorPalet.red_dark : uiColors.accent.main)};
    transform: ${({ align }) => (align !== 'center' ? 'translateY(-20px)' : 'translateY(-20px) translate(-50%)')};
    font-weight: 600;
  }
  //the focus animation for the underline
  &:focus ~ ${UnderLinedStyle}::before {
    opacity: 1;
  }
`;

//the style for the error message
const ErrorMessage = styled.p`
  grid-column: 2;
  grid-row: 2;
  margin: 0;
  margin-top: ${spacingPx.xxs};
  font-size: ${fontSize.extraSmall};
  color: ${colorPalet.red_dark};
`;

//the style for the eye icon for the password type
const PasswordIcon = styled.i`
  position: absolute;
  bottom: 4px;
  right: 4px;

  svg {
    color: ${colorPalet.white_dark};
  }
`;

//the complete formation for the input field
const InputWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr auto;
`;

export default function FancyInputV2(props: IFancyInput) {
  const { label, type, align, icon, errorMessage, ...inputProps } = props;

  //this state toggled the clen text input and the censored one
  const [showPassword, setShowPassword] = useState(false);

  //this state switches when the input is focused
  const [isActive, setIsActive] = useState(false);

  const id = useId();

  //this condiational clacualtes the types of the input, this is needed for the eye from the password
  const calculatedType = type !== 'password' ? type : showPassword ? 'text' : 'password';

  return (
    <InputWrapper>
      {/* // --------- the icon for the input field ------------- // */}
      {icon && (
        <StyledIcon active={isActive} errorMessage={errorMessage}>
          {icon}
        </StyledIcon>
      )}

      {/* // ------------------------ the input field  ----------------------- // */}
      <InputContainer>
        {/* the input field  */}
        <InputStyle
          id={id}
          calculatedType={type}
          errorMessage={errorMessage}
          type={calculatedType}
          required
          align={align}
          {...inputProps}
          onFocus={() => setIsActive(true)}
          onBlur={() => setIsActive(false)}
          autoComplete={'off'}
        />

        {/* the label for the input field it shows when a label prop exists*/}
        {label && (
          <LabelInput htmlFor={id} align={align}>
            {label}
          </LabelInput>
        )}

        {/*  icons for the password field to show and hide the password */}
        {type === 'password' && (
          <PasswordIcon onClick={() => setShowPassword(!showPassword)}>
            {!showPassword ? (
              // the eye icon for the password type toggle
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
              </svg>
            ) : (
              // the crossed out eye icon for the password type toggle
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
              </svg>
            )}
          </PasswordIcon>
        )}
        {/* // --------- the underline form the input field------------- // */}
        <UnderLinedStyle errorMessage={errorMessage} align={align}></UnderLinedStyle>
      </InputContainer>

      {/* // ---------if a errorMessage prop exists this message will shown------------- // */}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      {/* // --------------------------------------------------------------------------- // */}
    </InputWrapper>
  );
}

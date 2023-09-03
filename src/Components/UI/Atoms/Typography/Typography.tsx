import React, { ReactNode } from 'react';
import { styled, CSSProp, css } from 'styled-components';

import { fontSizeVariants } from './TypographyStyleVariants';
import { uiColors } from '../../Design/design';

interface IComponentProps {
  children?: ReactNode;
  $variant?: CSSProp;
  $style?: CSSProp;
  className?: string;
}

const ComponentObj = {
  h1: styled.h1<IComponentProps>`
    ${(props) => props.$variant};
    ${(props) => props.$style};
  `,
  h2: styled.h2<IComponentProps>`
    ${(props) => props.$variant};
    ${(props) => props.$style};
  `,
  h3: styled.h3<IComponentProps>`
    ${(props) => props.$variant};
    ${(props) => props.$style};
  `,
  h4: styled.h4<IComponentProps>`
    ${(props) => props.$variant};
    ${(props) => props.$style};
  `,
  h5: styled.h5<IComponentProps>`
    ${(props) => props.$variant};
    ${(props) => props.$style};
  `,
  h6: styled.h6<IComponentProps>`
    ${(props) => props.$variant};
    ${(props) => props.$style};
  `,
  label: styled.label<IComponentProps>`
    ${(props) => props.$variant};
    ${(props) => props.$style};
  `,
  button: styled.span<IComponentProps>`
    ${(props) => props.$variant};
    ${(props) => props.$style};
  `,
  inlineElement: styled.span<IComponentProps>`
    ${(props) => props.$variant};
    ${(props) => props.$style};
  `,
  content: styled.p<IComponentProps>`
    ${(props) => props.$variant};
    ${(props) => props.$style};
  `,
  smText: styled.p<IComponentProps>`
    ${(props) => props.$variant};
    ${(props) => props.$style};
  `,
  verysmText: styled.span<IComponentProps>`
    ${(props) => props.$variant};
    ${(props) => props.$style};
  `,
};

const generateStyle = (externalStyle: CSSProp, fontWeight: 'normal' | 'bold' | undefined) => {
  return css`
    color: ${uiColors.secondary.main};
    font-weight: ${fontWeight};
    ${externalStyle};
  `;
};

export interface ITypography {
  type: keyof typeof ComponentObj;
  variant?: keyof typeof ComponentObj;
  children?: ReactNode;
  weight?: 'normal' | 'bold';
  style?: CSSProp;
  [x: string]: any;
  className?: string;
}
// --------------------------------------------------------------------------- //
// The Typography component can render differnet elements with different styles//
// ------------- like a "h4 can have the style of a p" ----------------------- //
export default function Typography({ type, variant, children, style, weight, className ,...htmlProps }: ITypography) {
  // generate the Typography component based on the type prop;
  // const Component = ComponentObj[type] || ComponentObj.content;
  const Component = (ComponentObj[type] || ComponentObj.content) as React.FC<IComponentProps>;

  const mixedStyle = generateStyle(style, weight);
  // get the variant style based on the variant prop or the type prop;
  const variantStyle = variant ? fontSizeVariants[variant] : fontSizeVariants[type];

  return (
    <Component $variant={variantStyle} $style={mixedStyle} className={className} {...htmlProps}>
      {children}
    </Component>
  );
}

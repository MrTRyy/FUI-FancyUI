import React from 'react';
import { FancyBox } from '../../Atoms/FancyBox';
import { TLayer } from '@/Components/UI/Interface/TLayer';
import { ChipContainer, generateChipListStyle } from './ChipList.style';
import { TUiColors, TUiColorsSystemMessage } from '@/Components/UI/Interface/TUiColors';

export interface ChipListProps {
  themeType?: Exclude<TUiColors, 'transparent'>;
  layer?: TLayer;
  outlined?: boolean;
  children?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  systemMessage?: TUiColorsSystemMessage;
}

export default function ChipList(props: ChipListProps) {
  const { themeType = 'primary', layer = 1, outlined = false, children, size, systemMessage } = props;

  const generatedStyle = generateChipListStyle(size ?? 'md', systemMessage);

  return (
    <FancyBox themeType={themeType} layer={layer} outlined={outlined} externalStyle={generatedStyle}>
      <ChipContainer>{children}</ChipContainer>
    </FancyBox>
  );
}

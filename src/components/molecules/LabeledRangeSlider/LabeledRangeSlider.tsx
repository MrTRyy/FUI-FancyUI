import { useId } from 'react';

import { RawSlider } from '@/components/atoms/RawSlider';
import { InputLabel } from '@/components/atoms/InputLabel/InputLabel';
import { TLabeledRangeSliderWithNativeAttrs } from '@/components/molecules/LabeledRangeSlider/TLabeledRangeSlider.model';
import { TInputLabel } from '@/components/atoms/InputLabel/TInputLabel';
import { SliderWrapper, Wrapper } from './LabeledRangeSlider.style';

type TLabeledRangeSlider = TLabeledRangeSliderWithNativeAttrs & Omit<TInputLabel, 'lableVariant'>;
export default function LabeledRangeSlider(props: TLabeledRangeSlider) {
  const { id, label, systemMessageType, isActive, align, className, ...sliderProps } = props;

  const useid = useId();
  const usedId = id ? id : useid;

  return (
    <Wrapper className={className}>
      {label && (
        <InputLabel
          htmlFor={usedId}
          $isActive={isActive}
          $systemMessageType={systemMessageType}
          $lableVariant="static"
          $align={align}
        >
          {label}
        </InputLabel>
      )}
      <SliderWrapper className="wrapper_rawslider-input" $isLabelProvided={!!label}>
        <RawSlider id={usedId} {...sliderProps} />
      </SliderWrapper>
    </Wrapper>
  );
}

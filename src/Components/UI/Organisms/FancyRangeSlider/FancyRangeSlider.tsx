import React, { ChangeEvent, useEffect, useId, useState } from 'react';

import RawSlider from '../../Atoms/RawSlider/RawSlider';
import FancyNumberInput from '../FancyNumberInput/FancyNumberInput';
import { StyledInputWrapper } from '../../Molecules/InputWrapper/InputWrapper.style';
import FancySVGAtom from '../../Atoms/FancySVGAtom/FancySVGAtom';
import { Label, NumberContainer, RangeSliderContainer, Icon } from './FancyRangeSlider.style';
import IFancyRangeSlider from './FancyRangeSlider.model';


// --------------------------------------------------------------------------- //
// -------------------- The main FancySlider Component ----------------------- //
// --------------------------------------------------------------------------- //
export default function FancyRangeSlider(props: IFancyRangeSlider) {
  const { label, align, icon, value, minValue, maxValue, displayNumber, handler, disabled } = props;

  const [sliderProgress, setSliderProgress] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [toutched, setToutched] = useState(false);

  const id = useId();


  //TODO: Fix the double state issue here and in the routes (build again in the handler)
  //TODO: Fix the min and max Values

  // this function is called when the slider is moved
  const changeHandler = (e: ChangeEvent<HTMLInputElement> ) => { 
    // this line handles the the input bewteen number and slider
    setToutched(true);
    setSliderProgress(parseFloat(e?.target.value));
    handler && handler(e);
  };

  // this function is called when the slider is clicked
  const activeHandler = (value: boolean) => {
    setIsActive(value);
  };

  useEffect(() => {
    if (value) {
      setSliderProgress(value);
    }
  }, [])


  return (
    <StyledInputWrapper disabled={disabled}>
      {/* Icon for the left side of the slider */}
      {icon && (
        <Icon>
          <FancySVGAtom isPassive={false} isActive={isActive} size="large">
            {icon}
          </FancySVGAtom>
        </Icon>
      )}

      {/* label for the top side of the slider */}
      {label && (
        <Label htmlFor={id} $align={align} $isActive={isActive || toutched}>
          {label}
        </Label>
      )}
      {/* Range Slider */}
      <RangeSliderContainer>
        <RawSlider
          id={id}
          disabled={disabled}
          value={sliderProgress ? sliderProgress : 0}
          handler={changeHandler}
          activeHandler={activeHandler}
          minValue={minValue}
          maxValue={maxValue}
        />
      </RangeSliderContainer>

      {/* Number input for typing the number */}
      {displayNumber && (
        <NumberContainer>
          <FancyNumberInput
            ariaLabel={label}
            autoWidth={true}
            align="center"
            value={sliderProgress ? sliderProgress : 0}
            handler={changeHandler}
            minValue={minValue}
            maxValue={maxValue}
          />
        </NumberContainer>
      )}
    </StyledInputWrapper>
  );
}

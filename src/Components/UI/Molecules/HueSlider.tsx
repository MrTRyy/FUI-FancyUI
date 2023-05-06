import React from 'react';

import useSlider from '../Organisms/ColorPicker/functions/useSilder';
import SliderMarker from '../Atoms/SliderMarker/SliderMarker';
import styled from 'styled-components';
import { borderRadius } from '../Design/design';
import Color from 'color';

import ColorIndicator from '../Atoms/ColorIndicator/ColorIndicator';

const SliderContainer = styled.div`
  position: relative;
  height: 20px;
  background: linear-gradient(to right, red 0%, yellow 17%, lime 33%, cyan 50%, blue 67%, magenta 83%, red 100%);
  cursor: pointer;
  border-radius: ${borderRadius.small};
  user-select: none;
`;

interface IHueSlider {
  handler: (hue: number ) => void;
  hue: number;
  color?: Color;
}

//define the min and max hue value for the slider
const minHue = 0;
const maxHue = 359.9;

//calculate the hue from the position of the slider hue is max value of 359.9
const positionToColorHue = (clientX: number, rect: DOMRect) => {
  const x = clientX - rect.left;
  const hue = (x / rect.width) * (maxHue - minHue);
  return Math.min(Math.max(hue, minHue), maxHue);
};


//calculate the position of the slider from the hue value 
const colorToPositionHue = (color: Color) => {
  if (!color) return { x: 0, y: 0 };
  const hue = Color(color).hsl().object().h;
  const huePercentage = ((hue - minHue) / (maxHue - minHue)) * 100;

  return { x: huePercentage , y: 0 };
};


// --------------------------------------------------------------------------- //
// ---------------------- Define the Hue Slider Component -------------------- //
// --------------------------------------------------------------------------- //
const HueSlider = ({ hue, handler, color }: IHueSlider) => {
  const handleHueChange = (newHue: number) => handler(parseFloat(newHue.toFixed(1)));
  const { sliderRef, markerPosition, handleInteractionStart, isInteracting } = useSlider({
    color,
    hue,
    sliderPositionToColorFunc: positionToColorHue,
    colorToPositionFunc: colorToPositionHue,
    type: 'hue',
    handlerSlider: handleHueChange,
  });


  return (
    <SliderContainer ref={sliderRef} onMouseDown={handleInteractionStart} onTouchStart={handleInteractionStart}>
      <SliderMarker position={ markerPosition.x + '%'}>
        <ColorIndicator color={`hsl(${hue}, 100%, 50% )`} isActive={isInteracting} />
      </SliderMarker>
    </SliderContainer>
  );
};

export default HueSlider;

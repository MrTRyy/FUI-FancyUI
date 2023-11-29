import React from 'react';
import ColorPicker from '../../Components/Organisms/FancyColorPicker/FancyColorPicker';

import { DesignWrapper, DesignArea } from '../DesignWrapper/Wrapper';

export default function ColorPickerRoute() {
  return (
    <DesignWrapper>
      <DesignArea title="Color Picker">
        <ColorPicker />
      </DesignArea>
    </DesignWrapper>
  );
}

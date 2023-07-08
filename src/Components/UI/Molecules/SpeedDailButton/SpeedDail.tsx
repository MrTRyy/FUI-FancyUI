import React, { useState } from 'react';

import { Button, Label, MenueItemContainer, MenueItemWrapper, MenuItem, Ring, SpeedDialContainer, Wrapper } from './SpeedDailButton.style';
import { ISpeedail } from './ISpeedDail';



const SpeedDialButton = ({items}: ISpeedail) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <SpeedDialContainer>
        <Button $isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
          </svg>
        </Button>
        <Ring $isOpen={isOpen} />
        <MenueItemWrapper>
          {items?.map((item, index) => (
            <MenueItemContainer key={index} $index={index} $isOpen={isOpen}>
              <Label $isOpen={isOpen}>{item.label}</Label>
              <MenuItem>{item.value}</MenuItem>
            </MenueItemContainer>
          ))}
        </MenueItemWrapper>
        </SpeedDialContainer>
    </Wrapper>
  );
};

export default SpeedDialButton;


import React, { useState } from 'react';

import { DesignWrapper, DesignArea } from '../DesignWrapper/Wrapper';
import FancyButton from '../../Components/UI/Molecules/FancyButton/FancyButton';
import { css } from 'styled-components';

const Icon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm11.666 1.89c.682 0 1.139.47 1.187 1.107H14v-.11c-.053-1.187-1.024-2-2.342-2-1.604 0-2.518 1.05-2.518 2.751v.747c0 1.7.905 2.73 2.518 2.73 1.314 0 2.285-.792 2.342-1.939v-.114h-1.147c-.048.615-.497 1.05-1.187 1.05-.839 0-1.318-.62-1.318-1.727v-.742c0-1.112.488-1.754 1.318-1.754zm-6.188.926h.044L6.542 11h1.006L9 5.001H7.818l-.82 4.355h-.056L5.97 5.001h-.94l-.972 4.355h-.053l-.827-4.355H2L3.452 11h1.005l1.02-4.184z" />
  </svg>
);

export default function ButtonRoute() {
  const [isLoading, setIsLoading] = useState(false);

  const backgroundColor = css`
    background-color: #235179;
    padding: 1rem;
    border-radius: 1rem;
    align-items: center;
  `;

  return (
    <DesignWrapper>
      <DesignArea title="Buttons sizes" style={backgroundColor}>
        <FancyButton label="Button" design="primary" size="sm" wide={false} />
        <FancyButton label="Button" design="secondary" size="md" wide={false} />
        <FancyButton label="Button" design="accent" size="lg" wide={false} />
        <FancyButton label="Button" design="transparent" wide={false} />
        <FancyButton label="Button" design="primary" size="sm" wide={false} roundedCompletly={true} />
      </DesignArea>
      <DesignArea title="Button Types in wide" style={backgroundColor}>
        <FancyButton label="Button" design="primary" roundedCompletly={true} />
        <FancyButton label="Button" design="primary" />
        <FancyButton label="Button" design="secondary" />
        <FancyButton label="Button" design="accent" />
        <FancyButton label="Button" design="transparent" />
      </DesignArea>
      <DesignArea title="Button Types in wide" style={backgroundColor}>
        <FancyButton icon={Icon}  label="Button" design="primary" align='left' />
        <FancyButton icon={Icon}  label="Button" design="secondary" align='right' />
        <FancyButton icon={Icon} label="Button" design="accent" />
        <FancyButton icon={Icon} label="Button" design="transparent"align='left' />
      </DesignArea>
      <DesignArea title="Outlined Buttons" style={backgroundColor}>
        <FancyButton label="Button" design="primary" outlined />
        <FancyButton label="Button" design="secondary" outlined />
        <FancyButton label="Button" design="accent" outlined />
        <FancyButton label="Button" design="transparent" outlined />
      </DesignArea>
      <DesignArea title="Outlined Buttons" style={backgroundColor}>
        <FancyButton icon={Icon} label="Button" design="primary" outlined />
        <FancyButton icon={Icon} label="Button" design="secondary" outlined />
        <FancyButton icon={Icon} label="Button" design="accent" outlined />
        <FancyButton icon={Icon}  label="Button" design="transparent" outlined />
      </DesignArea>
      <DesignArea title="Loading Buttons" style={backgroundColor}>
        <FancyButton icon={Icon} label="Button" size='sm' isLoading={isLoading} onClick={() => setIsLoading(true)} design="primary" outlined />
        <FancyButton icon={Icon} label="Button" isLoading={isLoading} onClick={() => setIsLoading(false)} design="secondary" outlined />
      </DesignArea>
      <DesignArea title="1:1 Buttons" style={backgroundColor}>
        <FancyButton icon={Icon} size='md' isLoading={isLoading} onClick={() => setIsLoading(true)} design="primary"  />
        <FancyButton icon={Icon} label="Button" isLoading={isLoading} onClick={() => setIsLoading(false)} design="secondary" outlined />
      </DesignArea>
    </DesignWrapper>
  );
}

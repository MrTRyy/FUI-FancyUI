import React from 'react';

import FancyMiniProfile from '../../components/molecules/FancyMiniProfile/FancyMiniProfile';
import MiniProfile from '@/components/molecules/MiniProfile/MiniProfile';

import { DesignWrapper, DesignArea } from '../DesignWrapper/Wrapper';
import { FancyCard } from '@/components/atoms/FancyCard';

export default function MiniProfileroute() {
  return (
    <FancyCard>
      <DesignWrapper>
        <DesignArea title="MiniProfile">
          <div style={{ display: 'flex', gap: '12px' }}>
          <MiniProfile/>

          </div>
        </DesignArea>
        <DesignArea title="MiniProfile">
          <div style={{ display: 'flex', gap: '12px' }}>
          <MiniProfile/>
            <FancyMiniProfile
              alignText="right"
              size={'sm'}
              headingText="TobiTRy"
              subHeadingText="@TobiTRy"
              src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
            />
            <FancyMiniProfile
              alignText="right"
              size={'sm'}
              headingText="TobiTRy"
              src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
            />
            <FancyMiniProfile
              alignText="right"
              size={'sm'}
              headingText="TobiTRy"
              subHeadingText="@TobiTRy"
              src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
            />
          </div>
        </DesignArea>
        <DesignArea title="MiniProfile">
          <div style={{ display: 'flex', gap: '12px' }}>
            <FancyMiniProfile
              alignText="right"
              size={'md'}
              headingText="TobiTRy"
              subHeadingText="@TobiTRy"
              src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
            />
            <FancyMiniProfile
              alignText="right"
              size={'md'}
              headingText="TobiTRy"
              src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
            />
            <FancyMiniProfile
              alignText="right"
              size={'md'}
              headingText="TobiTRy"
              subHeadingText="@TobiTRy"
              src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
            />
          </div>
        </DesignArea>
        <DesignArea title="MiniProfile">
          <div style={{ display: 'flex', gap: '12px' }}>
            <FancyMiniProfile
              alignText="right"
              size={'lg'}
              headingText="TobiTRy"
              subHeadingText="@TobiTRy"
              src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
            />
            <FancyMiniProfile
              alignText="right"
              size={'lg'}
              headingText="TobiTRy"
              subHeadingText="@TobiTRy"
              src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
            />
            <FancyMiniProfile
              alignText="right"
              size={'lg'}
              headingText="TobiTRy"
              subHeadingText="@TobiTRy"
              src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
            />
          </div>
        </DesignArea>
      </DesignWrapper>
    </FancyCard>
  );
}

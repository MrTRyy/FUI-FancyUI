import React from 'react';

import Chip from '../../Components/UI/Molecules/Chip/Chip';

import { DesignArea, DesignWrapper } from '../DesignWrapper/Wrapper';
import ClipBoardIconCheck from '../../Components/UI/SVGIcons/SVGClipBoardIconChecked';
import { FancyCard } from '../../lib';

export default function ChipsRoute() {
  return (
    <FancyCard>
    <DesignWrapper>
      <DesignArea title="Chip">
        <Chip label="Heyyjoo" image="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg" />
        <Chip label="Heyyjoo" deleteButton onDelete={() => console.log('DELETE')} />
        <Chip label="Heyyjoo" onClick={() => console.log('hii')} />
      </DesignArea>
      <DesignArea title="Chip">
        <Chip
          label="Heyyjoo"
          size="sm"
          image="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
        />
        <Chip label="Heyyjoo" size="md" deleteButton onDelete={() => console.log('DELETE')} />
        <Chip
          label="Heyyjoo"
          deleteButton
          size="lg"
          onClick={() => console.log('hii')}
          image="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
        />
      </DesignArea>
      <DesignArea title="Chip">
        <Chip
          label="Heyyjoo"
          size="lg"
          image="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
        />
        <Chip label="Heyyjoo" size="lg" deleteButton onDelete={() => console.log('DELETE')} />
        <Chip
          label="Heyyjoo"
          deleteButton
          size="lg"
          onClick={() => console.log('hii')}
          image="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
        />
      </DesignArea>
      <DesignArea title="Chip">
        <Chip label="Heyyjoo" icon={<ClipBoardIconCheck />} size="sm" deleteButton />
        <Chip label="Heyyjoo" icon={<ClipBoardIconCheck />} size="md" deleteButton onDelete={() => console.log('DELETE')} />
        <Chip label="Heyyjoo" icon={<ClipBoardIconCheck />} deleteButton size="lg" onClick={() => console.log('hii')} />
      </DesignArea>
      <DesignArea title="Chip Outlined">
        <Chip label="Heyyjoo" outlined icon={<ClipBoardIconCheck />} size="sm" deleteButton />
        <Chip label="Heyyjoo" outlined icon={<ClipBoardIconCheck />} size="md" deleteButton onDelete={() => console.log('DELETE')} />
        <Chip label="Heyyjoo" outlined icon={<ClipBoardIconCheck />} deleteButton size="lg" onClick={() => console.log('hii')} />
      </DesignArea>
      <DesignArea title="Chip Colored">
        <Chip label="Heyyjoo" outlined themeType='accent' icon={<ClipBoardIconCheck />} size="sm" deleteButton />
        <Chip label="Heyyjoo" outlined themeType='secondary' icon={<ClipBoardIconCheck />} size="md" deleteButton onDelete={() => console.log('DELETE')} />
        <Chip label="Heyyjoo" outlined themeType='transparent' textColor='accent' icon={<ClipBoardIconCheck />} deleteButton size="lg" onClick={() => console.log('hii')} />
      </DesignArea>
      <DesignArea title="Chip Colored">
        <Chip label="Heyyjoo" themeType='accent' textColor='primary' icon={<ClipBoardIconCheck />} size="sm" deleteButton />
        <Chip label="Heyyjoo" themeType='primary' icon={<ClipBoardIconCheck />} size="md" deleteButton onDelete={() => console.log('DELETE')} />
        <Chip label="Heyyjoo" themeType='secondary' textColor="accent" size="lg" onClick={() => console.log('hii')} />
      </DesignArea>
    </DesignWrapper>
    </FancyCard>
  );
}

import React, { useState } from 'react';
import FancyHeader from '../../Components/UI/Organisms/FancyHeader/FancyHeader';
import HeaderTitleWithLogo from '../../Components/UI/Molecules/HeaderTitleWithLogo/HeaderTitleWithLogo';
import FancyDropDownMenue from '../../Components/UI/Organisms/FancyDropDownMenue/FancyDropDownMenue';

import FancySearchBar from '../../Components/UI/Organisms/FancySearchBar/FancySearchBar';
import FancyLiItem from '../../Components/UI/Atoms/FancyLI/FancyLI';
import { FancyA, FancySVGAtom } from '../../lib';

import SVGChevronLeft from '../../Components/UI/SVGIcons/SVGChevronLeft';

const RightSlot = ({ onClick }: { onClick?: () => void }) => {
  return <div onClick={onClick}>Right Slot</div>;
};

const Slot = {
  component: <FancySearchBar searchListWidth='80vw' />,
  scale: 1,
};

interface More {
  title: string;
}
const MoreContent = (props: More) => {
  return (
    <>
      <div style={{ position: 'absolute', width: '100px', top: '44px', height: '100px' }}>More Content {props.title}</div>
    </>
  );
};

const headerTitele = {
  component: <HeaderTitleWithLogo title='Let´sTryIt'/>,
};

export default function HeaderRoute() {
  const [isOpen, setIsOpen] = useState(false);

  const Slot2 = {
    toOpenComponent: 
    
    <FancyDropDownMenue isOpen={isOpen} alignHorizontal='right' alignVertical='top' width='auto'> 

      <FancyLiItem size='large'>
        <FancyA wide={true} align='left' icon={<FancySVGAtom>{SVGChevronLeft}</FancySVGAtom> } design='transparent' hoverColor='primary' roundedCompletly={false} label='test' size='small'/>
      </FancyLiItem>
      <FancyLiItem size='large'>
        <FancyA wide={true} align='left' icon={<FancySVGAtom>{SVGChevronLeft}</FancySVGAtom> } design='transparent' hoverColor='primary' roundedCompletly={false} label='testsasadefsddfdfsdsf ' size='small'/>
      </FancyLiItem>
      <FancyLiItem size='large'>
        <FancyA wide={true} align='left' icon={<FancySVGAtom>{SVGChevronLeft}</FancySVGAtom> } design='transparent' hoverColor='primary' roundedCompletly={false} label='test' size='small'/>
      </FancyLiItem>
    </FancyDropDownMenue>,
    component: <RightSlot onClick={() => setIsOpen(!isOpen)} />,
    scale: 1,
  };

  return (
    <>
      <section>
        <FancyHeader rightSlot={Slot2} leftSlot={headerTitele} middeSlot={Slot} />
      </section>
    </>
  );
}

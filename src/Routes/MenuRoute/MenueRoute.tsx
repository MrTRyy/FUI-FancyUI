/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useRef, useState } from 'react';

import { FancyButton } from '../../../lib';

import { DesignArea, DesignWrapper } from '../DesignWrapper/Wrapper';
import Popover from '../../components/shared/FancyPopover/Popover';
import FancyPopover from '../../components/shared/FancyPopover/FancyPopover';
import FancyMenueItem from '../../components/templates/FancyMenueComponent/FancyMenuItem/FancyMenuItem';
import FancyMenuList from '../../components/templates/FancyMenueComponent/FancyMenu/FancyMenu';
import SVGCheckMark from '@/components/icons/SVGCheckMark/SVGCheckMark';

export default function MenueRoute() {
  const [isPopoverVisible, setPopoverVisible] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);

  return (
    <DesignWrapper>
      <DesignArea title="Teststs" style={{ justifyContent: 'flex-end' }}>
        <FancyPopover
          offsetY={10}
          refComponent={<FancyButton label="Hi 2" />}
          contentComponent={
            <FancyMenuList outlined>
              <FancyMenuList.Item label="Muuusettingshhh" icon={<>⚙️</>} />
              <FancyMenuList.Divider sizeC="md" label="Test" textAlignment="right" />
              <FancyMenuList.Divider label="Test" icon={<SVGCheckMark />} textAlignment="left" noLine />
              <FancyMenuList.Divider label="Test" sizeC="md" icon={<SVGCheckMark />} textAlignment="center" />
              <FancyMenuList.Divider label="Test" textAlignment="center" />
              <FancyMenueItem label="Logout" icon={<SVGCheckMark />} />
              <FancyMenueItem label="Logout" icon={<SVGCheckMark />} />
              <FancyMenueItem label="Logout" icon={<SVGCheckMark />} />
              <FancyMenueItem label="Logout" icon={<SVGCheckMark />} />
              <FancyMenueItem label="Logout" icon={<SVGCheckMark />} />
            </FancyMenuList>
          }
        ></FancyPopover>
      </DesignArea>
    </DesignWrapper>
  );
}

import { DesignArea, DesignWrapper } from '@/Routes/DesignWrapper/Wrapper';
import FancyListBox from '@/components/organisms/FancyListBox/FancyListBox';

export default function FancyListBoxRoute() {
  return (
    <DesignWrapper>
      <DesignArea title="FancyListBox">
        <FancyListBox
          layer={2}
          sizeC="md"
          itemSettings={{
            hoverLayer: 3,
            layer: 1,
            themeType: 'primary',
            sizeC: undefined,
          }}
        >
          <span>Moooiin</span>

          <span>Moooiin</span>
          <span>Moooiin</span>
          <span>Moooiin</span>
          <span>Moooiin</span>
          <span>Moooiin</span>
        </FancyListBox>
      </DesignArea>
    </DesignWrapper>
  );
}

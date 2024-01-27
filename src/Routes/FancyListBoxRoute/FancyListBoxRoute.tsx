import { DesignArea, DesignWrapper } from '@/Routes/DesignWrapper/Wrapper';
import FancyListBox from '@/components/organisms/FancyListBox/FancyListBox';

export default function FancyListBoxRoute() {
  return (
    <DesignWrapper>
      <DesignArea title="FancyListBox">
        <FancyListBox>
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

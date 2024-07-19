import { useEffect, useRef, useState, forwardRef, useId } from 'react';
import { styled } from 'styled-components';

import { SwipeUpDash } from '@/components/atoms/SwipeUpDash';

interface IScalingSection {
  handleScaling: (state: 'move' | 'end', currentPos: number) => void;
  onClick?: () => void;
}

// --------------------------------------------------------------------------- //
//the ScalingSection is for conroling events on the swipe up dash for better UX //
// --------------------------------------------------------------------------- //
const ScalingSection = forwardRef<HTMLDivElement, IScalingSection>((props, ref) => {
  const { handleScaling, onClick } = props;

  const [isDragging, setIsDragging] = useState(false);
  const touchStartTime = useRef<number>(0);
  const id = useId();

  const handleStart = () => {
    setIsDragging(true);
    touchStartTime.current = Date.now();
  };

  const handleMoveMouse = (event: MouseEvent) => {
    const element = event.target as HTMLElement;
    if (!isDragging || element.id !== id) return;
    const currentY = event.clientY;
    const deltaY = currentY + 15;
    handleScaling('move', deltaY);
  };

  const handleMoveTouch = (event: TouchEvent) => {
    const element = event.target as HTMLElement;
    if (!isDragging || element.id !== id) return;
    const currentY = event.touches[0].clientY;
    const deltaY = currentY;
    handleScaling('move', deltaY);
  };

  const handleEnd = (event: MouseEvent | TouchEvent) => {
    const element = event.target as HTMLElement;
    if (element.id !== id) return;
    setIsDragging(false);

    const touchDuration = Date.now() - touchStartTime.current;
    if (touchDuration < 200) {
      // Threshold for short tap (adjust as needed)
      onClick?.(); // Call onClick if it's a short tap
    }
    const currentY = isTouchEvent(event) ? event.changedTouches[0].clientY : event.clientY;

    handleScaling('end', currentY); // Notify parent of drag end
  };

  useEffect(() => {
    const options = { passive: false };
    document.addEventListener('mousemove', handleMoveMouse, options);
    document.addEventListener('mouseup', handleEnd, options);
    document.addEventListener('touchmove', handleMoveTouch, options);
    document.addEventListener('touchend', handleEnd, options);

    return () => {
      document.removeEventListener('mousemove', handleMoveMouse);
      document.removeEventListener('mouseup', handleEnd);
      document.removeEventListener('touchmove', handleMoveTouch);
      document.removeEventListener('touchend', handleEnd);
    };
  }, [isDragging]);

  return (
    <SytledScalingSection id={id} ref={ref} onTouchStart={handleStart} onMouseDown={handleStart}>
      <SwipeUpDash />
    </SytledScalingSection>
  );
});

// ------------------------------------------- //
// ------- The style for the component ------- //
// ------------------------------------------- //
const SytledScalingSection = styled.div`
  position: sticky;
  height: 30px;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

//check if the event is a touch event or a mouse event
const isTouchEvent = (e: MouseEvent | TouchEvent): e is TouchEvent => {
  return 'changedTouches' in e;
};

export default ScalingSection;

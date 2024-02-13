import { styled } from 'styled-components';

import { TTheme } from '@/types/TTheme';

export const MonthContainer = styled.div<{ theme: TTheme }>`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StyledCalendar = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  gap: 48px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

export const DateContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

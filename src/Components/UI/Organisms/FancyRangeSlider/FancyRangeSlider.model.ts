import { ChangeEvent } from "react";

interface IFancyRangeSlider {
  label?: string;
  align?: 'left' | 'center';
  icon?: JSX.Element;
  value?: number;
  minValue?: number;
  maxValue?: number;
  displayNumber?: boolean;
  handler?: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

export default IFancyRangeSlider;
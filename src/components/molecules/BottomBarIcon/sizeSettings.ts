import { TComponentSizes } from '@/types';
import { TSizeSettings } from '@/types/TSizeSettings';

type TSizeObj = {
  sizeIcon: TComponentSizes;
};

export const sizeSettings: TSizeSettings<TSizeObj> = {
  sm: {
    sizeIcon: 'sm',
  },
  md: {
    sizeIcon: 'sm',
  },
  lg: {
    sizeIcon: 'md',
  },
};

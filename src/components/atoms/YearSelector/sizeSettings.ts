import { TSVGAtomSizes } from '@/components/atoms/FancySVGAtom';
import { TSizeSettings } from '@/types/TSizeSettings';
import { TGlobalElementSizes } from '@/types/TGlobalElementSizes';
import { TBorderRadiusSizes } from '@/types/TBorderRadiusSizes';
import { TSpacingArray } from '@/types/TSpacings';

type TSizeObj = {
  padding: TSpacingArray;
  iconSize: TSVGAtomSizes;
  height?: TGlobalElementSizes;
  borderRadius?: TBorderRadiusSizes;
};

export const sizeSettings: TSizeSettings<TSizeObj> = {
  sm: {
    padding: ['xxs', 'xs'],
    height: 'sm',
    iconSize: 'xxxs',
    borderRadius: 'sm',
  },
  md: {
    padding: ['xs', 'sm'],
    height: 'md',
    borderRadius: 'md',
    iconSize: 'xxs',
  },
  lg: {
    padding: ['sm', 'md'],
    iconSize: 'xs',
    borderRadius: 'lg',
    height: 'lg',
  },
};

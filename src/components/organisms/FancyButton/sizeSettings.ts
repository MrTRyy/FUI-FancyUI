import { TThemeArrayOrValueCSS } from '@/design/designFunctions/arrayToCssValues';
import { TglobalElementSizes } from '@/types';
import { TSizeSettings } from '@/types/TSizeSettings';
import { TTypographyVariants } from '@/types/TTypographyVariants';

type TSizeObj = {
  fontSize: TTypographyVariants;
  padding: TThemeArrayOrValueCSS;
  paddingIconAlignLeft: TThemeArrayOrValueCSS;
  paddingIconAlignRight: TThemeArrayOrValueCSS;
  iconSize: TglobalElementSizes;
};

export const sizeSettings: TSizeSettings<TSizeObj> = {
  sm: {
    padding: ['xs', 'md'],
    paddingIconAlignLeft: ['xs', 'md', 'xs', 'sm'],
    paddingIconAlignRight: ['xs', 'sm', 'xs', 'md'],
    fontSize: 'interactiveSm',
    iconSize: 'sm',
  },
  md: {
    padding: ['xs', 'lg'],
    paddingIconAlignLeft: ['xs', 'lg', 'xs', 'md'],
    paddingIconAlignRight: ['xs', 'md', 'xs', 'lg'],
    fontSize: 'interactiveMd',
    iconSize: 'sm',
  },
  lg: {
    padding: ['sm', 'xl'],
    paddingIconAlignLeft: ['sm', 'xl', 'sm', 'lg'],
    paddingIconAlignRight: ['sm', 'lg', 'sm', 'xl'],
    fontSize: 'interactiveLg',
    iconSize: 'xs',
  },
};

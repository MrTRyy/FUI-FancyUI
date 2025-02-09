import { TSpacings } from '@/types/TSpacings';
import { TSizeSettings } from '@/types/TSizeSettings';
import { TTypographyVariants } from '@/types/TTypographyVariants';
import { TFancySVGAtomSizes } from '@/components/atoms/FancySVGAtom';

type TSizeObj = {
  fontSizeTitle: TTypographyVariants;
  fontSizeDescription: TTypographyVariants;
  padding: TSpacings;
  iconPadding?: TSpacings;
  iconSize: TFancySVGAtomSizes;
};

// Define the sizes for the FancyContent component
export const sizes: TSizeSettings<TSizeObj> = {
  sm: {
    fontSizeDescription: 'subTextFootnote',
    fontSizeTitle: 'bodytextSm',
    padding: 'xs',
    iconPadding: 'xxxs',
    iconSize: 'xxxs',
  },
  md: {
    fontSizeDescription: 'bodytextSm',
    fontSizeTitle: 'bodytextMd',
    padding: 'sm',
    iconPadding: 'xxs',
    iconSize: 'xxs',
  },
  lg: {
    fontSizeDescription: 'bodytextLg',
    fontSizeTitle: 'bodytextMd',
    padding: 'md',
    iconPadding: 'xxs',
    iconSize: 'xxs',
  },
};

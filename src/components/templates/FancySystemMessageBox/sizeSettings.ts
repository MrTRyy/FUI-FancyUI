import { TTypographyVariants } from '@/types/TTypographyVariants';
import { TSizeSettings } from '@/types/TSizeSettings';
import { TSystemMessageBox } from '@/components/atoms/SystemMessageBox/TSystemMessageBox.model';
import { TSpacings } from '@/types/TSpacings';
import { TComponentSizes } from '@/types';

type TSizeObj = {
  iconSize: TComponentSizes;
  title: TTypographyVariants;
  descriptionSize: TTypographyVariants;
  systemMessageSize: TSystemMessageBox['sizeC'];
  gap: TSpacings;
};

// the template for the sizes
export const sizes: TSizeSettings<TSizeObj> = {
  sm: {
    iconSize: 'sm',
    title: 'subTextCaption',
    descriptionSize: 'subTextFootnote',
    systemMessageSize: 'sm',
    gap: 'xs',
  },
  md: {
    iconSize: 'sm',
    title: 'bodytextSm',
    descriptionSize: 'subTextCaption',
    systemMessageSize: 'md',
    gap: 'xs',
  },
  lg: {
    iconSize: 'md',
    title: 'bodytextMd',
    descriptionSize: 'bodytextSm',
    systemMessageSize: 'lg',
    gap: 'xs',
  },
};

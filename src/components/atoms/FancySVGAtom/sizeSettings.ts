import { globalElementSizes } from '@/design/theme/globalSizes';

export const sizes = {
  xxxs: '12px',
  ...globalElementSizes,
  full: '100%',
};

export type TFancySVGAtomSizes = typeof sizes;

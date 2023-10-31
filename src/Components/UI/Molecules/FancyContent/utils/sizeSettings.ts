import { TypographyList } from "../../../Atoms/Typography/Typography";
import { spacingPx } from "../../../Design/design";

// Define the sizes for the FancyContent component
export const sizes = {
  sm: {
    fontSizeDescription: 'smText' as keyof typeof TypographyList,
    fontSizeTitle: 'h6' as keyof typeof TypographyList,
    padding: spacingPx.xs,
  },
  md: {
    fontSizeDescription: 'content' as keyof typeof TypographyList,
    fontSizeTitle: 'h5' as keyof typeof TypographyList,
    padding: spacingPx.sm,
  },
  lg: {
    fontSizeDescription: 'button' as keyof typeof TypographyList,
    fontSizeTitle: 'h4' as keyof typeof TypographyList,
    padding: spacingPx.md,
  },
};
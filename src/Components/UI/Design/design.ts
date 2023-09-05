import Color from 'color';
import lightenColors from './color/lighenColors';

type ITransparency = 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.8 | 0.9;
export const transparencyCalculator = (color: string, transparency: ITransparency) => {
  return Color(color).alpha(transparency).rgb().string();
};
type MainColors = 'primary' | 'accent' | 'secondary';

const mainColors: { [key in MainColors]: string } = {
  primary: '#131825',
  accent: '#F17C12',
  secondary: '#f0f0ef',
};

// const mainColors = {
//   primary: 'hsl(292.5deg 88.51% 10.35%)',
//   accent: '#F17C12',
//   secondary: '#E8E7E4',
// };

export const colorPalet = {
  //backup
  // white: '#E8E7E4',
  // white_light: '#F2F1EE',
  // white_dark: '#D7D6D2',

  white: mainColors.secondary,
  white_light: Color(mainColors.secondary).lighten(0.15).hex(),
  white_dark: Color(mainColors.secondary).darken(0.05).hex(),

  white_high: 'rgba(255 255 255 / 87%)',
  white_md: 'rgba(255 255 255 / 60%)',
  white_disabled: 'rgba(255 255 255 / 38%)',

  //backup
  //#e75400
  // orange: '#F17C12',
  // orange_light: '#FFA42A',
  // orange_dark: '#CC6C0A',

  orange: mainColors.accent,
  orange_light: Color(mainColors.accent).lighten(0.15).hex(),
  orange_dark: Color(mainColors.accent).darken(0.1).hex(),

  // darkblue: '#111626',
  // darkblue_light: '#161c2c',
  // darkblue_dark: '#131525f0',
  darkblue: mainColors.primary,
  darkblue_light: Color(mainColors.primary).lighten(0.15).hex(),
  darkblue_dark: Color(mainColors.primary).darken(0.05).hex(),
  //darkblue_dark: Color('#161c2c').darken(0.15).hex(),

  //darkblue_dark: '#14131e',

  // darkblue: '#083448',
  // darkblue_light: '#1a3947',
  // darkblue_dark: '#17131e',
  // #110E18 // #17131e // #00050d

  green_background: '#161c22f2',
  green_dark: '#17815f',
  green_light: '#1ea97c', //'#e4f8f0',

  red_backGround: '#170c0cf2',
  red_dark: '#8b1c1c',
  red_light: '#ce2222',

  yellow_background: '#131312f2',
  yellow_dark: '#c96512',
  yellow_light: '#f67911',

  transparent: 'transparent',
  light: '#f1f1f1',
  dark: '#252525',
};

export const spacing = {
  xxs: 2,
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
};

export const spacingPx = {
  xxs: spacing.xxs + 'px',
  xs: spacing.xs + 'px',
  sm: spacing.sm + 'px',
  md: spacing.md + 'px',
  lg: spacing.lg + 'px',
  xl: spacing.xl + 'px',
  xxl: spacing.xxl + 'px',
};

export const fontSize = {
  extrasm: '0.7rem',
  sm: '0.875rem',
  md: '1rem',
  lg: '1.125rem',
  extraLarge: '1.25rem',
  xxl: '1.5rem',
};

export const fontSizes = {
  desktop: {
    headings: {
      h1: '40px',
      h2: '32px',
      h3: '24px',
      h4: '20px',
      h5: '18px',
      h6: '16px',
    },
    textElements: {
      label: '16px',
      caption: '16px',
      smText: '12px',
      verysmText: '12px',
      input: '16px',
      button: '16px',
    },
  },
  mobile: {
    headings: {
      h1: '32px',
      h2: '24px',
      h3: '20px',
      h4: '18px',
      h5: '16px',
      h6: '14px',
    },
    textElements: {
      label: '16px',
      caption: '14px',
      smText: '12px',
      verysmText: '12px',
      input: '16px',
      button: '16px',
    },
  },
};

export const borderRadius = {
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '18px',
  xxl: '24px',
  xxxl: '48px',
  complete: '50px',
};
export type IBorderRadiusNames = keyof typeof borderRadius;
export type IBorderRadius = typeof borderRadius;

export type IUiColorsTypes = 'primary' | 'secondary' | 'accent' | 'transparent';

type StepKeys = 100 | 90 | 80 | 70 | 60 | 50 | 40 | 30 | 20 | 10 | 0;

const degreeSteps: number[] = [0, 3, 15, 20, 25, 30, 35, 40, 45, 50];

type ColorSteps = {
  [key in StepKeys]: string;
};

// Function to generate color steps
function generateColorSteps(color: string, degrees: number[]): ColorSteps {
  const lightColors = lightenColors(color, degrees);
  return degrees.reduce((obj: ColorSteps, _, index) => {
    const step = (10 - index * 1) as StepKeys;
    return {
      ...obj,
      [step]: lightColors[index],
    };
  }, {} as ColorSteps);
}

export const colorSteps: { [key in MainColors]: ColorSteps } = {} as { [key in MainColors]: ColorSteps };

(Object.keys(mainColors) as MainColors[]).forEach((type) => {
  colorSteps[type] = generateColorSteps(mainColors[type], degreeSteps);
});




console.log('colorSteps', colorSteps.primary);

// export const colorSteps = {
//   primary: {
//     100: primaryLightcolors[10],
//     90: primaryLightcolors[9],
//     80: primaryLightcolors[8],
//     70: primaryLightcolors[7],
//     60: primaryLightcolors[6],
//     50: primaryLightcolors[5],
//     40: primaryLightcolors[4],
//     30: primaryLightcolors[3],
//     20: primaryLightcolors[2],
//     10: primaryLightcolors[1],
//     0 : mainColors.primary[0],
//   },
//   accent: {
//     80: Color(mainColors.accent).lighten(0.3).hex(),
//     70: Color(mainColors.accent).lighten(0.2).hex(),
//     60: Color(mainColors.accent).lighten(0.15).hex(),
//     50: mainColors.accent,
//     40: Color(mainColors.accent).darken(0.1).hex(),
//     30: Color(mainColors.accent).darken(0.15).hex(),
//   },
//   secondary: {
//     80: Color(mainColors.secondary).lighten(0.3).hex(),
//     70: Color(mainColors.secondary).lighten(0.2).hex(),
//     60: Color(mainColors.secondary).lighten(0.15).hex(),
//     50: mainColors.secondary,
//     40: Color(mainColors.secondary).darken(0.05).hex(),
//     30: Color(mainColors.secondary).darken(0.2).hex(),
//     20: Color(mainColors.secondary).darken(0.4).hex(),
//   },
// };

const strenghuiColors = {
  primary: {
    80: colorSteps.primary[80],
    70: colorSteps.primary[70],
    60: colorSteps.primary[60],
    50: colorSteps.primary[50],
    40: colorSteps.primary[40],
    30: colorSteps.primary[30],
  },
  accent: {
    80: colorSteps.accent[80],
    70: colorSteps.accent[70],
    60: colorSteps.accent[60],
    50: colorSteps.accent[50],
    40: colorSteps.accent[40],
    30: colorSteps.accent[30],
  },
  secondary: {
    80: colorSteps.secondary[80],
    70: colorSteps.secondary[70],
    60: colorSteps.secondary[60],
    50: colorSteps.secondary[50],
    40: colorSteps.secondary[40],
    30: colorSteps.secondary[30],
    20: colorSteps.secondary[20],
  },
};

export const uiColors = {
  primary: {
    lightest: colorSteps.primary[80],
    lighter: colorSteps.primary[70],
    light: colorSteps.primary[60],
    main: mainColors.primary,
    dark: colorSteps.primary[40],
    darker: colorSteps.primary[30],
    contrast: colorSteps.secondary[60],
  },
  accent: {
    lightest: colorSteps.accent[80],
    lighter: colorSteps.accent[70],
    light: colorSteps.accent[60],
    main: mainColors.accent,
    dark: colorSteps.accent[40],
    darker: colorSteps.accent[30],
    contrast: colorSteps.secondary[60],
  },
  secondary: {
    lightest: colorSteps.secondary[80],
    lighter: colorSteps.secondary[70],
    light: colorSteps.secondary[60],
    main: mainColors.secondary,
    dark: colorSteps.secondary[40],
    darker: colorSteps.secondary[30],
    darkest: colorSteps.secondary[20], // is used for passiv elements to make them more passive
    contrast: colorSteps.primary[60],
  },
  transparent: {
    lightest: 'transparent',
    lighter: 'transparent',
    light: 'transparent',
    main: 'transparent',
    dark: 'transparent',
    darker: 'transparent',
    contrast: colorSteps.secondary[60],
  },
};

export type IUiColorsSystemMessageTypes = keyof typeof systemMessages;
// colors for different types of (success, warning, error)
export const systemMessages = {
  success: {
    backGround: colorPalet.green_background,
    dark: colorPalet.green_dark,
    light: colorPalet.green_light,
  },
  warning: {
    backGround: colorPalet.yellow_background,
    dark: colorPalet.yellow_dark,
    light: colorPalet.yellow_light,
  },
  error: {
    backGround: colorPalet.red_backGround,
    dark: colorPalet.red_dark,
    light: colorPalet.red_light,
  },
};

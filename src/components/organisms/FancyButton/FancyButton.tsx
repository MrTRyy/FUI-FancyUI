'use client';

import { css } from 'styled-components';

import { LoadingSVGArrows } from '@/components/atoms/LoadingSVGArrows';
import { Button } from '@/components/molecules/Button';
import { FancyContent } from '@/components/molecules/FancyContent';
import { generateFancyButton } from './FancyButton.style';

import { TButton } from '@/components/molecules/Button/Button.model';
import { leftRightCenterToFlexJustify } from '@/design/designFunctions/leftRightCenterToFlexJustify';
import { TFancyButtonWithHTMLAttrs } from './TFancyButton.model';
import { sizeSettings } from './sizeSettings';

// --------------------------------------------------------------------------- //
// ---------- The Fancy Button has a bit more options than another  ---------- //
// --------------------------------------------------------------------------- //
export default function FancyButton(props: TFancyButtonWithHTMLAttrs) {
  const {
    icon,
    label,
    isLoading,
    iconAlign = 'right',
    sizeC = 'md',
    align = 'center',
    externalStyle,
    oneToOne,
    gap,
    outlined,
    noSize,
    ...buttonProps
  } = props;

  // handle icon alignment
  const alignIcon = iconAlign === 'left' ? 'row' : 'row-reverse';

  const generateFancyStyle = generateFancyButton({
    $iconAlign: iconAlign,
    $icon: Boolean(icon),
    $sizeC: sizeC,
    $oneToOne: oneToOne ?? (Boolean(!label) && Boolean(icon)),
    $justifyContent: leftRightCenterToFlexJustify[align ?? 'center'],
    $outlined: outlined,
    $noSize: noSize,
  });

  return (
    <Button
      sizeC={sizeC}
      noSize={true}
      outlined={outlined}
      externalStyle={css`
        ${generateFancyStyle};
        ${externalStyle};
      `}
      {...(buttonProps as TButton)}
    >
      <FancyContent direction={alignIcon} gapBetweenIcon={gap}>
        {label && (
          <FancyContent.Title fontVariant={sizeSettings[sizeC ?? 'md'].fontSize} themeType={buttonProps.textColor}>
            {label}
          </FancyContent.Title>
        )}
        {(isLoading || icon) && (
          <FancyContent.Icon sizeC={sizeC}>
            {isLoading ? <LoadingSVGArrows isLoading={isLoading} /> : icon}
          </FancyContent.Icon>
        )}
      </FancyContent>
    </Button>
  );
}

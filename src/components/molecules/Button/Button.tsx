import { TButtonWithNativeAttrs } from './Button.model';
import { ButtonStyle, StyledButton } from './Button.style';

// --------------------------------------------------------------------------- //
// --------------- A normal Button with Style from the Theme ----------------- //
// --------------------------------------------------------------------------- //
export default function Button(props: TButtonWithNativeAttrs) {
  const {
    children,
    wide,
    sizeC = 'md',
    themeType = 'accent',
    layer = 0,
    textColor,
    disabled,
    borderRadius,
    hoverColor,
    outlined,
    externalStyle,
    textHover,
    notAButton,
    noSize,
    ...htmlProps
  } = props;

  const Button = () => (
    <ButtonStyle
      $sizeC={sizeC}
      $borderRadius={borderRadius}
      $wide={wide}
      $themeType={themeType}
      $layer={layer}
      $textColor={textColor}
      $hoverColor={hoverColor}
      $outlined={outlined}
      $externalStyle={externalStyle}
      $textHover={textHover}
      $disabled={disabled}
      $noSize={noSize}
    >
      {children}
    </ButtonStyle>
  );

  return (
    <>
      {notAButton ? (
        <Button {...htmlProps} />
      ) : (
        <StyledButton $wide={wide} {...htmlProps}>
          <Button />
        </StyledButton>
      )}
    </>
  );
}

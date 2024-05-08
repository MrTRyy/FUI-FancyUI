import { TextAvatar } from '@/components/molecules/TextAvatar';
import { TFancyProfilePictureWithHTMLAttrs } from './TFancyProfilePicture.model';
import { FancyImageWrapper } from '@/components/atoms/FancyImageWrapper';

// --------------------------------------------------------------------------- //
//  ProfilePicture component to render with  different sizes and border radius //
// --------------------------------------------------------------------------- //
export default function FancyProfilePicture(props: TFancyProfilePictureWithHTMLAttrs) {
  const {
    borderRadius = 'complete',
    sizeC = 'md',
    nickname = 'User',
    externalStyle,
    textAvatarSettings,
    children,
    ...htmlProps
  } = props;

  return children ? (
    <FancyImageWrapper
      aspectRatio="1/1"
      sizeW={sizeC}
      externalStyle={externalStyle}
      borderRadius={borderRadius}
      {...htmlProps}
    >
      {children}
    </FancyImageWrapper>
  ) : (
    <TextAvatar
      {...textAvatarSettings}
      borderRadius={borderRadius}
      sizeC={sizeC}
      text={nickname}
      externalStyle={externalStyle}
    />
  );
}

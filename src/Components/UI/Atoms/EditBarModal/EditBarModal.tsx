import React from 'react';
import { IEditBarModal } from './IEditbarModal.model';
import { Wrapper,  WrapperContent } from './EditBarModal.style';

import ModalTitleArea from '../ModalTitleArea/ModalTitleArea';


export default function EditBarModal(props: IEditBarModal) {
  const { children, width, spacingLeftRight, title } = props;

  return (
    <Wrapper $spacingLeftRight={spacingLeftRight} $width={width}>
      {title && <ModalTitleArea title={title} />}
      <WrapperContent>
        {children}
      </WrapperContent>
    </Wrapper>
  );
}

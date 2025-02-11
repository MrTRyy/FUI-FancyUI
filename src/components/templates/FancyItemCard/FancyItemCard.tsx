'use client';

import { TFancyItemCard } from './TFancyItemCard.model';
import { Card } from '@/components/molecules/Card';

export default function FancyItemCard(props: TFancyItemCard) {
  const { image, title, subtitle, description, externalStyle, contentGap, align } = props;

  return (
    <Card externalStyle={externalStyle}>
      <Card.Box direction="column" align={align ?? 'flex-start'} gap={contentGap ?? '4px'} padding={'lg'}>
        <Card.Image {...image} />
        <Card.SubTitle {...subtitle} />
        <Card.Title fontWeight="bold" {...title} />
        <Card.Descritpion {...description} />
      </Card.Box>
    </Card>
  );
}

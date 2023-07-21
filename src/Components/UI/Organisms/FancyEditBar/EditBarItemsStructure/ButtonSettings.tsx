import editBarIcons from './EditBarIcons';
import { languagesEditBarEN } from '../languagesEditBar';
const language = languagesEditBarEN;
import { IFancyBottomBarIcon } from '../../../Atoms/FancyBottomBarIcon/FancyBottomBarIcon.model';
import { useEditBarStore } from '../../../Molecules/EditBar/EditBar.state';

const setActiveBarItem = useEditBarStore.getState().setActiveEditbarItem;
const setActiveSecondBarItem = useEditBarStore.getState().setActiveSecondEditbarItem;

type TButtonSettings = {
  [key: string]: IFancyBottomBarIcon;
};

const groupButtons: TButtonSettings = {
  color: {
    id: 'color',
    label: language.sectionSectionBox.color.label,
    icon: editBarIcons.color,
    handler: () => setActiveBarItem('color'),
  },
  distance: {
    id: 'distance',
    label: language.sectionSectionBox.distance.label,
    icon: editBarIcons.distance,
    handler: () => setActiveBarItem('distance'),
  },
  border: {
    id: 'border',
    label: language.sectionSectionBox.border.label,
    icon: editBarIcons.border,
    handler: () => setActiveBarItem('border'),
  },
  shadow: {
    id: 'shadow',
    label: language.sectionSectionBox.shadow.label,
    icon: editBarIcons.shadow,
    handler: () => setActiveBarItem('shadow'),
  },
};

const buttonSettings: TButtonSettings = {
  color: {
    id: 'color',
    label: language.sectionSectionBox.color.label,
    icon: editBarIcons.color,
    handler: () => setActiveSecondBarItem('color'),
  },
  distanceVertical: {
    id: 'distanceVertical',
    label: language.settings.distanceVertical.label,
    icon: editBarIcons.distanceVertical,
    handler: () => setActiveSecondBarItem('distanceVertical'),
  },
  distanceHorizontal: {
    id: 'distanceHorizontal',
    label: language.settings.distanceHorizontal.label,
    icon: editBarIcons.distanceHorizontal,
    handler: () => setActiveSecondBarItem('distanceHorizontal'),
  },
  distanceLeft: {
    id: 'distanceLeft',
    label: language.settings.distanceLeft.label,
    icon: editBarIcons.distanceLeft,
    handler: () => setActiveSecondBarItem('distanceLeft'),
  },
  distanceRight: {
    id: 'distanceRight',
    label: language.settings.distanceRight.label,
    icon: editBarIcons.distanceRight,
    handler: () => setActiveSecondBarItem('distanceRight'),
  },
  distanceTop: {
    id: 'distanceTop',
    label: language.settings.distanceTop.label,
    icon: editBarIcons.distanceTop,
    handler: () => setActiveSecondBarItem('distanceTop'),
  },
  distanceBottom: {
    id: 'distanceBottom',
    label: language.settings.distanceBottom.label,
    icon: editBarIcons.distanceBottom,
    handler: () => setActiveSecondBarItem('distanceBottom'),
  },
  thikness: {
    id: 'thikness',
    label: language.settings.thikness.label,
    icon: editBarIcons.thikness,
    handler: () => setActiveSecondBarItem('thikness'),
  },
  radius: {
    id: 'radius',
    label: language.settings.radius.label,
    icon: editBarIcons.radius,
    handler: () => setActiveSecondBarItem('radius'),
  },
  strength: {
    id: 'strength',
    label: language.settings.strength.label,
    icon: editBarIcons.thikness,
    handler: () => setActiveSecondBarItem('strength'),
  },
};

export default buttonSettings;
export { groupButtons };

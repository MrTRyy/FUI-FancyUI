import type { Meta, StoryObj } from '@storybook/react';

import { SVGChevronRight } from '@/components/icons';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';
import FancyButton from '../FancyButton';

const meta = {
  component: FancyButton,
  title: 'components/organisms/FancyButton',
  parameters: {
    docs: {
      description: {
        component:
          'The FancyButton component is a versatile button organism designed to incorporate additional styling and functionality on top of the basic button features. It supports loading states, customizable alignment, icons, and text labels, making it suitable for a wide range of use cases where an interactive element with rich feedback is required.',
      },
    },
  },
  argTypes: {
    ...templateThemeType('allThemeTypes', 'accent', 1),
    outlined: {
      description: 'This prop will change the Nutton to outlined',
      control: {
        type: 'boolean',
      },
    },
    sizeC: {
      description: 'This prop will change the size of the button',
      options: ['sm', 'md', 'lg', undefined],
      control: {
        type: 'select',
      },
    },
    iconAlign: {
      description: 'This prop will align the icon inside the button to the left or right from the text',
      control: {
        type: 'radio',
      },
      table: {
        defaultValue: { summary: 'left' },
      },
    },
    borderRadius: {
      description: 'This prop will change the borderRadius of the button',
      control: {
        type: 'object',
      },
    },
    isLoading: {
      description: 'Indicates if the button is in a loading state.',
      control: {
        type: 'boolean',
      },
    },
    textColor: {
      description: 'This prop will change the color of the text',
      control: {
        type: 'select',
      },
    },
    hoverColor: {
      description: 'This prop will change the color of the hover',
      control: {
        type: 'select',
      },
    },
    wide: {
      description: 'This prop will change the width of the button',
      control: {
        type: 'boolean',
      },
    },
    as: {
      description:
        'This prop will change the tag of the button to a different tag it can be used to get only the style as span an wrapp it like example with a next/link',
      control: {
        type: 'select',
      },
    },
    label: {
      description: 'The label of the button',
      control: {
        type: 'text',
      },
    },
    oneToOne: {
      description: 'This prop will make the button a square (1/1) if there is no label and a icon',
      control: {
        type: 'boolean',
      },
    },
    gap: {
      description: 'This prop will change the gap between the icon and the label',
      control: {
        type: 'text',
      },
    },
    externalStyle: {
      description: 'This prop will change the style of the button',
      control: {
        type: 'object',
      },
    },
    disabled: {
      description: 'If true, the component will be disabled.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
    },
    notAButton: {
      description: 'This prop will change the button to a span to use a own wapper like next link',
      control: {
        type: 'boolean',
      },
    },
    noSize: {
      description: 'This prop will remove the size of the button like padding and size',
      control: {
        type: 'boolean',
      },
    },
    backgroundStrength: {
      description: 'This prop will change the background strength of the button',
      control: {
        type: 'text',
      },
    },
    textHover: {
      description: 'This prop will change the text hover color of the button',
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof FancyButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <FancyButton {...args} />,
  args: {
    icon: <SVGChevronRight />,
    themeType: 'accent',
    label: 'Button',
    sizeC: 'md',
    align: 'center',
    layer: 0,
    outlined: false,
    isLoading: false,
    wide: false,
    borderRadius: ['sm', 'sm'],
  },
};

export const Outlined: Story = {
  render: (args) => <FancyButton {...args} />,
  args: {
    icon: <SVGChevronRight />,
    themeType: 'accent',
    label: 'Button',
    sizeC: 'md',
    align: 'center',
    layer: 0,
    outlined: true,
    isLoading: false,
    wide: false,
  },
};

export const OneToOne: Story = {
  render: (args) => <FancyButton {...args} />,
  args: {
    icon: <SVGChevronRight />,
    themeType: 'accent',
    sizeC: 'md',
    align: 'center',
    layer: 0,
    outlined: true,
    isLoading: false,
    wide: false,
  },
};

export const Loading: Story = {
  render: (args) => <FancyButton {...args} />,
  args: {
    icon: <SVGChevronRight />,
    themeType: 'accent',
    label: 'Button',
    sizeC: 'md',
    align: 'center',
    layer: 0,
    outlined: false,
    isLoading: true,
    wide: false,
  },
};

export const Disabled: Story = {
  render: (args) => <FancyButton {...args} />,
  args: {
    icon: <SVGChevronRight />,
    themeType: 'accent',
    label: 'Button',
    sizeC: 'md',
    align: 'center',
    layer: 0,
    outlined: false,
    isLoading: false,
    wide: false,
    disabled: true,
  },
};

export const Wide: Story = {
  render: (args) => <FancyButton {...args} />,
  args: {
    icon: <SVGChevronRight />,
    themeType: 'accent',
    label: 'Button',
    sizeC: 'md',
    align: 'center',
    layer: 0,
    outlined: false,
    isLoading: false,
    wide: true,
  },
};

export const NoSize: Story = {
  render: (args) => <FancyButton {...args} />,
  args: {
    icon: <SVGChevronRight />,
    themeType: 'accent',
    label: 'Button',
    sizeC: 'md',
    align: 'center',
    layer: 0,
    outlined: false,
    isLoading: false,
    wide: false,
    noSize: true,
  },
};

export const Transparent: Story = {
  render: (args) => <FancyButton {...args} />,
  args: {
    icon: <SVGChevronRight />,
    themeType: 'transparent',
    label: 'Button',
    sizeC: 'md',
    align: 'center',
    textHover: 'secondary',
    layer: 0,
    outlined: false,
    isLoading: false,
    wide: false,
  },
};

export const Secondary: Story = {
  render: (args) => <FancyButton {...args} />,
  args: {
    icon: <SVGChevronRight />,
    themeType: 'secondary',
    label: 'Button',
    sizeC: 'md',
    align: 'center',
    layer: 0,
    outlined: false,
    isLoading: false,
    wide: false,
  },
};

export const PrimaryStyled: Story = {
  render: (args) => <FancyButton {...args} />,
  args: {
    icon: <SVGChevronRight />,
    themeType: 'primary',
    label: 'Button',
    sizeC: 'md',
    align: 'center',
    layer: 1,
    outlined: false,
    isLoading: false,
    wide: false,
  },
};

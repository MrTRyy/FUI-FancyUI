import type { Meta, StoryObj } from '@storybook/react';

import FancyModalHeadLine from '../FancyModalHeadLine';

const meta = {
  component: FancyModalHeadLine,
  title: 'components/molecules/FancyModalHeadLine',
  parameters: {
    docs: {
      description: {
        component:
          'The `FancyNavBar` component is a flexible navigation bar built on top of the `RawNav` atomic component, designed to be used across various parts of a React application. It allows for the integration of custom styles via the `styled-components` library, making it highly customizable. This component accepts children, which means any React component or HTML element can be nested inside it, providing a straightforward way to create a navigational structure that fits the needs of different UIs. Additionally, it inherits HTML attributes, offering further customization and accessibility options.',
      },
    },
  },
  argTypes: {
    alignCenter: {
      description:
        'Determines whether the content (title, subtitle, and the horizontal rule) should be centered. Defaults to `true`.',
      control: {
        type: 'boolean',
      },
    },
    title: {
      description:
        'The main title text to be displayed. If not provided, no title will be shown. It Supports React nodes, we recomend to use the Typography as prop.',
      control: {
        type: 'text',
      },
    },
    subTitle: {
      description:
        'The subtitle text to be displayed beneath the title. If not provided, no subtitle will be shown. It Supports React nodes, we recomend to use the Typography as prop',
      control: {
        type: 'text',
      },
    },
    hr: {
      description:
        'Determines whether a decorative horizontal rule (`<hr>`) should be displayed beneath the title and subtitle. FancyLine Props can be passed here.',
      control: {
        type: 'object',
      },
    },
    onXButtonClick: {
      description:
        'Callback function that is triggered when the X button is clicked. If not provided, the X button will not be displayed.',
      control: {
        type: 'function',
      },
    },
    gapBetweenText: {
      description:
        'The amount of space between the title and subtitle. This can be set to any of the predefined spacings in the theme. Defaults to `xxs`.',
      control: {
        type: 'select',
      },
    },
  },
} satisfies Meta<typeof FancyModalHeadLine>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <FancyModalHeadLine {...args} />,
  args: {
    alignCenter: true,
    title: 'Title',
    subTitle: 'SubTitle',
    hr: {},
  },
};

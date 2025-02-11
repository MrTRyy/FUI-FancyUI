// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import SystemMessage from '../SystemMessage';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';
// Define metadata for the story
const meta = {
  component: SystemMessage,
  title: 'components/atoms/SystemMessage',
  parameters: {
    docs: {
      description: {
        component:
          'The `SystemMessage` component displays text messages with colors indicating different system states like success, error, info, or warning.',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    ...templateThemeType('notTransparent', 'primary', 0),
    systemMessageType: {
      description: 'The system message type',
      type: { name: 'string', required: false },
      options: ['error', 'warning', 'info', 'success', undefined],
      control: { type: 'select' },
    },
    textSettings: {
      description: 'The props for the typography component.',
      control: {
        type: 'object',
      },
    },
    showMessage: {
      description: 'The flag to show or hide the message. We use this to prevent Jumping of the content.',
      control: {
        type: 'boolean',
      },
    },
    externalStyle: {
      description: 'The external style for the component.',
      control: {
        type: 'object',
      },
    },
  },
} satisfies Meta<typeof SystemMessage>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <SystemMessage {...args} />,
  args: {
    children: 'This is a system message',
    systemMessageType: 'error',
    themeType: 'secondary',
    layer: 0,
    textSettings: {
      variant: 'subTextFootnote',
      lineHeight: 1,
    },
    externalStyle: {
      marginTop: '10px',
    },
  },
};

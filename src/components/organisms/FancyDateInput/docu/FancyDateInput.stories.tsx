// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import FancyDateInput from '../FancyDateInput';
import { SVGCheckMark } from '@/components/icons/SVGCheckMark';
import { useState } from 'react';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';

// Define metadata for the story
const meta = {
  component: FancyDateInput,
  title: 'components/organisms/FancyDateInput',
  parameters: {
    docs: {
      description: {
        component:
          '`FancyDateInput` is a customizable date input component for React applications, encapsulating functionality such as displaying an icon, a label, system messages, and handling various input states like active, disabled, and filled. It´s designed to provide a richer user experience compared to standard date inputs.',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    label: {
      description: 'Label for the input',
      control: {
        type: 'text',
      },
      defaultValue: {
        summary: '',
      },
    },
    align: {
      description: 'Alignment of the label',
      control: {
        type: 'select',
      },
      defaultValue: {
        summary: 'left',
      },
    },
    disabled: {
      description: 'Disable the input',
      control: {
        type: 'boolean',
      },
      defaultValue: {
        summary: false,
      },
    },
    ...templateThemeType('mainThemeTypes', 'primary', 2),
    systemMessage: {
      description: 'Error message to be displayed',
      control: {
        type: 'object',
      },
      defaultValue: {
        summary: '',
      },
    },
    placeholder: {
      description: 'Placeholder for the input',
      control: {
        type: 'text',
      },
      defaultValue: {
        summary: '',
      },
    },
    icon: {
      description: 'Icon for the input',
    },
    isActive: {
      description: 'Active state of the input',
      control: {
        type: 'boolean',
      },
      defaultValue: {
        summary: false,
      },
    },
    value: {
      description: 'Value of the input',
      control: {
        type: 'text',
      },
    },
    type: {
      description: 'Type of the input',
      control: {
        type: 'select',
      },
      defaultValue: {
        summary: 'date',
      },
    },
    transparentBackground: {
      description: 'Transparent background of the input',
      control: {
        type: 'boolean',
      },
      defaultValue: {
        summary: false,
      },
    },
    as: {
      description: 'The component to render the input as',
      control: {
        type: 'as',
      },
    },
    externalStyle: {
      description: 'External style for the input',
      control: {
        type: 'object',
      },
    },
    hasValue: {
      description: 'Value of the input',
      control: {
        type: 'boolean',
      },
    },
    labelVariant: {
      description: 'Variant of the label',
      control: {
        type: 'select',
      },
    },
    outlined: {
      description: 'Outlined input',
      control: {
        type: 'boolean',
      },
    },
    outlinedBackgroundStrength: {
      description: 'Background strength of the outlined input',
      control: {
        min: 0,
        max: 1,
        step: 0.1,
        type: 'number',
      },
    },
  },
} satisfies Meta<typeof FancyDateInput>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

const HelperFunctions = (props: any) => {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return <FancyDateInput value={value} onChange={handleChange} {...props} />;
};

// Define the primary story
export const Primary: Story = {
  render: (args) => <HelperFunctions {...args} />,
  args: {
    label: 'Date',
    align: 'left',
    disabled: false,
    placeholder: 'PlaceHolder',
    themeType: 'primary',
    layer: 2,
    icon: <SVGCheckMark />,
  },
};

export const WithErrorState: Story = {
  render: (args) => <HelperFunctions {...args} />,
  args: {
    label: 'Date',
    align: 'left',
    disabled: false,
    themeType: 'primary',
    layer: 2,
    systemMessage: {
      message: 'This is an error message',
      type: 'error',
    },
  },
};

export const WithSuccessState: Story = {
  render: (args) => <HelperFunctions {...args} />,
  args: {
    label: 'Date',
    align: 'left',
    disabled: false,
    themeType: 'primary',
    layer: 2,
    systemMessage: {
      message: 'This is an success message',
      type: 'success',
    },
  },
};

export const WithInfoState: Story = {
  render: (args) => <HelperFunctions {...args} />,
  args: {
    label: 'Date',
    align: 'left',
    disabled: false,
    themeType: 'primary',
    layer: 2,
    systemMessage: {
      message: 'This is an info message',
      type: 'info',
    },
  },
};

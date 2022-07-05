import { withDesign } from "storybook-addon-designs";
import "./empty-state";

export default {
  title: "Components/Empty Page State",
  argTypes: {
    headline: { 
      control: 'text', 
      defaultValue: 'You don\'t have access to this area',
      description: 'Required. Sets the main message of the alert'
    },
    subtitle: { 
      control: 'text', 
      defaultValue: 'You don\'t have permission to view this application.\nPlease contact your system administrator for further details.',
      description: 'Optional. Sets a more detailed message below the title only if showSubtitle is also true.',
    },
    action: {
      control: 'boolean',
      defaultValue: false,
      description: 'Optional. Will render a button if true',
    },
    twoActions: {
      control: 'boolean',
      defaultValue: true,
      description: 'Optional. Will render two buttons if true',
    },
  },
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/b7geqz0aCeDo4NbzTBWAiw/Empty-states?node-id=19%3A115",
    },
  },
};
const Template = ({ headline, subtitle, action, twoActions }) => {
  return `
    <td-empty-state 
      headline="${headline}" 
      subtitle="${subtitle}"
    >
      <td-icon slot="icon" class="covalent-icon">teradata</td-icon>
      ${action && !twoActions ? '<td-button>Button Text</td-button>' : ''}
      ${twoActions ? 
      '<td-button>Button Text</td-button>\n\
       <td-button>Button Text</td-button>' 
       : ''
      }
  </td-empty-state>
  `;
};

export const KitchenSink = Template.bind({});
KitchenSink.args = {};

export const TitleOnly = Template.bind({});
TitleOnly.args = {
  subtitle: '',
  action: false,
  twoActions: false,
}

export const WithSubtitle = Template.bind({});
WithSubtitle.args = {
  action: false,
  twoActions: false,
}

export const OneAction = Template.bind({});
OneAction.args = {
  subtitle: '',
  action: true,
  twoActions: false,
}

export const TwoActions = Template.bind({});
TwoActions.args = {
  subtitle: '',
  action: false,
  twoActions: true,
}

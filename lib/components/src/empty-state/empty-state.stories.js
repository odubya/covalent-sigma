import { withDesign } from "storybook-addon-designs";
import "./empty-state";

export default {
  title: "Components/Empty Page State",
  argTypes: {
    headline: { 
      control: 'text', 
      defaultValue: 'You don\'t have access to this area',
      description: 'Mandatory. Sets the main message of the alert'
    },
    subtitle: { 
      control: 'text', 
      defaultValue: `You don\'t have permission to view this application.\nPlease contact your system administrator for further details.`,
      description: 'Optional. Sets a more detailed message below the title only if showSubtitle is also true.',
    },
    showSubtitle: {
      control: 'boolean',
      defaultValue: true,
      description: 'Optional. Shows subtitle if true',
    },
    action: {
      control: 'boolean',
      defaultValue: true,
      description: 'Optional. Will render a button if true',
    },
    twoActions: {
      control: `boolean`,
      defaultValue: true,
      description: 'Optional. Will render two buttons if true',
    }
  },
  decorators: [withDesign],
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/b7geqz0aCeDo4NbzTBWAiw/Empty-states?node-id=19%3A115",
    },
  },
};
const Template = ({ headline, subtitle, showSubtitle, action, twoActions }) => {
  return `
    <td-empty-state
      headline="${headline}"
      subtitle="${showSubtitle ? subtitle : ''}"
      ${action ? 'action' : ''}
      ${twoActions ? 'twoActions' : ''}
    >
    </td-empty-state>
  `;
};

export const Subtitle = Template.bind({});
Subtitle.args = {}

export const TitleOnly = Template.bind({});
TitleOnly.args = {
  showSubtitle: false,
  action: false,
  twoActions: false,
}

export const WithSubtitle = Template.bind({});
WithSubtitle.args = {
  showSubtitle: true,
  action: false,
  twoActions: false,
}

export const OneAction = Template.bind({});
OneAction.args = {
  showSubtitle: false,
  action: true,
  twoActions: false,
}

export const TwoActions = Template.bind({});
TwoActions.args = {
  showSubtitle: false,
  action: false,
  twoActions: true,
}

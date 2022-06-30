import { withDesign } from "storybook-addon-designs";
import "./empty-state";

export default {
  title: "Components/Empty Page State",
  argTypes: {
    title: { 
      control: 'text', 
      defaultValue: 'You don\'t have access to this area',
      description: 'Sets the main message of the alert'
    },
    subtitle: { 
      control: 'text', 
      defaultValue: 'You don\'t have permission to view this application. \nPlease contact your system administrator for further details.',
      description: 'Sets a more detailed message below the title',
    },
    showSubtitle: {
      control: 'boolean',
      defaultValue: false,
      description: 'Shows subtitle if true',
    },
    action: {
      control: 'boolean',
      defaultValue: false,
      description: 'Will render a button if true',
    },
    twoActions: {
      control: `boolean`,
      defaultValue: false,
      description: 'Will render two buttons if true',
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
const Template = ({ title, subtitle, showSubtitle=false, action=false, twoActions=false }) => {
  return `
    <td-empty-state
      title="${title}"
      subtitle="${subtitle}"
      showSubtitle="${showSubtitle}"
      action="${action}"
      twoActions="${twoActions}"
    >
    </td-empty-state>
  `;
};


export const Title = Template.bind({});
Title.args = {
  showSubtitle: false,
  action: false,
  twoActions: false,
};

export const Subtitle = Template.bind({});
Subtitle.args = {
  showSubtitle: true,
}

import { withDesign } from "storybook-addon-designs";
import "./empty-state";
import "../icon/icon";
import "../card/card";

export default {
  title: "Components/Empty State",
  argTypes: {
    // Page args
    pageHeadline: { 
      control: 'text', 
      defaultValue: 'You don\'t have access to this area',
      description: 'Required. Sets the main message of the alert'
    },
    pageSubtitle: { 
      control: 'text', 
      defaultValue: 'You don\'t have permission to view this application.\nPlease contact your system administrator for further details.',
      description: 'Optional. Sets a more detailed message below the title only if showSubtitle is also true.',
    },
    pageAction: {
      control: 'boolean',
      defaultValue: false,
      description: 'Optional. Will render a button if true',
    },
    pageTwoActions: {
      control: 'boolean',
      defaultValue: true,
      description: 'Optional. Will render two buttons if true',
    },
    icon: {
      control: 'text',
      defaultValue: 'teradata',
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
// Show all empty state components
export const KitchenSink = ({ pageHeadline, pageSubtitle, pageAction, pageTwoActions, icon  }) => {
  return `
    <td-empty-state 
      headline="${pageHeadline}" 
      subtitle="${pageSubtitle}"
      icon="${icon}"
    >
      <td-icon slot="icon" class="covalent-icon">teradata</td-icon>
      ${pageAction && !pageTwoActions ? '<td-button slot="buttons">Button Text</td-button>' : ''}
      ${pageTwoActions ? 
      '<td-button slot="buttons">Button Text</td-button>\n\
       <td-button slot="buttons">Button Text</td-button>' 
       : ''
      }
  </td-empty-state>  
  `;
};

// Page empty state
const Page = ({ pageHeadline, pageSubtitle, pageAction, pageTwoActions, icon }) => {
  return `
  <td-empty-state 
    headline="${pageHeadline}" 
    subtitle="${pageSubtitle}"
    icon="${icon}"
  >
    <td-icon slot="icon" class="covalent-icon">teradata</td-icon>
    ${pageAction && !pageTwoActions ? '<td-button slot="buttons">Button Text</td-button>' : ''}
    ${pageTwoActions ? 
    '<td-button slot="buttons">Button Text</td-button>\n\
    <td-button slot="buttons">Button Text</td-button>' 
   : ''
  }
</td-empty-state>`
}

export const PageTitleOnly = Page.bind({});
PageTitleOnly.args = {
  pageSubtitle: '',
  pageAction: false,
  pageTwoActions: false,
}
export const PageWithSubtitle = Page.bind({});
PageWithSubtitle.args = {
  pageAction: false,
  pageTwoActions: false,
}
export const PageOneAction = Page.bind({});
PageOneAction.args = {
  pageSubtitle: '',
  pageAction: true,
  pageTwoActions: false,
}
export const PageTwoActions = Page.bind({});
PageTwoActions.args = {
  pageSubtitle: '',
  pageAction: false,
  pageTwoActions: true,
}

// Card empty state
const Card = ({ cardOutlined, cardTitle, pageHeadline, pageSubtitle, pageAction, pageTwoActions }) => {
  return `
    <td-card 
      cardTitle='${cardTitle}'
      ${cardOutlined ? 'outlined' : ''}
    >
      <td-empty-state 
      headline="${pageHeadline}" 
      subtitle="${pageSubtitle}"
      slot="empty-state"
      >
          ${pageAction && !pageTwoActions ? '<td-button slot="buttons">Button Text</td-button>' : ''}
          ${pageTwoActions ? 
          '<td-button slot="buttons">Button Text</td-button>\n\
          <td-button slot="buttons">Button Text</td-button>' 
        : ''
        }
      </td-empty-state>
      
    </td-card>
  `
}

export const CardNoAction = Card.bind({});
CardNoAction.args = {
  cardOutlined: false,
  pageAction: false,
  pageTwoActions: false,
  pageHeadline: '',
  pageSubtitle: 'You don\'t have access to this area',
  cardTitle: 'Card Title',
}

export const CardWithAction = Card.bind({});
CardWithAction.args = { 
  cardOutlined: false,
  pageAction: true,
  pageTwoActions: false,
  pageHeadline: '',
  pageSubtitle: 'You don\'t have access to this area',
  cardTitle: 'Card Title',
};
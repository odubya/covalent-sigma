import './card';
import * as tableContent from '../../../../stories/demos/table.content.html';


export default {
  title: 'Components/Cards',
  argTypes: {
    outlined: {
      control: 'boolean',
      defaultValue: false,
    },
    actionBar: {
      control: 'boolean',
      defaultValue: true,
    },
    cardTitle: {
      control: 'text',
      defaultValue: ''
    },
  },
};

export const Basic = ({ outlined, actionBar, cardTitle }) => {
return `
  <td-card 
    cardTitle='${cardTitle}'
    ${actionBar ? 'actionBar' : ''}
    ${outlined ? 'outlined' : '' }
  >
    <div slot="card-content">${tableContent}</div>
    <div slot="card-actions" class="mdc-card__action-buttons">
      <button class="mdc-button mdc-card__action mdc-card__action--button">
        <div class="mdc-button__ripple"></div>
        <span class="mdc-button__label">Action 1</span>
      </button>
      <button class="mdc-button mdc-card__action mdc-card__action--button">
        <div class="mdc-button__ripple"></div>
        <span class="mdc-button__label">Action 2</span>
      </button>
    </div>
    <div slot="card-actions" class="mdc-card__action-icons">
      <button class="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon"
        title="Share">share</button>
      <button class="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon"
        title="More options">more_vert</button>
    </div>
  </td-card>
  `;
};

export const Outline = Basic.bind({})
Outline.args = {
  outlined: true,
  cardTitle: '',
}

const EmptyState = ({ outlined, emptyAction, actionBar, cardTitle }) => {
  return `
    <td-card 
      cardTitle='${cardTitle}'
      ${outlined ? 'outlined' : ''}
      ${actionBar ? 'actionBar' : ''}
    >
      <div slot="empty-state">
        <h6 class="mdc-typography--caption" style="margin:16px;">You don't have access to this area</h6>
        ${emptyAction ? `<td-button>Button Text</td-button>` : ''}
      </div>
    </td-card>
  `
}

export const EmptyStateNoAction = EmptyState.bind({});
EmptyStateNoAction.args = {
  outlined: false,
  emptyAction: false,
  actionBar: false,
  cardTitle: 'Card Title',
}

export const EmptyStateWithAction = EmptyState.bind({});
EmptyStateWithAction.args = { 
  outlined: false,
  emptyAction: true,
  actionBar: false,
  cardTitle: 'Card Title',
};
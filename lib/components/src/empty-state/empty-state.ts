import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators";
import styles from './empty-state.scss';
import '../icon/icon';

declare global {
  interface HTMLElementTagNameMap {
   'td-empty-state': CovalentEmptyStateBase;
  }
}

@customElement('td-empty-state')
export class CovalentEmptyStateBase extends LitElement {
  static override styles = [styles];
  
  @property({type: String}) headline = '';
  @property({type: String}) subtitle = '';
  @property({type: Boolean}) showSubtitle = false;
  @property({type: Boolean}) action = false; 
  @property({type: Boolean}) twoActions = false;
  override render() {
    return html`
      <div class="content mdc-typography">
        <div class="icon-background">
          <td-icon class="covalent-icon">teradata</td-icon>
        </div>
        ${this.headline ? html`<h6 class="mdc-typography--headline6">${this.headline}</h6>` : html``}
        ${this.subtitle ? html`<p key={line} class="mdc-typography--caption">${this.subtitle.split(/\n/).map(line => {
          return html`${line}<br>`
        })}</p>` : html``}
        ${this.action || this.twoActions ? 
        html`<div class="buttonContainer">
          ${this.action || this.twoActions ? html`<td-button>Button Text</td-button>` : html``}
          ${this.twoActions ? html`<td-button>Button Text</td-button>` : html``}
        </div>` 
        : html``}
      </div>
    `;
  }
}
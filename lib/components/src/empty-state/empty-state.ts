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
  @property() override title: string = '';
  @property() subtitle: string = '';
  @property() showSubtitle: boolean = false;
  @property() action: boolean = false; 
  @property() twoActions: boolean = false;
  override render() {
    return html`
      <div class="content mdc-typography">
        <div class="icon-background">
          <td-icon class="covalent-icon icon" slot="icon">teradata</td-icon>
        </div>
        ${console.log(this.showSubtitle, this.action, this.twoActions)}
        ${this.title ? html`<h6 class="mdc-typography--headline6">${this.title}</h6>` : html``}
        ${this.subtitle && this.showSubtitle ? html`<p key={line} class="mdc-typography--caption">${this.subtitle}</p>` : html``}
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
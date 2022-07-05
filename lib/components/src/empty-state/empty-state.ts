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

  override render() {
    return html`
      <div class="content mdc-typography">
        <div class="icon-background">
          <slot name="icon"></slot>
        </div>
        ${this.headline ? html`<h6 class="mdc-typography--headline6">${this.headline}</h6>` : html``}
        ${this.subtitle ? html`
        <p key={line} class="mdc-typography--caption">
          ${this.subtitle.split(/\n/).map(line => { return html`${line}<br>`})}
        </p>` : html``}
        <div class="buttonContainer">
          <slot></slot>
        </div>
      </div>
    `;
  }
}
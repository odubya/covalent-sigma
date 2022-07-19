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
  @property({type: String}) icon = '';
  override render() {
    return html`
      <style>
        .content {
          width: 632px; 
          height: 300px;
          display: flex; 
          flex-direction: column; 
          align-items: center; 
          justify-content: center;
          text-align: center;
        }
        .icon-background {
          display: flex;
          justify-content: center;
          align-items: center;
          width:96px;
          height:96px;
          border-radius: 50%;
          background-color: var(--mdc-theme-background);
          margin-left: auto;
          margin-right: auto;
        }
        .covalent-icon {
          font-size: 40px;
        }
        .mdc-typography--headline6 {
          margin: 16px 0 8px 0;
          font-weight: 600 !important;
        }
        .mdc-typography--caption {
          margin: 0;
          font-size: 12px;
          color: var(--mdc-theme-text-secondary-on-background);
        }
        .buttonContainer {
          display: flex;
          gap: 0 20px;
          margin-top: 16px;
        }
        h6 {
          margin: 16px;
        }
      </style>
      <div class="content mdc-typography">
        ${this.icon ? html`
        <div class="icon-background">
          <td-icon class='covalent-icon'>${this.icon}</td-icon>
        </div>` : ''}
        ${this.headline ? html`<h6 class="mdc-typography--headline6">${this.headline}</h6>` : ''}
        ${this.subtitle ? html`
        <p key={line} class="mdc-typography--caption" style=${this.headline ? '' : 'margin-top:16px;'}>
          ${this.subtitle.split(/\n/).map(line => { return html`${line}<br>`})}
        </p>` : ''}
        <div class="buttonContainer" style=${this.subtitle ? '' : 'margin-top:0;'}>
          <slot name="buttons"></slot>
        </div>
      </div>
    `;
  }
}
import { html, LitElement } from 'lit';
import { classMap } from 'lit/directives/class-map';
import { property } from 'lit/decorators';

export class CardBase extends LitElement {
  /**
   * The title of the card
   */
  @property()
  cardTitle = '';

  /**
   * The sub-title of the card
   */
  @property()
  subTitle = '';

  @property({type: Boolean}) actionBar = false;
  /**
   * Style the card as an outline variant
   */
  @property({type: Boolean}) outlined = false;
  @property({type: String}) emptyCaption = '';
  override render() {
    const classes = {
      'mdc-card': true,
      'mdc-card--outlined': this.outlined,
    };
    return html`
      <style>
        hr {
          opacity: 0.12;
          width: 100%;
          margin: 0;
        }
        h6 {
          margin: 16px;
        }
        .empty-state {
          padding: 50px; 
          width: 400px; 
          height: 100px; 
          display: flex; 
          flex-direction: column; 
          align-items: center; 
          justify-content: center;
        }  
      </style>
      <div class="${classMap(classes)}">
      ${this.cardTitle ? 
        html`
          <div class="mdc-card__actions mdc-typography--headline5">${this.cardTitle}</div>
          <hr>
        ` : ''}
        <div class="mdc-card__primary-action">
          <slot name="card-content"></slot>
          <slot name="empty-state"></slot>
          ${this.emptyCaption ? 
          html`<div class='empty-state'}>
            <h6 class="mdc-typography--caption">${this.emptyCaption}</h6>
            <slot name="emptyAction"></slot>
          </div>` : ''}
        </div>
        ${this.actionBar ? 
        html`
          <div class="mdc-card__actions">
            <slot name="card-actions"></slot>
          </div>
        ` : ''}
      </div>`;
  }
}
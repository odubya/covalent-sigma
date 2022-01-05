
import { addHasRemoveClass, BaseElement } from '@material/mwc-base/base-element';
import { observer } from '@material/mwc-base/observer';
import { MDCBannerAdapter } from '@material/banner/adapter';
import { CloseReason } from '@material/banner/constants';

//TODO REMOVE ONCE default export is fixed
import MDCBannerFoundation from './foundation';


import {html, property, query, TemplateResult} from 'lit-element';
import {classMap} from 'lit-html/directives/class-map';

export class ActionRibbonBase extends BaseElement {
  protected mdcFoundation!: MDCBannerFoundation;

  protected readonly mdcFoundationClass = MDCBannerFoundation;

  @query('.mdc-banner') protected mdcRoot!: HTMLElement;
  @query('.mdc-banner__content') protected mdcContent!: HTMLElement;

  @property({type: Boolean, reflect: true})
  @observer(function(this: ActionRibbonBase, value: boolean) {
    if (this.mdcFoundation) {
      if (value) {
        this.mdcFoundation.open();
      } else {
        this.mdcFoundation.close(this.reason);
        this.reason = CloseReason.UNSPECIFIED;
      }
    }
  })
  open = false;

  @property({type: String}) labelText = '';

  @property({type: String}) icon = '';

  @property({type: Boolean}) centered = true;
   
  /**
   * The state representation active|negative|positive|caution
   */
  @property()
  state = '';
  
  protected reason: CloseReason = CloseReason.UNSPECIFIED;

  protected override render() {
    const classes = {
      'mdc-banner': true,
      'negative': this.state === 'negative',
      'positive': this.state === 'positive',
      'caution': this.state === 'caution',
      'active': this.state === 'active',
      'mdc-banner--centered': this.centered,
    };
    return html`
      <div class="${classMap(classes)}" role="banner">
      <div class="mdc-banner__content"
          role="alertdialog"
          aria-live="assertive">

        <div class="mdc-banner__graphic-text-wrapper">
          ${this.icon ? this.renderIcon() : ''}
          <div class="mdc-banner__text">
            ${this.labelText}
          </div>
        </div>
        <div class="mdc-banner__actions">
            <slot name="action-items"></slot>
        </div>
      </div>
    </div>`;
  }

  /** @soyTemplate */
  protected renderIcon(): TemplateResult {
    return html`
    <div class="mdc-banner__graphic" role="img" alt="">
      <slot name="icon">
        <mwc-icon class="mdc-banner__icon">
        ${this.icon}
        </mwc-icon>        
      </slot>
    </div>`;
  }

  protected createAdapter(): MDCBannerAdapter {
    return {
      ...addHasRemoveClass(this.mdcRoot),
      getContentHeight: () => {
        return this.mdcContent.offsetHeight;
      },
      setStyleProperty: (property: any, value: string) => {
        this.mdcRoot.style.setProperty(property, value);
      },
      trapFocus: () => {
      },
      releaseFocus: () => {
      },
      notifyClosed: (reason: CloseReason) => {
        // this.dispatchEvent(new CustomEvent<MDCSnackbarCloseEventDetail>(
        //     CLOSED_EVENT,
        //     {bubbles: true, cancelable: true, detail: {reason: reason}}));
      },
      notifyClosing: (reason: CloseReason) => {
        this.open = false;
        // this.dispatchEvent(new CustomEvent(
        //     CLOSING_EVENT,
        //     {bubbles: true, cancelable: true, detail: {reason: reason}}));
      },
      notifyOpened: () => {
        // this.dispatchEvent(
        //     new CustomEvent(OPENED_EVENT, {bubbles: true, cancelable: true}));
      },
      notifyOpening: () => {
        this.open = true;
        // this.dispatchEvent(
        //     new CustomEvent(OPENING_EVENT, {bubbles: true, cancelable: true}));
      },
    };
  }

  /** @export */
  show() {
    this.open = true;
  }

  /** @export */
  close(reason = CloseReason.UNSPECIFIED) {
    this.reason = reason;
    this.open = false;
  }

  protected override firstUpdated() {
    super.firstUpdated();
    if (this.open) {
      this.mdcFoundation.open();
    }
  }
}
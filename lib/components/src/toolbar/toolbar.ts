import { customElement, property } from "lit/decorators.js";
import styles from './toolbar.scss';
import { TopAppBarBase } from '@material/mwc-top-app-bar/mwc-top-app-bar-base';
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";

declare global {
  interface HTMLElementTagNameMap {
    'td-toolbar': CovalentToolbarBase,
  }
}

@customElement('td-toolbar')
export class CovalentToolbarBase extends TopAppBarBase {
  @property({type: Number}) breadcrumbs = 0;
  
  static override styles = [styles];
  override render() {
    // Create dummy data for the toolbar breadcrumbs.
    let path: any[] = [];
    if(this.breadcrumbs > 5) {
      path.push(html`<span>Section title <td-icon>chevron_right</td-icon> ... <td-icon>chevron_right</td-icon> </span>`);
      path.push('Page title');
    }
    else {
      for(let i = 0; i < this.breadcrumbs; i++) {
        if(i == this.breadcrumbs-1) {
          path.push(`Page title`);
        }
        else {
          path.push(html`<span>Section title <td-icon>chevron_right</td-icon> </span>`);
        }
      }
    }
    const divider = {
      'divider': this.breadcrumbs,
    };
    return html`
      <header class="mdc-top-app-bar">
        <div class="mdc-top-app-bar__row ${classMap(divider)}">
          <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
            <slot name="title" slot="title"></slot>
          </section>
          <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
            <slot name="iconActions" slot="actionItems"></slot>
            <slot name="buttonActions" slot="actionItems" class="desktop"></slot>
          </section>
        </div>
        ${this.breadcrumbs ? html`<div class="path">${path}</div>` : ''}
      </header>
    `
  }
}
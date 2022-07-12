import { customElement, property } from "lit/decorators";
import styles from './toolbar.scss';
import { TopAppBarBase } from '@material/mwc-top-app-bar/mwc-top-app-bar-base';
import { html } from "lit";

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
    const path: any[] = [];
    for(let i = 0; i < this.breadcrumbs; i++) {
      if(i == this.breadcrumbs-1) {
        path.push(html`Page Title`);
      }
      else {
        path.push(html`<span>Section title > </span>`);
      }
    }

    return html`
      <td-top-app-bar>
        <slot name="title" slot="title"></slot>
        <slot name="iconActions" slot="actionItems"></slot>
        <slot name="buttonActions" slot="actionItems"></slot>
      </td-top-app-bar>
      ${this.breadcrumbs ? html`<td-top-app-bar>
        <div slot="title" class="path">${path}</div>
      </td-top-app-bar>` : ''}
    `
  }
}
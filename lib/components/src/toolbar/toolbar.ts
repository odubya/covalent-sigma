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
  @property({type: Boolean}) breadcrumbs = false;

  static override styles = [styles];
  override render() {
    return html
    `
    <td-top-app-bar>
      <slot name="title" slot="title"></slot>
      <slot name="iconActions" slot="actionItems"></slot>
      <slot name="buttonActions" slot="actionItems"></slot>
    </td-top-app-bar class="breadcrumbs">
    ${this.breadcrumbs ? html`<td-top-app-bar>
      <div slot="title">Section title > Section title > Page title</div>
    </td-top-app-bar>` : ''}
    `
  }
}
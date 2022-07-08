import { customElement, property } from "lit/decorators";
import { styles } from '@material/mwc-top-app-bar/mwc-top-app-bar.css';
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
            <style>
                td-top-app-bar {
                    --mdc-theme-primary: var(--mdc-theme-surface);
                    --mdc-theme-on-primary: var(--mdc-theme-text-primary-on-background);
                    border-bottom: solid 2px rgba(0,0,0,0.12);
                }
                [name="buttonActions"]::slotted(*) {
                    margin: 8px;
                }
                [name="breadcrumbs"]::slotted(*) {
                    padding-top: 20px;
                }
            </style>
            <td-top-app-bar>
                <slot name="title" slot="title"></slot>
                <slot name="iconActions" slot="actionItems"></slot>
                <slot name="buttonActions" slot="actionItems"></slot>
            </td-top-app-bar class="breadcrumbs">
            ${this.breadcrumbs ? html`<td-top-app-bar>
                <div slot="title">hello > hello > hello</div>
            </td-top-app-bar>` : ''}
        `
    }
}
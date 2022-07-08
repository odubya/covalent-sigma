import { customElement } from "lit/decorators";
import { styles } from '@material/mwc-top-app-bar/mwc-top-app-bar.css';
// import { TopAppBarBase } from '@material/mwc-top-app-bar/mwc-top-app-bar-base';
import { html, LitElement } from "lit";

declare global {
    interface HTMLElementTagNameMap {
        'td-toolbar': CovalentToolbarBase,
    }
}

@customElement('td-toolbar')
export class CovalentToolbarBase extends LitElement {
    static override styles = [styles];
    override render() {
        return html
        `
            <style>
                td-top-app-bar {
                    --mdc-theme-primary: white;
                    border-bottom: solid 2px rgba(0,0,0,0.12);
                }
                [name="buttonActions"]::slotted(td-button) {
                }
            </style>
            <td-top-app-bar>
                <slot name="title" slot="title"></slot>
                <slot name="iconActions" slot="actionItems"></slot>
                <slot name="buttonActions" slot="actionItems"></slot>
            </td-top-app-bar>
        `
    }
}
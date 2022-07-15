import { html, LitElement } from "lit";
import { customElement, state } from "lit/decorators";
import { classMap } from "lit/directives/class-map";
import styles from './tree-list-item.scss';

declare global {
    interface HTMLElementTagNameMap {
        'td-tree-list-item': CovalentTreeListItem,
    }
}

@customElement('td-tree-list-item')
class CovalentTreeListItem extends LitElement {
    static override styles = [styles];
    // Internal state to check if an item is open.
    @state() isOpen = false;
    
    override render() {
        const arrowIcon = this.isOpen ? 'arrow_drop_down' : 'arrow_right';
        const arrow =  html`<td-icon>${arrowIcon}</td-icon>`;
        const icon = html`<td-icon>description</td-icon>`;
        const classes = {
            'hidden': !this.isOpen,
            'visible': this.isOpen,
        };
        // The nest slot should only take td-tree-list-item components. Otherwise display "No results".
        return html`
            <div class="container">
                <div class="itemContent" @click="${this._handleClick}">
                    ${arrow}
                    ${icon}
                    <slot name="content"></slot>
                </div>
                <slot name="nest" class="${classMap(classes)}">
                    <div class="endOfNest">
                        No results
                    </div>
                </slot>
            </div>
        `
    }

    private _handleClick() {
        this.isOpen = !this.isOpen;
    }
}
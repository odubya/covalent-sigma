import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators";
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
    // Check if a list item is open.
    @property({type: Boolean}) isOpen = false;
    // Optional icon for each list item.
    @property({type: String}) icon = '';
    override render() {
        // Class map for showing/hiding an item's content.
        const classes = {
            'hidden': !this.isOpen,
            'visible': this.isOpen,
        };
        // Classes that animate the arrows.
        const animation = {
            'open': this.isOpen,
            'close': !this.isOpen
        };
        const arrowIcon = 'arrow_right';
        const icon = html`<td-icon>${this.icon}</td-icon>`;
        const arrow =  html`<td-icon class="${classMap(animation)} arrowIcon">${arrowIcon}</td-icon>`;
        // The nest slot should only take td-tree-list-item components. Otherwise use default value and display "No results".
        return html`
            <div class="itemContent" @click="${this._handleClick}">
                <div class="mainContent">
                    ${arrow}
                    ${icon}
                    <slot name="label"></slot>
                </div>
                <slot name="extraContent"></slot>
            </div>
            <slot name="nest" class="${classMap(classes)}">
                <div class="endOfNest ${classMap(classes)}">
                    No results
                </div>
            </slot>
        `
    }
    // Toggles the dropdown for a list item.
    private _handleClick() {
        this.isOpen = !this.isOpen;
        // Create and emit the select event; the tree-list component is listening for this.
        let event = new CustomEvent('select', {
            detail: {
                message: `Emitting an event from ${this}`,
            },
            bubbles: true,
            composed: true,
        });
        this.dispatchEvent(event);
    }
}
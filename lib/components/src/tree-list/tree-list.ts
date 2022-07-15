import { html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators";
import styles from './tree-list.scss';

declare global {
    interface HTMLElementTagNameMap {
        'td-tree-list': CovalentTreeList,
    }
}
// Wraps td-tree-list-item components
@customElement('td-tree-list')
class CovalentTreeList extends LitElement {
    static override styles = [styles];
    @property({type: Boolean}) nested = false;
    @state() isOpen = false;
    override render() {
        return html`
        <div class="container">
            <slot></slot> 
        </div>
        `
    }
}
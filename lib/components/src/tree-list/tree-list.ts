import { html, LitElement } from "lit";
import { customElement } from "lit/decorators";
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
    override render() {
        return html`
        <div class="container">
            <slot></slot> 
        </div>
        `
    }
}
// Create event listener for td-tree-list-item's select event
document.addEventListener('select', (e: Event) => {handleSelect(e)});
const handleSelect = (e: Event): void => {
    // All td-tree-list-item components.
    const items = Array.from(document.querySelectorAll('td-tree-list-item'));
    
    // Currently selected item.
    const target = e.target as HTMLElement;
    const current = target.shadowRoot!.querySelector('div.itemContent');
    
    // Find previously selected element and remove the styling.
    items.forEach(item => {
        item.shadowRoot!.querySelector('div.itemContent')?.classList.remove('selected');
    })

    // Add the selected styling to the currently selected class
    current!.classList.add('selected');
}
import { customElement } from 'lit/decorators';
import { CardBase } from './card-base';
import styles from '../card/card.scss';

declare global {
    interface HTMLElementTagNameMap {
        'td-card': CovalentCardBase;
    }
}

@customElement('td-card')
export class CovalentCardBase extends CardBase {

  static override styles = [styles];  
}
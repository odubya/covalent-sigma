import { RadioBase } from '@material/mwc-radio/mwc-radio-base';
import { styles as radioStyle } from '@material/mwc-radio/mwc-radio.css';
import styles from './icon-radio.scss';
import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

declare global {
    interface HTMLElementTagNameMap {
        'td-icon-radio-item': CovalentIconRadioToggleBase;
    }
}

@customElement('td-radio-icon')
export class CovalentIconRadioToggleBase extends RadioBase {
    static override styles = [styles, radioStyle];  
    @property({type:String}) width = "200";
    @property({type:String}) height = "160";
    @property({type:Boolean}) iconOnly = false;
    override render() {
    const classes = {
        'checked': this.checked,
    };
    return html`
        <div class="${classMap(classes)} container" style="--width:${this.width == 'fill' ? `100%` : `${this.width}px`}; --height:${this.height}px;" @click="${() => {this.checked = true}}">
            <input type="radio" class="mdc-radio__native-control"></input>
            <div class="mdc-radio__background">
                <div class="mdc-radio__outer-circle"></div>
                <div class="mdc-radio__inner-circle"></div>
            </div>
            <slot name="icon"></slot>
            ${this.iconOnly ? '' : html`<div><slot name="text"></slot></div>` }
        </div>
    `
    }
}
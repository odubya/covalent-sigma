
import { DialogBase } from '@material/mwc-dialog/mwc-dialog-base';
import { styles } from '@material/mwc-dialog/mwc-dialog.css';
import { customElement } from 'lit/decorators';

declare global {
    interface HTMLElementTagNameMap {
        'td-sidesheet': CovalentSidesheetBase;
    }
}

@customElement('td-sidesheet')
export class CovalentSidesheetBase extends DialogBase {

  static override styles = [styles];  
} 

/*import { DrawerBase } from '@material/mwc-drawer/mwc-drawer-base';
import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map';
console.log(classMap)

import styles from './app-shell.scss';

import '@material/mwc-icon-button';
import '@material/mwc-top-app-bar-fixed';


declare global {
  interface HTMLElementTagNameMap {
   'td-sidesheet': Covalentsidesheet;
  }
}


 /**
  * App Shell element.
  *
  * @slot - This element has a slot
  */
 /*@customElement('td-sidesheet')
 export class Covalentsidesheet extends DrawerBase {
   
  static override styles = [styles];
 
   override render() {
    

    return html
    
   }
  } */
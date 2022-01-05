import { LitElement, html} from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import styles from './app-shell.scss';

// import '@material/mwc-button';
// import '@material/mwc-drawer';
// import '@material/mwc-top-app-bar';
// import "@material/mwc-top-app-bar-fixed";
// import '@material/mwc-icon-button';
// import '@material/mwc-list/mwc-list';
// import '@material/mwc-list/mwc-list-item';
// import '@material/mwc-icon';

 /**
  * App Shell element.
  *
  * @slot - This element has a slot
  */
 @customElement('td-app-shell')
 export class CovalentAppShell extends LitElement {

   static override styles = [styles];

   /**
    * The name of the application to show in the small app bar
    */
    @property()
    appName = '';
 
   /**
    * The type of drawer to show -- updates based on media size
    */
   @property()
   type = 'modal';

   @property()
   navItems = [{
     label: 'Vantage',
     icon: 'teradata',
     iconCls: 'covalent-icon',
   },{
     label: 'Editor',
     icon: 'product_editor',
     iconCls: 'covalent-icon',
   },{
    label: 'Sites',
    icon: 'server',
    iconCls: 'covalent-icon',
  },{
    label: 'Data Protections',
    icon: 'settings_backup_restore',
  },{
    label: 'Identity',
    icon: 'contacts',
  }];

   @query('mwc-drawer')
   drawer: any;

   @query('navigation-rail')
   navigationRail: any;

   resizeEvent () {
    const mql = window.matchMedia('(max-width: 800px)');
    if (mql.matches && this.type !== 'modal') {
      this.type = 'modal';
      this.requestUpdate();
    } else if (!mql.matches && this.type !== 'dismissible') {
      this.type = 'dismissible';
      this.requestUpdate();
    }
   };

   override connectedCallback() {
      super.connectedCallback();

      window.addEventListener('resize', () => {
        this.resizeEvent();
      });
   }

   override disconnectedCallback() {
     super.disconnectedCallback();
     window.removeEventListener('resize', this.resizeEvent);
   }

   constructor() {
     super();
     
     this.resizeEvent();
   }


   renderNavItem (item: any, isHomeItem: boolean) {
     if (isHomeItem) {
        return html`<mwc-list-item class="home-item" @click=${this._onClickItem} graphic="avatar">
                <span>${item.label}</span>
                <mwc-icon slot="graphic" class="covalent-icon" >teradata_nocircle</mwc-icon>
                <mwc-icon slot="graphic" class="home-icon">home</mwc-icon>
              </mwc-list-item>`;
     } else {
       return html`<mwc-list-item @click=${this._onClickItem} graphic="avatar">
                  <span>${item.label}</span>
                  <mwc-icon class="${item.iconCls}" slot="graphic">${item.icon}</mwc-icon>
              </mwc-list-item>`
     }
   }

   override render() {

    return html`
       <mwc-drawer id="drawer" type="${this.type}" @MDCDrawer:closed="${this._drawerClosed}">
        <div class="drawer-content">
            <mwc-top-app-bar-fixed id="drawer-app-bar" >
            <mwc-icon-button slot="navigationIcon" @click=${this._onClick} class="toggle-drawer" onClick="" icon="menu"></mwc-icon-button>
            <svg slot="title" class="logo-light" style="width:100px;" viewBox="0 0 696 133" fit=""  preserveAspectRatio="xMidYMid meet" focusable="false">
                <path class="logo-text" fill="#354145" d="M78.882 72.796h45.059c-3.178-11.966-12.153-17.201-22.063-17.201-9.348 0-20.005 5.609-22.996 17.201zm70.3 17.388H78.134c2.43 13.462 11.965 21.689 23.37 21.689 7.292 0 16.453-.936 23.185-12.34l22.062 4.673C138.524 123.652 121.884 133 101.504 133c-26.362 0-47.864-20.006-47.864-49.36s21.502-49.547 48.238-49.547c24.867 0 46.368 19.258 47.304 47.678v8.413zM387.843 83.64c0-17.201-13.275-28.045-26.549-28.045-14.958 0-26.176 10.844-26.176 28.045s11.218 27.858 26.176 27.858c13.274 0 26.549-10.657 26.549-27.858zm24.68 46.555h-24.68v-8.039c-7.479 6.918-17.762 10.844-30.85 10.844-23.745 0-45.807-20.006-45.807-49.36s22.062-49.547 45.807-49.547c13.088 0 23.371 3.926 30.85 10.844v-44h24.68v129.258zM630.3 92.427c0 11.966-11.406 20.941-24.493 20.941-9.536 0-15.892-4.488-15.892-11.406 0-6.356 5.234-10.656 13.088-10.656H630.3v1.121zm-15.893-55.31v-.024h-34.108v20.565h34.108c9.536 0 15.893 4.107 15.893 13.455v1.497h-26.923c-23.559 0-37.021 11.966-37.021 29.914 0 18.322 14.21 30.476 35.525 30.476 12.714 0 22.062-4.3 28.419-10.47v7.665h23.558V69.244c0-22.162-15.615-31.627-39.451-32.127zM484.378 92.427c0 11.966-11.405 20.941-24.493 20.941-9.536 0-15.893-4.488-15.893-11.406 0-6.356 5.235-10.656 13.088-10.656h27.298v1.121zm-15.893-55.31v-.024h-34.108v20.565h34.108c9.535 0 15.893 4.107 15.893 13.455v1.497h-26.924c-23.559 0-37.02 11.966-37.02 29.914 0 18.322 14.21 30.476 35.524 30.476 12.714 0 22.062-4.3 28.42-10.47v7.665h23.557V69.244c0-22.162-15.614-31.627-39.45-32.127zM279.3 92.427c0 11.966-11.406 20.941-24.493 20.941-9.536 0-15.893-4.488-15.893-11.406 0-6.356 5.236-10.656 13.089-10.656H279.3v1.121zm-15.892-55.31v-.024h-34.109v20.565h34.109c9.535 0 15.892 4.107 15.892 13.455v1.497h-26.924c-23.558 0-37.02 11.966-37.02 29.914 0 18.322 14.21 30.476 35.525 30.476 12.714 0 22.062-4.3 28.419-10.47v7.665h23.558V69.244c0-22.162-15.614-31.627-39.45-32.127zM216.11 37.026c-15.144 0-25.989 6.043-33.467 16.887V36.899h-24.68v93.298h24.68v-30.102c0-25.989 10.47-42.319 33.28-42.319h1.121V37.029a141.28 141.28 0 00-.934-.003"></path>
                <path class="logo-text" fill="#354145" d="M48.982 107.707c-3.753 1.408-7.691 2.295-10.654 2.295-8.226 0-13.648-4.86-13.648-16.079V57.09h25.302V36.898H24.68V14.007H0v81.786C0 121.408 14.584 133 36.646 133c7.792 0 15.233-1.662 24.835-6.801-5.117-5.076-9.814-11.399-12.499-18.492M558.509 109.788c-.988.138-1.923.214-2.776.214-8.226 0-13.648-4.86-13.648-16.079V57.09h25.983V36.898h-25.983V14.007h-24.681v81.786c0 25.615 14.584 37.207 36.647 37.207 5.389 0 10.251-.794 15.913-2.983-7.319-5.243-10.165-13.736-11.455-20.229"></path>
                <path class="logo-dot" fill="#e46c42" d="M695.029 116.028c0 8.825-6.772 15.596-16.212 15.596s-16.212-6.771-16.212-15.596c0-8.413 6.772-15.801 16.212-15.801s16.212 7.388 16.212 15.801"></path>
            </svg> 
            </mwc-top-app-bar-fixed>

            <slot name="navigation"></slot>

            <div style="display:flex; flex:1;"></div>
            <div divider></div>

            <slot name="user-menu"></slot>
        </div>
      
        <div slot="appContent" style="display: flex; flex-direction: row; height: 100%;">
        <navigation-rail>
            <mwc-icon-button @click=${this._onClick} class="toggle-drawer" onClick="" icon="menu"></mwc-icon-button>

            <slot name="navigation-rail"></slot>
            <div style="display:flex; flex:1;"></div>

            <slot name="user-menu-rail"></slot>
        </navigation-rail>
        <div class="app-content">
            <mwc-top-app-bar-fixed centerTitle>
                <mwc-icon-button @click=${this._onClick} slot="navigationIcon" icon="menu"></mwc-icon-button>
                <span slot="title">${this.appName}</span>
            </mwc-top-app-bar-fixed>
            <div class="app-inner-content">
              <slot></slot>  
            </div>
            </div>
        </div>
    </mwc-drawer>`;
   }

   private _drawerClosed () {
     this.navigationRail?.classList.remove("drawer-open");
   }

   private _onClick() {

     this.drawer.open = !this.drawer?.open;

     if (this.drawer?.open) {
       this.navigationRail?.classList.add('drawer-open')
      } else {
       this.navigationRail?.classList.remove("drawer-open");  
      }
     this.dispatchEvent(new CustomEvent('count-changed'));
   }

   private _onClickItem() {

    this.dispatchEvent(new CustomEvent('navigation-item-click'));
   }

 }

 declare global {
   interface HTMLElementTagNameMap {
    'td-app-shell': CovalentAppShell;
   }
 }
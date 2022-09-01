import dialogComponent from '../../../../stories/demos/dialog.component';
import "./_sidesheet.theme.scss"
import {LitElement, html} from 'lit';


export default {  
  title: 'Components/Sidesheet',
  properties: {
    darkMode: {current: 'dark', stylePreview: true}

  }
};

const Template = ({ isDark }) => {

  return `<div class="containerDiv">
            <header class="mdc-top-app-bar">
              <style>
                .containerDiv{
                  background: white;
                  width: 100vw;
                  height: 100vh;
                }
                #root{
                  padding: 0!important;
                }

                .containerDiv .mdc-top-app-bar{
                  width:100vw;
                  background: #D3D3D3 ;
                  color: black;
                }               
                
                .material-icons {
                  font-size: 20px;
                  cursor: pointer;
                  background-color: #D3D3D3;
                  color: black;
                  margin-left: 1rem;
                  border: none;
                }

                .material-icons:hover{
                  color: #FFFFFF;
                }

              </style>

              <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
              rel="stylesheet">
              <div class="mdc-top-app-bar__row">
                <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
                <!--<button class="openbtn" onclick="openNav()">&#9776; </button>-->
                <a href="#" class="menu-bars" id="show-menu">
                <span class="material-icons">menu </span>
                </a>
                <!--<button class="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button" aria-label="Open navigation menu">menu</button>-->
                  <span class="mdc-top-app-bar__title"> SideSheet </span>
                </section>
                
              </div>

              <nav id="nav-menu">
                
                <ul class="nav-menu-items">
                <div class="mdc-top-app-bar__row-toggle"></div>
              </ul>
            </nav>
            <div class="overlay"></div>

              <style>
              .menu-bars{
                margin-left: 2rem;
                color: #000000;
                }

                #nav-menu{
                margin-top: 4rem;
                background-color: black;
                width: 30vw;
                height: 100vh;
                display: flex;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
                position: fixed;
                top: 0;
                left: -100%;
                transition: 850ms;
                }

                #nav-menu.active {
                  left: 0;
                  transition: 350ms;
                }
                
                .mdc-top-app-bar__row-toggle{
                  width: 100%;
                  height: 100px;
                  display: flex;
                  justify-content: start;
                }

                .mdc-top-app-bar__row-toggle a{
                  text-decoration: none;
                }
              
                .overlay {
                  display: none;
                  position: fixed;
                  top: 0;
                  bottom: 0;
                  left: 0;
                  right: 0;
                  z-index: 1;
                  background-color: rgba(0,0,0,0.9);
                }
                .overlay.enabled {
                  display: initial;
                }
              

              </style>
              
              <script>
              const openMenu = document.querySelector('#show-menu')
              const sideMenu = document.querySelector('#nav-menu')

              const overlay = document.getElementById("overlay")

              openMenu.addEventListener('click', function(){
                  if (sideMenu.classList.contains('active')) {
                    sideMenu.classList.remove('active')
                  }
                  else {
                    sideMenu.classList.add('active')

                    document.getElementById("overlay").enabled = true;
                  }
              })
            
            

              </script>
              
              <div class="${isDark ? `dark` : null }"> 
              <!--<td-dialog id="dialog1" heading="Dialog header" scrimClickAction="" open>
              Dialog body text
              <td-button slot="primaryAction">Action 2</td-button>
              <td-button slot="secondaryAction">Action 1</td-button>
              </td-dialog>-->
              </div>
          </header> 
        </div>`;
};


export const Basic = dialogComponent.bind({});
Basic.parameters = {
  docs: {
    inlineStories: false,
  },
};

export const Anatomy = Template.bind({});

Anatomy.parameters = {
  docs: {
    inlineStories: false,
  },
};

const templateLogout = ({}) => {

  return `<td-dialog id="example-logout" heading="You will be logged out soon" scrimClickAction="" open>
            Due to inactivity, you’ll be logged out in 3 minutes to protect your security.
            <td-button slot="primaryAction">Log out</td-button>
            <td-button slot="secondaryAction">Stay logged in</td-button>
          </td-dialog>`;
};

export const Logout = templateLogout.bind({});
Logout.parameters = {
  docs: {
    inlineStories: false,
  },
};

const templateUDF = ({}) => {

  return `<style>
              td-formfield {
                  margin-left: -.75rem;
              }
              .key-value {
                margin-bottom: .5rem;
                margin-top: .5rem;
              }
              .key-value--key {
                color: --mdc-theme-text-secondary-on-background;
              }
          </style>
          <td-dialog id="example-udf" heading="Delete User Defined Function" scrimClickAction="" open>
            
            <div class="key-value">
              <div class="key-value--key mdc-typography--caption">Function to delete</div>
              <div class="key-value--value">UDF_StrCpy</div>
            </div>
            <td-formfield label="I understand that all queries currently using this UDF will be canceled">
              <td-checkbox class="child"></td-checkbox>
            </td-formfield>
            <td-button slot="primaryAction" class="destructive primary" disabled>Delete</td-button>
            <td-button slot="secondaryAction">Cancel</td-button>
          </td-dialog>`;
};

export const UDF = templateUDF.bind({});
UDF.parameters = {
  docs: {
    inlineStories: false,
  },
};
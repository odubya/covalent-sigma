import { withDesign } from "storybook-addon-designs";
import './toolbar'

export default {
    title: 'Components/Toolbar',
    argTypes: {
        title: {
            control: 'text',
            defaultValue: 'Toolbar',
        },
        filter: {
            control: 'boolean',
            defaultValue: true,
        },
        search: {
            control: 'boolean',
            defaultValue: true,
        },
        add: {
            control: 'boolean',
            defaultValue: true,
        },
        action: {
            control: 'boolean',
            defaultValue: true,
        },
        secondaryAction: {
            control: 'boolean',
            defaultValue: true,
        },
    },
    parameters: {
        layout: "fullscreen",
    },
}

export const Toolbar = ({ title, filter, search, add, secondaryAction, action }) => {
    return `
        <td-toolbar>
            <div slot="title">${title}</div>
            ${filter ? '<td-icon-button icon="filter_list" slot="iconActions"></td-icon-button>' : ''}
            ${search ? '<td-icon-button icon="search" slot="iconActions"></td-icon-button>' : ''}
            ${add ? '<td-icon-button icon="add" slot="iconActions"></td-icon-button>' : ''}
            ${secondaryAction ? '<td-button outlined slot="buttonActions">BUTTON TEXT</td-button>' : ''}
            ${action ? '<td-button raised slot="buttonActions">BUTTON TEXT</td-button>' : ''}
        </td-toolbar>
    `
}
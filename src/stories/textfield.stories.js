import '@material/mwc-textfield';


export default {
  title: 'Example/Text field',
  argTypes: {
    style: {
      options: ['outlined', 'filled'],
      control: { type: 'radio' },
      defaultValue: 'outlined',
    },
  }
};

const Template = ({ icon, iconTrailing, label, style, required, helper }) => {

    return `
        <mwc-textfield 
            label="${label ?? style}"
            ${style}
            ${iconTrailing && icon ? `iconTrailing="${icon}"` : icon ? `icon="${icon}"` : null}
            ${helper ? `helper="${helper}"` : null}
            ${required ? `required` : null }>
        </mwc-textfield>`;
};

export const Basic = Template.bind({});

export const Required = Template.bind({});
Required.args = {
    required: true,
};

export const Icon = Template.bind({});
Icon.args = {
    icon: 'houseboat',
    iconTrailing: false,
}

export const HelperText = Template.bind({});
HelperText.args = {
    label: 'Click to see helper text',
    helper: 'Helper Text',
};
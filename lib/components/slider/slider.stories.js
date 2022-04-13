import '@material/mwc-slider';

export default {
  title: 'Example/Slider',
  argTypes: {
    discrete:  {
      control: 'boolean',
      defaultValue: false,
    },
    disabled:  {
      control: 'boolean',
      defaultValue: false,
    },
    markers:  {
      control: 'boolean',
      defaultValue: false,
    },
  }
};

const Template = ({ discrete, disabled, markers, value = 10 }) => {
    const progressBar = document.createElement('mwc-slider');
    progressBar.discrete = discrete;
    progressBar.disabled = disabled;
    progressBar.markers = markers;
    progressBar.value = value;
    progressBar.max = 50;
    progressBar.min = 5;
    
    if (markers) {
      progressBar.step = 5;
    }

    return progressBar;
};

export const Basic = Template.bind({});
Basic.args = {
}
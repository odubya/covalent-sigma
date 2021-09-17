import '@material/mwc-circular-progress';

export default {
  title: 'Example/Circular progress',
  argTypes: {
    progress: {
      control: { type: 'range', max: 1, min: 0, step: 0.1 },
    },
    density: {
      control: { type: 'range', defaultValue: 0, min: -8, max: 50 },
    },
  }
};

const Template = ({ density = 0, indeterminate, progress }) => {
    const progressBar = document.createElement('mwc-circular-progress');
    progressBar.density = density;
    progressBar.indeterminate = indeterminate;
    progressBar.progress = progress;

    return progressBar;
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  indeterminate: true,
}

export const Determinate = Template.bind({});
Determinate.args = {
  progress: 0.5,
}
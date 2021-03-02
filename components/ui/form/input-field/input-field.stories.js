import UiInput from '~/components/ui/form/input-field/input-field.vue';

const inputTypes = ['text', 'email', 'password', 'tel', 'url', 'number'];

export default {
  title: 'UI / Form / Input field',
  argTypes: {
    type: {
      defaultValue: inputTypes[0],
      control: {
        type: 'select',
        options: inputTypes,
      },
    },
    placeholder: {
      defaultValue: 'Input placeholder',
      control: {
        type: 'text',
      },
    },
    required: {
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { UiInput },
  props: Object.keys(argTypes),
  template: '<ui-form-input-field v-bind="$props" />',
});

export const InputFieldText = Template.bind({});

// States
InputFieldText.args = {
  type: 'text',
};

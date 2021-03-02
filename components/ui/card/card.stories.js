import UiCard from '~/components/ui/card/card.vue';

const variantOptions = ['white', 'alpha', 'beta', 'transparent', 'light'];
const colorOptions = ['body', 'dark', 'white'];
const shadowOptions = ['no-shadow', 'shadow-sm', 'shadow', 'shadow-lg'];

export default {
  title: 'UI / Card',
  component: UiCard,
  argTypes: {
    variant: {
      defaultValue: variantOptions[0],
      control: {
        type: 'select',
        options: variantOptions,
      },
    },
    color: {
      defaultValue: colorOptions[0],
      control: {
        type: 'select',
        options: colorOptions,
      },
    },
    shadow: {
      defaultValue: shadowOptions[0],
      control: {
        type: 'select',
        options: shadowOptions,
      },
    },
    content: {
      control: {
        type: 'text',
      },
      defaultValue: 'A label',
      description: 'Content slot',
      table: {
        type: {
          summary: 'Slot',
        },
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { UiCard },
  props: Object.keys(argTypes),
  template:
    '<ui-card v-bind="$props"><template v-slot:content>{{ content }}</template></ui-card>',
});

export const CardDefault = Template.bind({});

// States
CardDefault.args = {
  variant: 'white',
  color: 'body',
  shadow: 'no-shadow',
  content: 'Content slot.',
};

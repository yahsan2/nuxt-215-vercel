import UiButton from '~/components/ui/button/button.vue';

const iconTypes = ['arrow-left', 'arrow-right'];
const buttonVariants = ['dark', 'earth-500'];

export default {
  title: 'UI / Buttons / Button Default',
  argTypes: {
    variant: {
      defaultValue: 'earth-500',
      control: {
        type: 'select',
        options: buttonVariants,
      },
    },
    outline: {
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    tag: {
      control: {
        type: 'select',
        options: ['a', 'nuxt-link', 'button'],
      },
      defaultValue: 'a',
    },
    label: {
      defaultValue: 'Dit is een button',
      control: {
        type: 'text',
      },
    },
    icon: {
      control: {
        type: 'select',
        options: iconTypes,
      },
    },
    iconPosition: {
      control: {
        type: 'select',
        options: ['prepend', 'append'],
      },
    },
    size: {
      default: 'default',
      control: {
        type: 'select',
        options: ['small', 'default', 'large'],
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { UiButton },
  props: Object.keys(argTypes),
  template: '<ui-button v-bind="$props" />',
});

export const ButtonEarth500 = Template.bind({});

// States
ButtonEarth500.args = {
  variant: 'earth-500',
  label: 'shop nu',
  icon: 'arrow-right',
  iconPosition: 'append',
  size: 'default',
};

export const ButtonEarth500Small = Template.bind({});
ButtonEarth500Small.args = {
  ...ButtonEarth500.args,
  size: 'small',
};

export const ButtonBlackOutlineIconOnly = Template.bind({});
ButtonBlackOutlineIconOnly.args = {
  ...ButtonEarth500.args,
  label: '',
  variant: 'dark',
  outline: true,
};

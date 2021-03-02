import UiButtonScrollTop from '~/components/ui/button/button-scroll-top.vue';

const iconTypes = ['arrow-left', 'arrow-right'];
const buttonVariants = ['dark', 'earth-500'];

export default {
  title: 'UI / Buttons / Button Scroll to top',
  argTypes: {
    variant: {
      defaultValue: 'dark',
      control: {
        type: 'select',
        options: buttonVariants,
      },
    },
    icon: {
      control: {
        type: 'select',
        options: iconTypes,
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { UiButtonScrollTop },
  props: Object.keys(argTypes),
  template: '<ui-button-scroll-top v-bind="$props" />',
});

export const ButtonScrollToTopBlack = Template.bind({});
ButtonScrollToTopBlack.args = {
  variant: 'dark',
  icon: 'arrow-right',
};

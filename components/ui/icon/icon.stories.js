import UiIcon from './icon.vue';

const icons = [
  'arrow-down',
  'arrow-left',
  'arrow-right',
  'bicycle',
  'chat',
  'check',
  'chevron-down',
  'chevron-right',
  'close',
  'download',
  'edit',
  'hamburger-menu',
  'info',
  'minus',
  'play',
  'plus',
  'profile',
  'return',
  'shopping-bag',
  'shopping-bag-add',
  'star-rating-outline',
  'star-rating-solid',
  'stopwatch',
  'trash',
];
const iconSizes = ['small', 'default', 'large'];
const iconColors = ['dark', 'white'];

export default {
  title: 'UI / Icon',
  argTypes: {
    icon: {
      defaultValue: icons[0],
      control: {
        type: 'select',
        options: icons,
      },
    },
    size: {
      defaultValue: iconSizes[1],
      control: {
        type: 'select',
        options: iconSizes,
      },
    },
    color: {
      defaultValue: iconColors[0],
      control: {
        type: 'select',
        options: iconColors,
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { UiIcon },
  props: Object.keys(argTypes),
  template: '<ui-icon v-bind="$props" />',
});

export const IconArrowLeft = Template.bind({});

IconArrowLeft.args = {
  icon: 'arrow-left',
  size: iconSizes[1],
  color: iconColors[0],
};

export const IconShoppingBag = Template.bind({});

IconShoppingBag.args = {
  ...IconArrowLeft.args,
  icon: 'shopping-bag',
};

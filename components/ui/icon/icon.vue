<template>
  <component :is="icon" class="ui-icon" :class="[size, `text-${color}`]" />
</template>

<script>
// Import components for Storybook
import ArrowDown from '~/assets/svg/icons/arrow-down.svg';
import ArrowLeft from '~/assets/svg/icons/arrow-left.svg';
import ArrowRight from '~/assets/svg/icons/arrow-right.svg';
import Bicycle from '~/assets/svg/icons/bicycle.svg';
import Chat from '~/assets/svg/icons/chat.svg';
import Check from '~/assets/svg/icons/check.svg';
import ChevronDown from '~/assets/svg/icons/chevron-down.svg';
import ChevronRight from '~/assets/svg/icons/chevron-right.svg';
import Close from '~/assets/svg/icons/close.svg';
import Download from '~/assets/svg/icons/download.svg';
import Edit from '~/assets/svg/icons/edit.svg';
import HamburgerMenu from '~/assets/svg/icons/hamburger-menu.svg';
import Info from '~/assets/svg/icons/info.svg';
import Minus from '~/assets/svg/icons/minus.svg';
import Play from '~/assets/svg/icons/play.svg';
import Plus from '~/assets/svg/icons/plus.svg';
import Profile from '~/assets/svg/icons/profile.svg';
import Return from '~/assets/svg/icons/return.svg';
import ShoppingBag from '~/assets/svg/icons/shopping-bag.svg';
import ShoppingBagAdd from '~/assets/svg/icons/shopping-bag-add.svg';
import StarRatingOutline from '~/assets/svg/icons/star-rating-outline.svg';
import StarRatingSolid from '~/assets/svg/icons/star-rating-solid.svg';
import Stopwatch from '~/assets/svg/icons/stopwatch.svg';
import Trash from '~/assets/svg/icons/trash.svg';

export default {
  name: 'ui-icon',
  components: {
    ArrowDown,
    ArrowLeft,
    ArrowRight,
    Bicycle,
    Chat,
    Check,
    ChevronDown,
    ChevronRight,
    Close,
    Download,
    Edit,
    HamburgerMenu,
    Info,
    Minus,
    Play,
    Plus,
    Profile,
    Return,
    ShoppingBag,
    ShoppingBagAdd,
    StarRatingOutline,
    StarRatingSolid,
    Stopwatch,
    Trash,
  },
  props: {
    icon: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: 'default',
    },
    color: {
      type: String,
      default: 'dark',
    },
  },
};
</script>

<style lang="scss" scoped>
.ui-icon {
  &.small {
    width: $icon-size-sm;
    height: $icon-size-sm;
  }

  &.default {
    width: $icon-size;
    height: $icon-size;
  }

  &.large {
    width: $icon-size-lg;
    height: $icon-size-lg;
  }
}
</style>

<template>
  <button
    class="btn d-inline-flex align-items-center rounded-0 | btn-scroll-top"
    :class="variant ? `btn-${variant}` : ''"
    @click="scrollToTop"
  >
    <component v-if="icon" :is="`icon-${icon}`" />
  </button>
</template>

<script>
import iconArrowLeft from '~/assets/svg/icon-arrow-left.svg';
import iconArrowRight from '~/assets/svg/icon-arrow-right.svg';

export default {
  name: 'ui-button-scroll-to-top',
  components: {
    iconArrowLeft,
    iconArrowRight,
  },
  props: {
    variant: {
      type: String,
      default: 'dark',
    },
    icon: {
      type: String,
      required: true,
    },
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0 });
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  &.btn-scroll-top {
    padding: rem(16px);
  }
}
</style>

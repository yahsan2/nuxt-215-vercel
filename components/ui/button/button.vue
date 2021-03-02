<template>
  <component
    :is="tag"
    class="btn d-inline-flex align-items-center"
    :class="[
      outline ? `btn-outline-${variant}` : `btn-${variant}`,
      size === 'small' ? 'btn-sm' : size === 'large' ? 'btn-lg' : '',
      label ? '' : 'btn-icon-only',
    ]"
  >
    <component
      v-if="icon && iconPosition == 'prepend'"
      :is="`icon-${icon}`"
      class="mr-3"
    />
    <template v-if="label">
      {{ label }}
    </template>
    <component
      v-if="icon && iconPosition == 'append'"
      :is="`icon-${icon}`"
      :class="{ 'ml-3': label }"
    />
  </component>
</template>

<script>
import iconArrowLeft from '~/assets/svg/icon-arrow-left.svg';
import iconArrowRight from '~/assets/svg/icon-arrow-right.svg';

export default {
  name: 'ui-button',
  components: {
    iconArrowLeft,
    iconArrowRight,
  },
  props: {
    label: {
      type: String,
      default: null,
    },
    variant: {
      type: String,
      default: 'primary',
    },
    outline: {
      type: Boolean,
      default: false,
    },
    tag: {
      type: String,
      default: 'a',
    },
    icon: {
      type: String,
      default: null,
    },
    iconPosition: {
      type: String,
      default: null,
    },
    size: {
      type: String,
      default: '',
    },
  },
};
</script>

<template>
  <div class="card" :class="[`bg-${variant}`, `text-${color}`, shadow]">
    <div class="card-body">
      <slot name="content" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: {
    variant: {
      type: String,
      default: 'white',
    },
    color: {
      type: String,
      default: 'body',
    },
    shadow: {
      type: String,
      default: 'no-shadow',
    },
  },
};
</script>

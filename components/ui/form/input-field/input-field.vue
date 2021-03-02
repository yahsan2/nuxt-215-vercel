<template>
  <input
    class="form-control"
    :placeholder="placeholder"
    :type="type"
    :required="required"
  />
</template>

<script>
export default {
  name: 'input-field',
  props: {
    type: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: false,
      default: '',
    },
    required: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

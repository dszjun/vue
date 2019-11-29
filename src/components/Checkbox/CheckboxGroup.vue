<template>
  <div class="dy-checkbox-group" :class="{disabled: disabled}">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CheckboxGroup',
  props: {
    value: {
      type: Array,
      default () {
        return []
      }
    },
    disabled: {
      type: Boolean,
      default () {
        return true
      }
    }
  }
}
</script>

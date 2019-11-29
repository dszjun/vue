<template>
  <div :class="['dy-checkbox', {on: isChecked}]">
    <span @click.stop="check">{{ label }}
      <b v-if="isChecked" @click.stop="uncheck"> ×</b>
    </span>
  </div>
</template>

<script>

export default {
  name: 'CheckboxItem',
  props: {
    value: {
      type: [String, Number],
      default: null
    },
    label: {
      type: [String, Number],
      default: ''
    }
  },
  data () {
    return {
      model: this.$parent.value
    }
  },
  computed: {
    isChecked () {
      if (this.$parent.value.indexOf(this.value) > -1) {
        return true
      }
      return false
    }
  },
  watch: {
    model (val) {
      this.$parent.$emit('change', val)
      this.$parent.$emit('input', val)
    }
  },
  methods: {
    check () {
      const index = this.model.indexOf(this.value)
      index === -1 && this.model.push(this.value)
    },
    uncheck () {
      const index = this.model.indexOf(this.value)
      index > -1 && this.model.splice(index, 1)
    }
  }
}
</script>

import { validPhone } from '@/utils/validate'
export default {
  data () {
    return {
      valid: {
        phoneReg: true
      }
    }
  },
  methods: {
    validPhone (phone) {
      if (!validPhone(phone)) {
        this.$set(this.valid, 'phoneReg', false)
      }
    }
  }
}

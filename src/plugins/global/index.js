import Vue from 'vue'
import errorCode from './errorCode'

const Global = {
  install: function (Vue) {
    Vue.ERROR_CODE = errorCode
    window.ERROR_CODE = errorCode
    Object.defineProperties(Vue.prototype, {
      $ERROR_CODE: {
        get () {
          return errorCode
        }
      }
    })
  }
}
Vue.use(Global)

export default Global

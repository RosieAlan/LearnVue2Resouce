import { initMixin } from './init'

function Vue (options) {
  //options用户的选项
  this._init(options)
}
initMixin(Vue)

export default Vue

let Vue;

class Store {
  constructor(options = {}) {
    // 保存用户配置的mutations选项
    this._mutations = options.mutations || {}
    this._actions = options.actions || {}

    this._vm = new Vue({
      data: {
        $$state: options.state
      }
    })

    this.commit = this.commit.bind(this)
    this.dispatch = this.dispatch.bind(this)
  }

  get state() {
    return this._vm._data.$$state
  }
  set state(v) {
    console.error('please use replaceState to reset state');
  }

  commit(type, payload) {
    // 获取type对应的mutation
    const entry = this._mutations[type]
    if (!entry) {
      console.error(`unknown mutation type: ${type}`);
      return
    }
    // 指定上下文为Store实例
    // 传递state给mutation
    entry(this.state, payload)
  }

  dispatch(type, payload) {
    const entry = this._actions[type]
    if (!entry) {
      console.error(`unknown action type: ${type}`);
      return
    }
    // 异步结果处理常常需要返回Promise
    entry(this, payload)
  }
}
function install(_Vue) {
  Vue = _Vue;
  Vue.mixin({
    beforeCreate() {
      if (this.$options.store) {
        Vue.prototype.$store = this.$options.store;
      }
    }
  })
}
export default { Store, install }
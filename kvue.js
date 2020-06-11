
function defineReactive(obj, key, val) {
  observe(val)

  const dep = new Dep();
  Object.defineProperty(obj, key, {
    get() {
      console.log(`get ${key}:${val}`);
      Dep.target && dep.addDep(Dep.target)
      return val;
    },
    set(newVal) {
      if (newVal !== val) {
        console.log('set ' + key + ':' + newVal);
        // 如果传入的newVal依然是obj，需要做响应化处理
        observe(newVal)
        val = newVal

        dep.notify()
      }
    }
  })
}

function observe(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return
  }

  new Observer(obj)
}

class KVue {
  constructor(options) {
    this.$options = options;
    this.$data = options.data;

    observe(this.$data)

    proxy(this)

    new Compile(options.el, this)
  }
}

function proxy(vm) {
  Object.keys(vm.$data).forEach(key => {
    Object.defineProperty(vm, key, {
      get() {
        return vm.$data[key];
      },
      set(newVal) {
        vm.$data[key] = newVal;
      }
    })
  })
}

class Observer {
  constructor(value) {
    this.$value = value;
    this.walk(value);
  }
  walk(obj) {
    Object.keys(obj).forEach(key => {
      defineReactive(obj, key, obj[key])
    })
  }
}


// const watchers = [];

class Watcher {
  constructor(vm, key, updateFn) {
    this.vm = vm;
    this.key = key;
    this.updateFn = updateFn;

    // watchers.push(this)
    Dep.target = this;
    this.vm[this.key];
    Dep.target = null;
  }

  update() {
    this.updateFn.call(this.vm, this.vm[this.key])
  }
}


class Dep {
  constructor() {
    this.deps = [];
  }

  addDep(dep) {
    this.deps.push(dep)
  }
  notify() {
    this.deps.forEach(dep => {
      dep.update();
    })
  }
}
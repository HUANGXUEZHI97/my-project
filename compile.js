class Compile {
  constructor(el, vm) {
    this.$vm = vm;
    this.$el = document.querySelector(el);

    if (this.$el) {
      this.compile(this.$el);
    }
  }

  compile(el) {
    const childNodes = el.childNodes;
    Array.from(childNodes).forEach(node => {
      if (this.isElement(node)) {
        console.log('编译元素 ' + node.nodeName);
        this.compileElement(node);
      } else if (this.isInter(node)) {
        console.log('编译插值文本 ' + node.textContent);
        this.compileText(node);
      }
      if (node.childNodes && node.childNodes.length > 0) {
        this.compile(node);
      }
    })
  }

  isElement(node) {
    return node.nodeType === 1;
  }

  isInter(node) {
    return node.nodeType === 3 && /\{\{(.*)\}\}/.test(node.textContent)
  }

  isDirective(node) {
    return node.indexOf("k-") == 0
  }

  compileText(node) {
    // console.log(RegExp.$1);
    // node.textContent = this.$vm[RegExp.$1];
    this.update(node, RegExp.$1, 'text')
  }

  compileElement(node) {
    let nodeAttrs = node.attributes;
    Array.from(nodeAttrs).forEach(attr => {
      let attrName = attr.name;
      let exp = attr.value;
      if (this.isDirective(attrName)) {
        let dir = attrName.substring(2);
        this[dir] && this[dir](node, exp)
      }
    })
  }

  text(node, exp) {
    // node.textContent = this.$vm[exp]
    this.update(node, exp, 'text');
  }

  html(node, exp) {
    // node.innerHTML = this.$vm[exp]
    this.update(node, exp, 'html');
  }

  update(node, exp, dir) {
    const fn = this[dir + 'Updater'];
    fn && fn(node, this.$vm[exp])
    new Watcher(this.$vm, exp, function (val) {
      fn && fn(node, val)
    })
  }

  textUpdater(node, val) {
    node.textContent = val
  }

  htmlUpdater(node, val) {
    node.innerHTML = val
  }
}
// 类型注解

let var1: string;
var1 = 'string';


// 类型推论

const var2 = 'string';

// 原始类型：boolean/undefined/null/string/symbol/number/

let var3: string | undefined;

// 类型数组

let arr1: string[];
arr1 = ['arr'];

//任意类型

let var4: any;
var4 = 1
var4 = 'string'
var4 = undefined

let var5: any[];
var5 = [1, true, 'str', undefined];

//函数类型约束
function fn1(person: string): string {
  return 'hello' + person
}

const var6 = fn1('tom');

// void类型
// 函数没有返回值的声明

function fn2(): void {
  console.log('hello')
}

// 对象object

// good
function fn3(o: object) { }

// fn3(1) //no ok
fn3({ ob: 'sing' })

// best
function fn4(o: { prop: number }) {
  return o
}

fn4({ prop: 1 })

//类型别名 type，自定义类型

type Prop = { prop: number };
function fn5(o: Prop) {
  return fn5
}

// type和interface区别，基本完全相同
interface Prop1 { prop: number }

// 类型断言

const var7: any = 'this is a string';
console.log((var7 as string).length)

// 联合类型
let var8: string | number;
var8 = '1';
var8 = 1;

// no ok    &会将类型改为never，将不可被赋值
// let var9: string & number;
// var9 = 1

// 交叉类型
type first = { first: number }
type second = { second: string }

//扩展新的type。就是1+1=2，类型叠加
type FirstASecond = first & second

function fn6(): FirstASecond {
  return { first: 1, second: '2' }
}

// 函数
// 1.一旦设置了就是必填参
// 2.可选参msg1?: string | number
// 3.默认值msg2 = 'abc' 类型：string |undefined  默认值也是可选参的只不过不输入的话会指定默认值
// 4.没有标注返回值类型，则默认不返回 类型为void
function fn7(person: string, msg1?: string | number, msg2 = 'abc') {
  console.log(person);
  console.log(msg1);
  console.log(msg2);
  return person;
}
fn7('67', 1, 'str')
// fn7() //no ok


// 函数重载：场景主要源码和框架，函数用参数个数、类型或者返回值类型区分同名函数
// 先声明，在实现
// 同名声明有多个

function watch(cb1: () => void): void
function watch(cb1: () => void, cb2: (v1: any, v2: any) => void): void

function watch(cb1: () => void, cb2?: (v1: any, v2: any) => void) {
  if (cb1 && cb2) {
    console.log('run watch2')
  } else {
    console.log('run watch1')
  }
}

// 类
// 1.private 为私有属性，ES6中没有提供私有属性和方法，但是有提案：#前缀用来标注私有
// 2.protected 子类也可以用
// 3.get set存取器可以用，get可以当成是vue的computed
class Parent {
  private _foo = 'foo'
  protected bar = 'bar'

  constructor(public tua = 'tua') { }

  get foo() {
    return this._foo
  }
  set foo(v) {
    this._foo = v
  }
}

class Child extends Parent {
  say() {
    return this.bar
  }
}

const p = new Parent()
const c = new Child()


// 接口 interface
interface Prop2 { first: number, last: number }

function fn8(o: Prop2) {
  return 'Hello' + o.first + '-' + o.last
}

fn8({ first: 1, last: 2 })
// fn8({ first: 1 }) // no ok



// 泛型 Generis
// 1.泛型是类型别名的工厂函数：定义好固定类型和动态类型，泛型传入类型将动态改变动态类型


// 不使用泛型：
//  interface Result{
//   ok: 0 | 1,
//   data: Prop2[]
//  }

// 使用泛型：
interface Result<T> {
  ok: 0 | 1,
  data: T
}

//泛型方法
function fn9<T>(data: T): Result<T> {
  return { ok: 1, data }
}

// 用尖括号方式指定T为string
fn9<string>('hello')
//用类型推断指定T为number
fn9(1)

// 装饰器原理
//类装饰器表达式会在运行时当作函数被调用，类的构造函数作为其唯一的参数。
function log(target: Function) {
  // target是构造函数
  console.log(target === Foo); // true
  target.prototype.log = function () {
    console.log(this.bar);
  };
}

// 方法装饰器有三个参数
function dong(target: any, name: string, descriptor: any) {
  // 这里通过修改descriptor.value扩展了bar方法
  const baz = descriptor.value;
  descriptor.value = function (val: string) {
    console.log('dong~~');
    // 原始逻辑
    baz.call(this, val);
  }
  return descriptor
}

// 属性装饰器
function mua(option: string) {
  return function (target, name) {
    target[name] = option
  }
}


@log
class Foo {
  bar = "bar";

  @mua('mua~~')
  ns!: string;

  @dong
  setBar(val: string) {
    this.bar = val
  }
}

const foo = new Foo();
// @ts-ignore
foo.log();

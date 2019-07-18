TypeScript "for of" with "await" Demo
======================================

下面这种语法：

```
for (const x in array) {
  await doSomething(x);
} 
```

对于array中的每一个元素x，会按顺序一个执行完了`doSomething`才会执行另一个。

```
npm install
npm run demo
```

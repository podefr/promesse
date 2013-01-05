Promesse - Emily's Promise/A+ v. 1.3.1
=======================================

To use Promesse, simply install it from the npm registry.

```bash
npm install promesse
```

Then require it in your node.js scripts.

```js
var Promesse = require("promesse").Promesse;

var myPromise = new Promesse;

// The rest is like any Promise/A+ implementations
myPromise.fulfill();

```

For more info on how to use it, have a look at the official Emily's documentation:

https://github.com/flams/emily/wiki/Promise

Testing Promesse
==================

Promesse can be tested against Domenic Denicola's test suite: https://github.com/promises-aplus/promises-tests

```bash
npm test promesse
```

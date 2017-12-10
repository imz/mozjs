// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-get-arraybuffer.prototype.bytelength
es6id: 24.1.4.1
description: >
  get ArrayBuffer.prototype.byteLength

  17 ECMAScript Standard Built-in Objects

  Functions that are specified as get or set accessor functions of built-in
  properties have "get " or "set " prepended to the property name string.

includes: [propertyHelper.js]
---*/

var descriptor = Object.getOwnPropertyDescriptor(
  ArrayBuffer.prototype, 'byteLength'
);

assert.sameValue(
  descriptor.get.name, 'get byteLength',
  'The value of `descriptor.get.name` is `"get byteLength"`'
);

verifyNotEnumerable(descriptor.get, 'name');
verifyNotWritable(descriptor.get, 'name');
verifyConfigurable(descriptor.get, 'name');

reportCompare(0, 0);

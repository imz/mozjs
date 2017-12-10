// Copyright (C) 2017 Mozilla Corporation.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-atomics.exchange
description: Test Atomics.exchange on arrays that allow atomic operations.
includes: [testAtomics.js, testTypedArray.js]
features: [SharedArrayBuffer, ArrayBuffer, DataView, Atomics, arrow-function, let, TypedArray, for-of]
---*/

var sab = new SharedArrayBuffer(1024);
var ab = new ArrayBuffer(16);

var int_views = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array];

testWithTypedArrayConstructors(function(View) {
    // Make it interesting - use non-zero byteOffsets and non-zero indexes.

    var view = new View(sab, 32, 20);
    var control = new View(ab, 0, 2);

    view[8] = 0;
    assert.sameValue(Atomics.exchange(view, 8, 10), 0,
                     "Exchange returns the value previously in the array");
    assert.sameValue(view[8], 10);

    assert.sameValue(Atomics.exchange(view, 8, -5), 10,
                     "Exchange returns the value previously in the array");
    control[0] = -5;
    assert.sameValue(view[8], control[0]);

    view[3] = -5;
    control[0] = -5;
    assert.sameValue(Atomics.exchange(view, 3, 0), control[0],
                     "Result is subject to coercion");

    control[0] = 12345;
    view[3] = 12345;
    assert.sameValue(Atomics.exchange(view, 3, 0), control[0],
                     "Result is subject to chopping");

    control[0] = 123456789;
    view[3] = 123456789;
    assert.sameValue(Atomics.exchange(view, 3, 0), control[0],
                     "Result is subject to chopping");

    // In-bounds boundary cases for indexing
    testWithAtomicsInBoundsIndices(function(IdxGen) {
        let Idx = IdxGen(view);
        view.fill(0);
        // Atomics.store() computes an index from Idx in the same way as other
        // Atomics operations, not quite like view[Idx].
        Atomics.store(view, Idx, 37);
        assert.sameValue(Atomics.exchange(view, Idx, 0), 37);
    });
}, int_views);

reportCompare(0, 0);

// |reftest| error:SyntaxError
// Copyright (C) 2017 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-for-in-and-for-of-statements
description: >
  ExpressionStatement has a lookahead restriction for `let [`.
info: |
  ExpressionStatement[Yield, Await] :
    [lookahead ∉ { {, function, async [no LineTerminator here] function, class, let [ }]
    Expression[+In, ?Yield, ?Await] ;
negative:
  phase: early
  type: SyntaxError
flags: [noStrict]
---*/

throw "Test262: This statement should not be evaluated.";

for (var x of []) let
[a] = 0;

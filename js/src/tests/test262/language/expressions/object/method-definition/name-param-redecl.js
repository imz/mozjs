// |reftest| error:SyntaxError
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    It is a Syntax Error if any element of the BoundNames of
    StrictFormalParameters also occurs in the LexicallyDeclaredNames of
    FunctionBody.
es6id: 14.3.1
negative:
  phase: early
  type: SyntaxError
---*/

throw "Test262: This statement should not be evaluated.";

var obj = {
  method(param) {
    let param;
  }
};

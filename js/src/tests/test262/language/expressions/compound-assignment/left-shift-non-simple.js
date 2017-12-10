// |reftest| error:ReferenceError
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    It is an early Reference Error if IsValidSimpleAssignmentTarget of
    LeftHandSideExpression is false.
es6id: 12.14.1
description: Compound "left shift" assignment with non-simple target
negative:
  phase: early
  type: ReferenceError
---*/

throw "Test262: This statement should not be evaluated.";

1 <<= 1;

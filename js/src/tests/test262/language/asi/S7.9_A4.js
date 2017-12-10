// |reftest| error:SyntaxError
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Check Throw Statement for automatic semicolon insertion
es5id: 7.9_A4
description: Try use Throw \n Expression construction
negative:
  phase: early
  type: SyntaxError
---*/

throw "Test262: This statement should not be evaluated.";

//CHECK#1
try {
  throw 
  1;
} catch(e) {  
}  
$ERROR('#1: Check throw statement for automatic semicolon insertion');

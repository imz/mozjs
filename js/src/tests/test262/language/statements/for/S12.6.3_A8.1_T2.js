// |reftest| error:SyntaxError
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Blocks within "for(with var)" braces are not allowed
es5id: 12.6.3_A8.1_T2
description: >
    Checking if execution of "for(var index=0; {index++;index<100;};
    index*2;) {  arr.add(""+index);}" fails
negative:
  phase: early
  type: SyntaxError
---*/

throw "Test262: This statement should not be evaluated.";

var arr = [];

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
for(var index=0; {index++;index<100;}; index*2;) {	arr.add(""+index);};
//
//////////////////////////////////////////////////////////////////////////////

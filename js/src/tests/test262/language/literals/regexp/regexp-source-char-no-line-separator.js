// |reftest| error:SyntaxError
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-RegularExpressionBackslashSequence
info: |
  RegularExpressionBackslashSequence ::
    \ RegularExpressionNonTerminator

  RegularExpressionNonTerminator ::
    SourceCharacter but not LineTerminator

  LineTerminator ::
    <LF>
    <CR>
    <LS>
    <PS>

description: >
  A regular expression may not contain a <LS> as a SourceCharacter
negative:
  phase: early
  type: SyntaxError
---*/

throw "Test262: This statement should not be evaluated.";

/a\\ /

/*
There is a <LS> between "a\\ " and "/"
*/

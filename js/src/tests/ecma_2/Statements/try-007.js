/* -*- tab-width: 2; indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


/**
 *  File Name:          try-007.js
 *  ECMA Section:
 *  Description:        The try statement
 *
 *  This test has a for-in statement within a try block.
 *
 *
 *  Author:             christine@netscape.com
 *  Date:               11 August 1998
 */
var SECTION = "try-007";
var TITLE   = "The try statement:  for-in";

writeHeaderToLog( SECTION + " "+ TITLE);

/**
 *  This is the "check" function for test objects that will
 *  throw an exception.
 */
function throwException() {
  throw EXCEPTION_STRING +": " + this.valueOf();
}
var EXCEPTION_STRING = "Exception thrown:";

/**
 *  This is the "check" function for test objects that do not
 *  throw an exception
 */
function noException() {
  return this.valueOf();
}

/**
 *  Add test cases here
 */
TryForIn( new TryObject( "hello", throwException, true ));
TryForIn( new TryObject( "hola",  noException, false ));

/**
 *  Run the test.
 */

test();

/**
 *  This is the object that will be the "this" in a with block.
 *  The check function is either throwException() or noException().
 *  See above.
 *
 */
function TryObject( value, fun, exception ) {
  this.value = value;
  this.exception = exception;

  this.check = fun;
  this.valueOf = function () { return this.value; }
}

/**
 *  This function has a for-in statement within a try block.  Test cases
 *  are added after the try-catch-finally statement.  Within the for-in
 *  block, call a function that can throw an exception.  Verify that any
 *  exceptions are properly caught.
 */

function TryForIn( object ) {
  try {
    for ( p in object ) {
      if ( typeof object[p] == "function" ) {
	result = object[p]();
      }
    }
  } catch ( e ) {
    result = e;
  }

  new TestCase(
    "TryForIn( " + object+ " )",
    (object.exception ? EXCEPTION_STRING +": " + object.value : object.value),
    result );

}

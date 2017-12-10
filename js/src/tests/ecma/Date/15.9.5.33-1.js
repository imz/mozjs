/* -*- tab-width: 2; indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


/**
   File Name:          15.9.5.33-1.js
   ECMA Section:       15.9.5.33 Date.prototype.setUTCDate(date)
   Description:
   1.  Let t be this time value.
   2.  Call ToNumber(date).
   3.  Compute MakeDay(YearFromTime(t), MonthFromTime(t), Result(2)).
   4.  Compute MakeDate(Result(3), TimeWithinDay(t)).
   5.  Set the [[Value]] property of the this value to TimeClip(Result(4)).
   6.  Return the value of the [[Value]] property of the this value.

   Author:             christine@netscape.com
   Date:               12 november 1997
*/
var SECTION = "15.9.5.33-1";

writeHeaderToLog( SECTION + " Date.prototype.setUTCDate(date) ");

addNewTestCase( "TDATE = new Date(0);(TDATE).setUTCDate(31);TDATE",
		UTCDateFromTime(SetUTCDate(0,31)),
		LocalDateFromTime(SetUTCDate(0,31)) );

addNewTestCase( "TDATE = new Date(0);(TDATE).setUTCDate(1);TDATE",
		UTCDateFromTime(SetUTCDate(0,1)),
		LocalDateFromTime(SetUTCDate(0,1)) );

addNewTestCase( "TDATE = new Date(86400000);(TDATE).setUTCDate(1);TDATE",
		UTCDateFromTime(SetUTCDate(86400000,1)),
		LocalDateFromTime(SetUTCDate(86400000,1)) );

test();

function addNewTestCase( DateString, UTCDate, LocalDate) {
  DateCase = eval( DateString );


  new TestCase( DateString+".getTime()",             UTCDate.value,       DateCase.getTime() );
  new TestCase( DateString+".valueOf()",             UTCDate.value,       DateCase.valueOf() );

  new TestCase( DateString+".getUTCFullYear()",      UTCDate.year,    DateCase.getUTCFullYear() );
  new TestCase( DateString+".getUTCMonth()",         UTCDate.month,  DateCase.getUTCMonth() );
  new TestCase( DateString+".getUTCDate()",          UTCDate.date,   DateCase.getUTCDate() );
  new TestCase( DateString+".getUTCDay()",           UTCDate.day,    DateCase.getUTCDay() );
  new TestCase( DateString+".getUTCHours()",         UTCDate.hours,  DateCase.getUTCHours() );
  new TestCase( DateString+".getUTCMinutes()",       UTCDate.minutes,DateCase.getUTCMinutes() );
  new TestCase( DateString+".getUTCSeconds()",       UTCDate.seconds,DateCase.getUTCSeconds() );
  new TestCase( DateString+".getUTCMilliseconds()",  UTCDate.ms,     DateCase.getUTCMilliseconds() );

  new TestCase( DateString+".getFullYear()",         LocalDate.year,       DateCase.getFullYear() );
  new TestCase( DateString+".getMonth()",            LocalDate.month,      DateCase.getMonth() );
  new TestCase( DateString+".getDate()",             LocalDate.date,       DateCase.getDate() );
  new TestCase( DateString+".getDay()",              LocalDate.day,        DateCase.getDay() );
  new TestCase( DateString+".getHours()",            LocalDate.hours,      DateCase.getHours() );
  new TestCase( DateString+".getMinutes()",          LocalDate.minutes,    DateCase.getMinutes() );
  new TestCase( DateString+".getSeconds()",          LocalDate.seconds,    DateCase.getSeconds() );
  new TestCase( DateString+".getMilliseconds()",     LocalDate.ms,         DateCase.getMilliseconds() );

  DateCase.toString = Object.prototype.toString;

  new TestCase(
		DateString+".toString=Object.prototype.toString;"+DateString+".toString()",
		"[object Date]",
		DateCase.toString() );
}
function MyDate() {
  this.year = 0;
  this.month = 0;
  this.date = 0;
  this.hours = 0;
  this.minutes = 0;
  this.seconds = 0;
  this.ms = 0;
}
function LocalDateFromTime(t) {
  t = LocalTime(t);
  return ( MyDateFromTime(t) );
}
function UTCDateFromTime(t) {
  return ( MyDateFromTime(t) );
}
function MyDateFromTime( t ) {
  var d = new MyDate();
  d.year = YearFromTime(t);
  d.month = MonthFromTime(t);
  d.date = DateFromTime(t);
  d.hours = HourFromTime(t);
  d.minutes = MinFromTime(t);
  d.seconds = SecFromTime(t);
  d.ms = msFromTime(t);

  d.time = MakeTime( d.hours, d.minutes, d.seconds, d.ms );
  d.value = TimeClip( MakeDate( MakeDay( d.year, d.month, d.date ), d.time ) );
  d.day = WeekDay( d.value );

  return (d);
}
function SetUTCDate( t, date ) {
  var T       = t;
  var DATE    = Number( date );
  var RESULT3 = MakeDay(YearFromTime(T), MonthFromTime(T), DATE );
  return ( TimeClip(MakeDate(RESULT3, TimeWithinDay(t))) );
}


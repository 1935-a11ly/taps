/* jshint esversion: 8 */
/* jshint node: true */
/* jshint browser: true */

'use strict';
var myVar; 

function getUserDateTime() {

    var userDate = new Date();
    var month_day_year = (userDate.getMonth()+1)+'-'+userDate.getDate() + '-' + userDate.getFullYear() ;
    var time = userDate.getHours() + ":" + userDate.getMinutes() + ":" + userDate.getSeconds();
    var formattedDate = month_day_year+' '+time;

	document.getElementById("jsfunc").innerHTML = formattedDate;

}

function timeUpdate() {
    myVar = setInterval("getUserDateTime()", 1000);
}

timeUpdate()
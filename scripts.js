/*eslint-env browser*/
/*global $, jQuery, alert*/
function getRndInteger() {
    "use strict";
    return Math.floor(Math.random() * 100) + 1;
}
var x = getRndInteger();
var y = null;
 //alert(x)

function kollaSvar() {
    "use strict";
	if (x > document.getElementById("number").value) {
		alert('För lågt, gissa igen!');
        document.getElementById("number").value = '';
		++y;
    } else if (x < document.getElementById("number").value) {
        alert('För högt, gissa igen!');
        document.getElementById("number").value = '';
        ++y;
    } else {
        alert('Rätt gissat, det tog '  + y + ' gånger. Vill du spela igen?');
        location.reload();
    }
}
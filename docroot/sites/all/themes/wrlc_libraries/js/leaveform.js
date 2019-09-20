// JavaScript Document
function updForm(theForm) {
	if (theForm.name == "floatingForm") {
		if (theForm.dat1.value != "") {
			theForm.cbox.checked = true;
		}
	} else {
		var y = 0.0;
		y = (isNaN(parseFloat(theForm.hrs1.value))? 0 :
			  		parseFloat(theForm.hrs1.value))
			+(isNaN(parseFloat(theForm.hrs2.value))? 0 :
			  		parseFloat(theForm.hrs2.value))
			+(isNaN(parseFloat(theForm.hrs3.value))? 0 :
			  		parseFloat(theForm.hrs3.value))
			+(isNaN(parseFloat(theForm.hrs4.value))? 0 :
			  		parseFloat(theForm.hrs4.value));
		theForm.hrst.value = Math.round( y*100 ) / 100;
		if (theForm.hrst.value == "0") {
			theForm.cbox.checked = false;
			theForm.hrst.value = "";
		} else {
			theForm.cbox.checked = true;
		}
	}
}


function addUp(theForm) {
		var y = 0.0;
		y = (isNaN(parseFloat(theForm.amt1.value))? 0 :
		  			parseFloat(theForm.amt1.value))
			+(isNaN(parseFloat(theForm.amt2.value))? 0 :
		  			parseFloat(theForm.amt2.value))
			+(isNaN(parseFloat(theForm.amt3.value))? 0 :
		  			parseFloat(theForm.amt3.value))
			+(isNaN(parseFloat(theForm.amt4.value))? 0 :
		  			parseFloat(theForm.amt4.value))
			+(isNaN(parseFloat(theForm.amt5.value))? 0 :
		  			parseFloat(theForm.amt5.value))
			+(isNaN(parseFloat(theForm.amt6.value))? 0 :
		  			parseFloat(theForm.amt6.value))
			+(isNaN(parseFloat(theForm.amt7.value))? 0 :
		  			parseFloat(theForm.amt7.value))
			+(isNaN(parseFloat(theForm.amt8.value))? 0 :
		  			parseFloat(theForm.amt8.value))
			+(isNaN(parseFloat(theForm.amt9.value))? 0 :
		  			parseFloat(theForm.amt9.value))
			+(isNaN(parseFloat(theForm.amt10.value))? 0 :
		  			parseFloat(theForm.amt10.value));
		theForm.xtotl.value = Math.round( y*100 ) / 100;
		y = (isNaN(parseFloat(theForm.cash1.value))? 0 :
		  			parseFloat(theForm.cash1.value))
			+(isNaN(parseFloat(theForm.cash2.value))? 0 :
		  			parseFloat(theForm.cash2.value))
			+(isNaN(parseFloat(theForm.cash3.value))? 0 :
		  			parseFloat(theForm.cash3.value))
			+(isNaN(parseFloat(theForm.lsbal.value))? 0 :
		  			parseFloat(theForm.lsbal.value));
		theForm.atotl.value = Math.round( y*100 ) / 100;
		theForm.lessa.value = theForm.atotl.value;
		y = theForm.xtotl.value - theForm.lessa.value;
		theForm.btotl.value = Math.round( y*100 ) / 100;
		if (theForm.btotl.value < 0) {
			theForm.who[0].checked = true;
			theForm.btotl.value = Math.abs(theForm.btotl.value);
		} else {
			theForm.who[1].checked = true;
		}
	}
	function today() {
		d = new Date();
		return (d.getMonth()+1) + '/' + d.getDate() + '/' + d.getFullYear();
	}
	
	
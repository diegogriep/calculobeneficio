var day, benefit, ticket, result;
var form = document.infobasic;
var output = document.documentElement.getElementsByTagName("h3").item(0);

function calculate(){
	day = parseFloat(form.day.value);
	benefit = parseFloat(form.benefit.value);
	ticket = parseFloat(form.ticket.value);

	if(!day || !benefit || !ticket){
		return false;
	}

	result = ticket / day;
	
	document.getElementById("result").innerHTML = result.toFixed(2);
	if(result > benefit){
		output.style.color = "green";
	} else if(result == benefit){
		output.style.color = "yellow";
	} else {
		output.style.color = "red";
	}
}
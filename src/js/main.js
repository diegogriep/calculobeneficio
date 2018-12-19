function calculate(e) {

  let day, benefit, ticket, result;
  let form = document.infobasic;
  let output = document.querySelector('h3');
  e.preventDefault(); 

	day = parseFloat(form.day.value);
	benefit = parseFloat(form.benefit.value);
	ticket = parseFloat(form.ticket.value);

	if(!day || !benefit || !ticket) {
		return false;
	}

	result = ticket / day;
	
  document.getElementById("result").innerHTML = result.toFixed(2).replace('.',',');

	if(result > benefit) {
		output.style.color = "green";
	} else if(result === benefit) {
		output.style.color = "yellow";
	} else {
		output.style.color = "red";
	}
}

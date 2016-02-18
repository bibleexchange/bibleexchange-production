var denominations = {'pen':1,'nic':5,'dim':10,'qua':25,'hal':50,'one':100,'two':200,'fiv':500,'ten':1000,'twe':2000,'fif':5000,'hun':10000};

function totalValue()
{
	var oldTotal = document.querySelector("#totalValue").innerHTML;
	oldTotal = oldTotal.replace('$ ','');
	oldTotal = oldTotal*100;

	var total = 0;

	for(var index in denominations) {
		
	  var many = document.querySelector('#'+index+'Count').value;
	  var value = denominations[index];

	  if(many == ''){
	  	many = 0;
	  }

		var denValue = many * value;

		total = total + denValue;

	}

	var check = document.querySelector('#cheValue').innerHTML;

	if(check == ''){
	  	check = 0;
	  }
	
	check = check * 100;
	total = total + check;
	
	if(total >= oldTotal)
	{
		var diff = total-oldTotal;

		for (i = 1; i <= diff; i++) {

			var delay = slowerAndFaster(diff);

		    setTimeout(function(x) { return function() { 
		    	
		    	var newValue = oldTotal+x;
				var incrementValue = newValue/100;
				incrementValue = parseFloat(incrementValue).toFixed(2);
				document.querySelector("#totalValue").innerHTML = '$ ' + incrementValue;

		    }; }(i), delay);

		}

	}else{
		var diff = oldTotal-total;

		for (i = 1; i <= diff; i++) {

			var delay = slowerAndFaster(diff);

		    setTimeout(function(x) { return function() { 
		    	
		    	var newValue = oldTotal-x;
				var incrementValue = newValue/100;
				incrementValue = parseFloat(incrementValue).toFixed(2);
				document.querySelector("#totalValue").innerHTML = '$ ' + incrementValue;

		    }; }(i), delay);

		}
		
	}

	//document.querySelector("#totalValue").innerHTML = '$ ' + total/100;

}

function slowerAndFaster(differance)
{
	var slowerAndFaster = 1;

	if(differance <= 24){
		slowerAndFaster = 55*i; 
	}else if(differance > 24 && differance <= 50){
		slowerAndFaster = 10*i; 
	}else if(differance > 50 && differance < 1000){
		slowerAndFaster = 2*i; 
	}else if(differance >= 1000 && differance <= 2000){
		slowerAndFaster = .5*i; 
	}else if(differance > 2000 ){
		slowerAndFaster = .1*i; 
	}

	return slowerAndFaster;
}

function calValue(money)
{
	var money = getMeta(money);	

	var countInput = document.querySelector('#'+money.name+'Count').value;
	var value = countInput * money.amount;
	document.querySelector('#'+money.name+'Value').innerHTML = parseFloat(value).toFixed(2);

	totalValue();
}

function getMeta(money)
{
	var meta;

	switch(money) {

    	case 'pen':
	        meta = {name:'pen', amount:'.01'};
	        break;
	    case 'nic':
	       	meta = {name:'nic', amount:'.05'};
	        break;
	    case 'dim':
	       	meta = {name:'dim', amount:'.10'};
	        break;
	    case 'qua':
	       	meta = {name:'qua', amount:'.25'};
	        break;
	    case 'hal':
	       	meta = {name:'hal', amount:'.50'};
	        break;
	    case 'one':
	       	meta = {name:'one', amount:'1'};
	        break;
	    case 'two':
	       	meta = {name:'two', amount:'2'};
	        break;
	    case 'fiv':
	       	meta = {name:'fiv', amount:'5'};
	        break;
	    case 'ten':
	       	meta = {name:'ten', amount:'10'};
	        break;
	    case 'twe':
	       	meta = {name:'twe', amount:'20'};
	        break;
	    case 'fif':
	       	meta = {name:'fif', amount:'50'};
	        break;
	    case 'hun':
	       	meta = {name:'hun', amount:'100'};
	        break;
	    default:
	         meta = {name:'che', amount:'1'};
	}

	return meta;

}

function addOne(money, subtract)
{

	var money = getMeta(money);

	var countInput = document.querySelector('#'+money.name+'Count').value;
	
	if( isNaN(countInput) | countInput == ''){
		countInput = 0;
	}

	if(subtract){

		if(countInput > 0){
			countPlus =  parseFloat(countInput)-1;
		} else {
			countPlus =  0;
		}
	} else {
		countPlus =  parseFloat(countInput)+1;
	}

	document.querySelector('#'+money.name+'Count').value = countPlus;

	var value = countPlus * money.amount;
	document.querySelector('#'+money.name+'Value').innerHTML = parseFloat(value).toFixed(2);

	totalValue();
}

function resetCount(money)
{

	var money = getMeta(money);

	document.querySelector('#'+money.name+'Count').value = '';
	document.querySelector('#'+money.name+'Value').innerHTML = '';

	totalValue();
}

function resetGiftForm()
{

	for(var index in denominations) {
		document.querySelector('#'+index+'Count').value = '';
		document.querySelector('#'+index+'Value').innerHTML = '';
	}

	document.querySelector('#cheCount').value = '';
	document.querySelector('#cheValue').innerHTML = '';

	totalValue();
}

////////////////////////////////////////


var buttonElements = document.getElementsByTagName('button');

function preventDefaultListener(e) { e.preventDefault(); }

for (var i = 0, n = buttonElements.length; i < n; ++i) {
  buttonElements[i].addEventListener('click', preventDefaultListener);
}

totalValue();
if (process.argv.length <= 2) {
    console.log("Usage: " + __filename + " SOME_PARAM");
    process.exit(-1);
}

var arg = process.argv[2];
var results = 0;
var aorb = process.argv[3];

if (aorb == "mid"){
	var mid = 0;
	mid = parseInt((arg.length/2));
	results = Midcheck(arg, 0, mid);
	console.log(results);
} else {

	console.log(check(arg));
} 

function check(param ){
	var a = 0; 
	for (i= 0; i < param.length; i++){
		if( param.charAt(i + 1) == param.charAt(i)){
			a = (a + parseInt(param.charAt(i)));
		}
		if((i +1) == (param.length)){
			if( param.charAt(0) == param.charAt(i)){
				a = (a + parseInt(param.charAt(i)));
			}

		}
	}		
	return a;
}
function Midcheck(param, start, iMidpoint ){
	var a = 0; 
	for (i= start; i < iMidpoint; i++){
		if( param.charAt(i + iMidpoint) == param.charAt(i)){
			a = (a + parseInt(param.charAt(i)));
		}
		else if((i +1) == (param.length)){
			if( param.charAt(iMidpoint) == param.charAt(i)){
				a = (a + parseInt(param.charAt(i)));
			}
		}
	}		


	for (i= iMidpoint; i < param.length; i++){
		if( param.charAt(i - iMidpoint) == param.charAt(i)){
			a = (a + parseInt(param.charAt(i)));
		}
		else if((i +1) == (param.length)){
			if( param.charAt(iMidpoint) == param.charAt(i)){
				a = (a + parseInt(param.charAt(i)));
			}
		}
	}	
	return a;
}



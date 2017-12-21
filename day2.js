var fs = require('fs');

function readLines(input, func) {
    var remaining = '';
    var iDelta = 0;
    input.on('data', function(data) {
      remaining += data;
      var index = remaining.indexOf('\n');
      var last  = 0;
      while (index > -1) {
        var line = remaining.substring(last, index);
        last = index + 1;
        iDelta = (iDelta + func(line));
        index = remaining.indexOf('\n', last);
      }
      remaining = remaining.substring(last);
      console.log("delta = " + iDelta);
    });
  
    input.on('end', function() {
      if (remaining.length > 0) {
        iDelta = (iDelta + func(remaining));
        }
    });
    
    
  }
  
  function func(parsedata) {

    var iLow = 0;
    var iHigh = 0;
    
    var arrRow = parsedata.split("\t");
    var i = 0;
    var iValue = 0;
    for (i = 0; i < arrRow.length; i++){
      iValue = 0;
      iValue = parseInt(arrRow[i]);
      if (iValue < iLow) {
        iLow  = iValue;
    }
    else if (iLow == 0) {
           iLow  = iValue;
    }
    else{
    }
    if (iValue > iHigh) {
      iHigh  = iValue;
  }
  else if (iHigh == 0) {
         iHigh  = iValue;
  }
  else{
  }
}
    return iHigh - iLow;
  }

var input = fs.createReadStream('day2.txt');
readLines(input, func);
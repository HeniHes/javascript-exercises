const repeatString = function(a,b) {
  let result='';
  if(b<0){
    result='ERROR';
  }
  for(let i=0;i<b;i++){
result+=a;
  }
return result;
};

// Do not edit below this line
module.exports = repeatString;

const valeurs=[ 0, 1, "", "0", null, undefined, NaN, false, [], {}];

for(i=0;i<10;i++){
console.log(String(valeurs[i])+"->");
   if(valeurs[i]){console.log("turthy")}
    else{console.log("falsy")}
   
};
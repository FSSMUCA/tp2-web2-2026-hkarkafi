let nombres=[0, NaN, Infinity, -Infinity, 42, 3.14, Number.MAX_SAFE_INTEGER + 1, -0];
for(i=0;i<9;i++){
     if(Number.isNaN(nombres[i])){
        console.log(nombres[i],"Invalide");
     }else if(nombres[i]===Infinity){
        console.log(nombres[i],"INFINI");
     }else if(nombres[i]===-Infinity){
        console.log(nombres[i],"INFINI");
     }else if(1 / nombres[i] === -Infinity){
       console.log(nombres[i],"zero negatif");
     }else if(Number.isInteger(nombres[i]) &&  Math.abs(nombres[i]) < Number.MAX_SAFE_INTEGER){
        console.log(nombres[i],"ENTIER SUR");
     }else if(Number.isInteger(nombres[i]) &&  Math.abs(nombres[i]) > Number.MAX_SAFE_INTEGER){
        console.log(nombres[i],"ENTIER HORS LIMITES");
     }else{
        console.log(nombres[i],"DECIMAL");
     }
}
let a=0;
let b="";
let c="0";
let d=false;
let e=null;
let f=undefined;
let g=NaN;
let h=1;
let i="1";
let j="\t\n"
console.log(`0 ==  ""  -> `,a==b,`0 === ""   -> `,a===b);
console.log(`0 ==  "0"  -> `,a==c,`0 === "0"   -> `,a===c);
console.log(`0 ==  false  -> `,a==d,`0 === false   -> `,a===d);
console.log(`"" ==  false  -> `,b==d,`"" === false   -> `,b===d);
console.log(`null ==  undefined  -> `,e==f,`null === undefined   -> `,e===f);
console.log(`null ==  false  -> `,e==d,`null === false   -> `,e===d);
console.log(`NaN ==  NaN  -> `,g==g,`NaN === NaN   -> `,g===g);
console.log(`1 ==  "1"  -> `,h==i,`1 === "1"   -> `,h===i);
console.log(`"\t\n" ==  0  -> `,j==a,`"\t\n === 0   -> `,j===a);
console.log("---------------");
console.log("8 paire(s) où == et === donnent des résultats différents")
let nom = "   Fatima   "
let age = "23"
let email = "fatima@example"
let scoreJeu = "150pts"
let estAdmin = "false"
let derniereConnexion = null
let nombreConnexions = "0"
console.log("nom : ",JSON.stringify(nom=nom.trim()))
console.log("age  :",age=Number(age))
let indexArobase = email.indexOf("@")
if (indexArobase === -1) {
  console.log("invalide : pas de @")
} else {
 
  let indexPoint = email.indexOf(".", indexArobase) 

  if (indexPoint === -1) {
    console.log("email  :",email,"invalide : pas de point après @")
  } else {
    console.log("valide")
  }
}
console.log("scorJeu  :",scoreJeu=parseInt(scoreJeu))
if(estAdmin=="false"){
    estAdmin=false
}else{
    estAdmin=true
}
console.log("estAmin",estAdmin)
derniereConnexion=derniereConnexion ?? "Jamais connecté"
console.log("derniere connexion  :",derniereConnexion)
nombreConnexions=Number(nombreConnexions)
console.log("nombre de conexion  :",nombreConnexions)
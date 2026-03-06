let nomProduit = "Clavier mécanique"
let prix = 89.99
let quantite = 3
let codePromo = null
let reductionPourcentage = 10
let estMembre = true
let soldeCompte = 250
let sous_total =prix * quantite 
console.log(sous_total)
if(codePromo!=null && estMembre==true){
    let reduction=(sous_total*0.1)
}else{
    reduction=0
}
let total_final=sous_total-reduction

if(soldeCompte-total_final>=0){
    var satut= "Paiement acceptee "
    console.log(statut)
    
}else{
    var statut="Solde insuffisant"
    console.log(statut)
}
console.log(`===== RÉCAPITULATIF =====
Produit   : Clavier mécanique
Quantité  : ${quantite}
Prix unit.: ${prix} MAD
Sous-total: ${sous_total.toFixed(2)} MAD
Réduction : ${reduction.toFixed(2)}MAD
Total     : ${total_final.toFixed(2)} MAD
Statut    :${statut}
Solde     : ${soldeCompte.toFixed(2)} MAD
=========================`)
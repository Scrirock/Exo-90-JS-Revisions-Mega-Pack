let nomVoiture = "Peugeot";
let x = 50;

let div = document.createElement("div");
div.id = "demo";
document.body.append(div);

let z = 5, w = 10;
div.innerHTML = "z vaux "+ z +", w vaux "+ w +", le résultat est : "+ (z+w);

let d = z+w;
alert(d);

let prenom = "John", nom = "doe", age = 35;

alert(10*5);
alert(10/2);
alert(15%9);

let l =10 , k = 5;
l += k

function maFonction(){
    alert("Salut tout le monde !");
}
maFonction();

function maFonctionDeRetour(){
    return "Bonjour !";
}
document.getElementById("demoRetour").innerHTML = maFonctionDeRetour();

let button = document.createElement("button");
button.id = "monBouton";
button.innerHTML = "Bouton"
document.body.append(button);

document.getElementById("monBouton").addEventListener("click", function (){
    alert("un truc")
})

let div2 = document.createElement("div");
div2.id = "changeSurOver";
document.body.append(div2);
div2.style.width = 100+"px";
div2.style.height = 100+"px";
div2.style.border = "1px solid black";

div2.addEventListener("mouseover", () => div2.style.backgroundColor = "red");

let txt = "une longue phrase", longueur = txt.length;
alert(longueur);

let str1 = "Bonjour ", str2 = "le monde !";
alert(str1+str2);

let listeVoiture = [ "Renault","Volvo","Citroen"], maVoiture = listeVoiture[1];
listeVoiture[0] = "Ford";
alert(listeVoiture.length);
listeVoiture.pop();
listeVoiture.push("Ferrari");

let rNumber = Math.random();
let fNumber = 27.685;
Math.round(fNumber);

let nombreUn = 10, nombreDeux = 5;
nombreUn > nombreDeux ? alert("nombreUn est supérieur à nombreDeux") : null;

let nombreTrois = 10, nombreQuatre = 10;
nombreTrois === nombreQuatre ? alert("nombreTrois est égal à nombreQuatre") : null;

nombreUn !== nombreDeux ? alert("nombreUn n'est pas égal à nombreDeux") : null;

for (let i = 0; i<9; i++) console.log(i);

let fruit = ["pomme","banane","poire"];
for (let i of fruit) console.log(i);

let i = 0
while (i<10){
    i++
}

i = 0
while (i<10){
    i += 2;
}
for (let i = 0; i<10; i++){
    if (i === 5) alert("le message de votre choix");
}
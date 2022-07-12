// let adresse ;
// let age = 30;
// console.log(age);
// age = 35;
// console.log(age);
// console.log("Mon age est : "+age);

// const personne = {
//     prenom: "avril",
//     nom: "demond",
//     age: 36,
//     passions: ["voyager", "galigraphi", "musique"],
//     adresse : {
//     rue : "62 avenue de flandre",
//     ville : "marcq en baroeul",
//     pays : "France"
//     }
//     };
//     console.log(personne.prenom+" est agé de "+personne.age+" ans, il habite a "+personne.adresse.ville)
//     console.log(personne);

//     personne.passions.push('codage');
//     console.log(personne);

//     personne.adresse.rue="112 rue royale"
//     personne.adresse.ville="lille"
//     personne.adresse.pays="Chine"


// //     let cinqeme={
// //         id:5,
// //         text:"faire exo de js",
// //         isCompleted:false,
// //     }
// //     console.log(todos);
// //     todos.push(cinqeme);
    
// //     let dernierElement = todos[todos.length-1]
// //     let idDernierElement = dernierElement.id
// //     idProchainElement = idDernierElement+1
    
// //     let idProchainElement = todos[todos.length-1].id + 1

//   const age=36
//   if (age<18) {console.log("Mineur")}
//   else{console.log("Majeur")}

//   let txt1 = "how're you today?";
//   let txt2 = "welcome to HTML";

//   if (txt1.length>txt2.length) {
//     console.log("phrase 1 plus longue")
//   }
//   else if(txt1.length<txt2.length) {
//     console.log("phrase 2 plus longue")
//   }
//   else {
//     console.log("les 2 phrases sont de meme longueur")
// //   }
// let performance = 80
// let prime = 0

// if (performance >= 90) {
//     prime = 200;
// }
// else if (performance >= 80) {
//     prime = 150;
// }
// else if (performance >= 70) {
//     prime = 100;
// }
// else {
//     prime = 0;
// }

// console.log(`avec une performance de '${performance}' vous gagnez une prime de '${prime}'`)

// let age = 30
// let resulte = age > 18 ? "Majeur" : "mineur";
// console.log(`la personne est ${resulte}`);

// let vehicule = {
//     id: 11456,
//     matricule: "GH 114654 - 59",
//     type: "c",
//     age: 5,
// };
// let resulte= vehicule.type =="c"? "un camion" :"une voiture";
// console.log('le vehicule est '+resulte);



//   let txt1 = "how're you today?";
//   let txt2 = "welcome to HTML";

//   let resulte=txt1.length==txt2.length? "les 2 phrases sont de meme longueur":txt1.length>txt2.length? "phrase 1 plus longue":"phrase 2 plus longue";
//   console.log(resulte);

// alert('hello');
// prompt('entrez le mdp');



// let grade = prompt('indiquez votre grade (junior / confirmé / senior)');
// let salaire = 0
// switch (grade) {
//     case "junior":
//         salaire = 1800;
//         break;
//     case "confirmé":
//         salaire = 2500;
//         break;
//     case "senior":
//         salaire = 3200;
//         break;
//     default:
//         salaire = null
// }
// console.log(salaire? `avec votre grade de ${grade} vous gagnez un salaire de ${salaire}€`: 'entrez un grade valide!!')


// let performance=prompt('indiquez votre performance (entre 0-100)');
// let prime = 0
// switch(true){
//     case performance >= 90:
//     prime=200;
//     break;
//     case performance >= 80:
//     prime=150;
//     break;
//     case performance >= 70:
//     prime=100;
//     break;
//     default:
//     prime = 0   
// }
// console.log=("avec votre performance de "+performance+"vous gagnez un prime de "+prime);



// let roue=prompt('indiquez le nombre de votre roue(entre 2 et 6');
// switch(true){
//     case roue==2:
//     console.log("c'est une moto");
//     break;
//     case roue==4:
//     console.log("c'est une voiture");
//     break;
//     case roue==6:
//     console.log("c'est un camion");
//     break;
//     default:
//     console.log("autre");
// }

// const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

// for (let i = 0; i<cars.length; i++) {
//     document.write("i stocke la valeur " +
//     cars[i]+
//     " lors du passage n°" +(i + 1)+
//     " dans la boucle<br>")
// }


// for (let i = 0; i < cars.length; i++) {
//     document.write(" la voiture "+cars[i]+" contient " +cars[i].length+" caractère"+"<br>")
// }





// for (let i= 0; i < todos.length;i++) {
//     let x=todos[i].isCompleted? "completé ":"non completé "
//     document.write("la tache "+todos[i].text+" est "+x+ " elle contient "+todos[i].text.length+" caractere"+"<br>")
// }

// let tab=[1,2,3,4,5,6]
// let somme=0
// for (let i=0;I<tab.length;i++){
//     somme += tab[i]
//     document.write("la somme est"+somme+"<br>")
// }




// for (let i= 0; i < todos.length;i++) {
//     document.write(todos[i].text+"<br>")
// }

// let i=0
// while (i < todos.length) {
//     document.write(todos[i].text+"<br>");
//     i++;
// }

// let fruits = ["mangue", "pastèque", "poire", "orange", "ananas"];

//
// fruits.forEach(function(fruit) {
//      document.write(fruit.toUpperCase()+"<br>")
// });

// let todos = [
//     {
//         id: 1,
//         text: "Faire les courses",
//         isCompleted: true,
//     },
//     {
//         id: 2,
//         text: "Balade au vieux Lille",
//         isCompleted: true,
//     },
//     {
//         id: 3,
//         text: "Préparer le diner",
//         isCompleted: false,
//     },
//     {
//         id: 4,
//         text: "Regarder la TV",
//         isCompleted: false,
//     },
// ]
// todos.forEach(function(todo) {     
//      document.write(`${todo.isCompleted? "completé ":"non completé "} <br>`)
// });


// let tabs=[1,2,3,4,5,6]

// let newtab1=tabs.map(function(tab){
//     return tab*2;
// });

//   console.log(newtab1)

// let newtab2=tabs.map(function(tab){
//     return tab*tab;
// });

//      console.log(newtab2)


// let cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
//     let car1=cars.map(function(car) {
// //         return car.length
// //     });
// //     console.log(car1)

    
// // let car2=cars.map(function(car) {
// //         return car.split("").reverse().join("");
// //     });
// //     console.log(car2)

// let phrase = 'Cette instruction appellera la fonction avec un argument valant 5'

// /// version détaillée
// arr = phrase.split(' ')
// arr1 = arr.map(x=>x.split('').reverse().join(''))
// console.log(arr1)
// arr2 = arr1.map(x=>x.length<=5?x.toUpperCase():x)
// console.log(arr2)
// console.log(arr2.join(' '))

// /// version racourcie
// let inverseMot = phrase.split(' ').map(x=>{
//     x=x.split('').reverse().join('')
//     return x.length<=5?x.toUpperCase():x
// }).join(' ')
// console.log(inverseMot)

// function somme(a,b,c,d){
//  return a-b-c-d;
// }
// document.write(somme(9,8,7,6));

// function somme(minute){
//     return minute*60
// }
//    document.write(somme(20));
 
// function somme(a,b,c,d,e){
//     return Math.max(somme);
// }
// document.write(Math.max(23,4,6,0,3));

// let cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
// let i=0
// function somme(arr,arr1,arr2){
//     i<=cars.length? i++:
//     return cars[0],cars[i],cars[Math.random()]
// }
// document.write(arr,arr1,arr2);

function calc(){
    return eval(prompt('calcul'))
  }
  
  console.log(calc())








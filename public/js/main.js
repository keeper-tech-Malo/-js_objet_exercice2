// exo1

// let personne = {
//     argent: 30,
//     panier: [],
// }

// let magasin = {
//     chocolat: {
//         nom: 'choco',
//         price: 2,
//     },
//     tartine: {
//         nom: 'tartine',
//         price: 3,
//     },
//     vendre(a) {
//         let ask = confirm('faire des achats ?')
//         while (ask == true) {
//             let acheter = prompt('Quel element veux-tu ?')
//             for (const key in this) {
//                 if (key == acheter) {
//                     a.panier.push(key)
//                     a.argent -= magasin[key].price
//                     // a.argent = a.argent - magasin[key].price
//                 }
//             }
//             ask = confirm('faire des achats ?')
//         }
//     }
// }

// magasin.vendre(personne)


//2
let vielle_dame = {
    idendite: {
        nom: "vielle",
        prenom : "dame",
        age : 80,
    },
    moral : 'mal',
    accessoire: 'canne',
    reponse(a) {
        if (this.moral == "mal") {
            console.log(`Vous me dérangez ${a.prenom}`);
        } else {
            console.log(`Bonjour ${a.prenom} `);
        }
    },
    se_promener(){
        if (this.moral == "bien") {
            console.log(`Se promene`);
            this.accessoire = "perdu"
        } else {
            console.log(`Ne souhaite pas se promener`);
        }
    }
}

let viel_homme = {
    nom: 'viel',
    prenom : "homme",
    age : 72,
    saluer(a) {
        console.log(`Bonjour ${a.idendite.prenom}  `);
    },
    adoucir(a){
        a.moral = "bien"
        console.log(`L'homme charmant`);
    }
}


viel_homme.saluer(vielle_dame)
vielle_dame.reponse(viel_homme)
vielle_dame.se_promener()
viel_homme.adoucir(vielle_dame)
vielle_dame.reponse(viel_homme)
vielle_dame.se_promener()






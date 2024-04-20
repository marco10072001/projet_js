
// fonction maximum//
function Maximum(tableau) {
    var maximum = tableau[0]; 
    for (var i = 1; i < tableau.length; i++) { 
        if (tableau[i] > maximum) {
            maximum = tableau[i];
        }
    }
    return maximum;
}

// fonction minimum //
function minimum(tableau) {
    var minimum = tableau[0]; 
    for (var i = 1; i < tableau.length; i++) { 
        if (tableau[i] < minimum) {
            minimum = tableau[i];
        }
    }
    return minimum;
}

// fonction somme du tableau //
function sommeTableau(tableau) {
    var somme = 0;
    for (let i = 0; i < tableau.length; i++) {
        somme += tableau[i];
    }
    return somme;
}

// fonction filtre de tableau //
function filtre_tab(array, condition) {
    let filtre = [];
    for (let i = 0; i < array.length; i++) {
        if (condition(array[i])) {
            filtre.push(array[i]);
        }
    }
    return filtre;
}
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = filtre_tab(numbers, function(num) {
    return num % 2 === 0;
});


var resultat = [2, 3, 8, 0, 5];
alert("votre maximum est : " + Maximum(resultat) +" et votre minimum est : " + minimum(resultat));
alert("la somme du tableau donne : " + sommeTableau(resultat));
alert(evenNumbers + " ,sont les multiples de 2");
//fonction factorielle//
function factorial(n) {
    if (n <= 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

let number = 5;
alert("Factorielle de "+ number + " est : "+ factorial(number));

//end fontion factorielle//
// fonction nombre premier //

function Nbrepremier(nombre) {
    if (nombre <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(nombre); i++) {
        if (nombre % i === 0) {
            return false;
        }
    }
    return true;
}
alert(" 11 est-il un nombre premier ? : " + Nbrepremier(11)); 
alert(" 15 est-il un nombre premier ? : " + Nbrepremier(15));
// end fontion nombre premier//


//  fonction fibonacci //
function fibonacciSequence(n) {
    let sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        let nextTerm = sequence[i - 1] + sequence[i - 2];
        sequence.push(nextTerm);
    }

    return sequence;
}
let numberOfTerms = 10;
alert("Séquence de Fibonacci jusqu'à "+ numberOfTerms+ " termes: "+ fibonacciSequence(numberOfTerms));

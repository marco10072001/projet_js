//fonction inverser une chaine //
function inverse(chaine) {
    return chaine.split('').reverse().join('');
  }
// fonction compter les caractère //  
  function compte(chaine) {
    return chaine.length;
  }
// fonction majuscule //

function majuscule_phrase(phrase) {
  let words = phrase.split(" "); // Diviser la phrase en mots
  let stock_phrase = "";   // Initialiser une chaîne pour stocker le résultat

  for (let i = 0; i < words.length; i++) {
      let premiere_Word = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
      stock_phrase += premiere_Word + " ";
  }
  return stock_phrase.trim();
}
  
  var result1 = inverse('test');
  var result2 = compte('test');
  var result3 = majuscule_phrase("bonjour tout le monde");
  
  alert(result1);
  alert(result2); 
  alert(result3); 
var sent = "sentence that will be counted counted and and and stuff";
var arrayOfWords = sent.split(" ");
debugger;
var combinedWords = [];
while(arrayOfWords.length > 0){
  var currentWord = arrayOfWords[0];
  arrayOfWords.splice(0, 1);
  var count = 1;
    for(var i = 0; i < arrayOfWords.length; i++){
      if (arrayOfWords[i] === currentWord){
        count++;
        arrayOfWords.splice(i, 1);
        i--;
      }
    }
    combinedWords.push(currentWord + " " + count);
}

alert(combinedWords.toString());



// var wordCounter = {
//   "wordIncludedBefore" : 1,
//   "wordIncludedBeforeTwice" : 2
// }
//
// // alert(Object.keys(wordCounter)[1] + " " + wordCounter[Object.keys(wordCounter)[1]]);
//
// wordCounter["newKeyAdded"] = 5;
//
// arrayOfWords.forEach(function(word){
//   wordCounter[word] = wordCounter[word] + 1;
// });
//
//
//
// var objectArray = [];
//
// while(Object.keys(wordCounter).length > 1){
//   var max;
//   var word;
//   for (var i = 0; i < Object.keys(wordCounter).length; i++){
//     if (wordCounter[Object.keys(wordCounter)[i]] > max){
//       max = wordCounter[Object.keys(wordCounter)[i]];
//       word = Object.keys(wordCounter)[i];
//     }
//   }
//   console.log(word + " " + max);
//   objectArray.push(word + " " + max);
//   delete wordCounter.word;
// }
//
// alert(objectArray.toString());
//

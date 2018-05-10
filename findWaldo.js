function findWaldo(arr, found) {
 for (var i = 0; i < arr.length; i++) {
   if (arr[i] === “Waldo”) {
     found(i);   // execute callback

   }
 }
}

function actionWhenFound(index) {
 console.log(“Found waldo at: ” + index + ‘!’);
}

findWaldo([“Alice”, “Bob”, “Waldo”, “Winston”], actionWhenFound);


///// refactor below:

function findWaldo(characters,found) {
 characters.forEach(function(character,index){
   if (character === “Waldo”) {
     found(index);   // execute callback

   }
 });
}
function actionWhenFound(index) {
 console.log(“Found waldo at: ” + index + ‘!’);
}

findWaldo([“Alice”, “Bob”, “Waldo”, “Winston”], actionWhenFound);
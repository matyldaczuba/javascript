//let number = 10;
//// for loop
//for (let i = 0; i <=number; i++){
//    console.log(i);
//}
//
//// forEach loop
//let tablica = ["ania", "konrad", "mateusz"];
//
//tablica.forEach(function(element, index){
//    console.log("imie " + element + " znajduje sie pod indeksem " + index);
//});

// while loop

//let number = 10;
//let index = 0;
//
//while(number > 0){
//    number--;
//    console.log(number);
//    if (number === 5) {
//        console.log("teraz 5!!!");
//        continue;
//    }
//}

let adam = { wiek: 100, wlosy: "blond", oczy: true}

for (let i in adam) {
    console.log("klucz " + i + " wartosc: " + adam[i]);
}

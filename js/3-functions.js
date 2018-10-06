/*function wyswietlImie(imie){
    console.log(imie);
    
}

wyswietlImie("Tomek");*/


/*let wyswietlImie = function(imie) {
    return imie;
    
}


let wynik = wyswietlImie("Tomek");

console.log(wynik);*/

/*FUNCTION ES5

function dodawanie(liczba1, liczba2, liczba3){
    let result = liczba1 + liczba2 + liczba3;
    return result;
}

let sum = dodawanie(1,2,3);
console.log(sum);

*/


//FUNCTION ES6
//jeden parametr
/*
let wyswietlImie = imie => imie;

console.log(wyswietlImie("Ala"));*/

//wiecej niz 1 parametr

let wyswietlImie = (imie, imie2) => "Imie : " + imie + " Imie2: " + imie2;

console.log(wyswietlImie("Ala", "Karol"));



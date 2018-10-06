let tablica = ["Monika", "Łukasz", "Konrad", "Zbyszek"];

console.log(tablica);

tablica[0] = "Karolina";

tablica.unshift("Adam"); // dodaje element na poczatku tablicy

tablica.push("Adam"); // dodaje element na końcu tablicy

tablica.shift(); // usuwa pierwszy element tablicy

tablica.pop(); // usuwa ostatni element tablicy

tablica.splice(1,"","Przemek");

console.log(tablica);


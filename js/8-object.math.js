let randomNumber = Math.round(Math.random() * 10);

console.log(randomNumber);

//modulo
    console.log("Wynik z modulo" + randomNumber % 5);

if (randomNumber % 5 == 0) {
    console.log("Liczba parzysta");
}
else{
    console.log("Liczba nieparzysta");
}
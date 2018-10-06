// S5

//let adam = {
//    wiek: 100,
//    wlosy: false,
//    oczy: true,
//    nazwisko: 'Dou'
//}
//
//console.log(adam.wlosy);


class Osoba {
    constructor(imie, nazwisko, wiek, kolorOczu){
        this.name = imie;
        this.lastName = nazwisko;
        this.age = wiek;
        this.eyeColor = kolorOczu;
    }
    showMe(){
        let info = `Name: ${this.name}, lat name: ${this.lastName}, age ${this.age}`;
        console.log(info);
    }
}

let mateusz = new Osoba("Mateusz", "Górski");

mateusz.age = 30;

mateusz.eyeColor = "zielony"

mateusz.showMe();

console.log(mateusz);

let lukasz = new Osoba("Łukasz", "Nowak", 24, "piwny");

console.log(lukasz);

lukasz.showMe();

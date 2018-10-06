let number = 5;

console.log(number);

function showNumber(num){
    let number = 15;
    console.log(number);

    if (2 + 2 == 4){
        let number = 50;
        console.log(number)
    }
    return num;   
//    return stopuje funkcje i wszystko co jest ponizej nie jest brane pod uwage
}

console.log(showNumber(10));
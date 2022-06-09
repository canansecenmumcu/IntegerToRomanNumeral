let numbersAndNumerals=[
    { number:1000, roman:"M"},   //0. index
    { number:900, roman:"CM"},   //1
    { number:500, roman:"D"},    //2
    { number:400, roman:"CD"},   //3
    { number:100, roman:"C"},    //4
    { number:90, roman:"XC"},    //5
    { number:50, roman:"L"},     //6
    { number:40, roman:"XL"},    //7
    { number:10, roman:"X"},     //8
    { number:9, roman:"IX"},     //9
    { number:5, roman:"V"},      //10
    { number:4, roman:"IV"},     //11
    { number:1, roman:"I"}      //12
];

function convert(integer){
    let romanLetter="";
    let number=integer;
    for(let i=0;i<numbersAndNumerals.length;i++){
        if(numbersAndNumerals[i].number <= number){
            number = number - numbersAndNumerals[i].number;
                        //10->currentValue    -10
            romanLetter = romanLetter + numbersAndNumerals[i].roman
                            //""      + "X"
            i--;
        }
    }
    document.getElementById("romanInput").value = romanLetter;
    console.log(`My number ${integer} is ${romanLetter} in Roman Letter`)
}
document.getElementById("convert").addEventListener("click", function(){
    let number =document.getElementById("numberInput").value;

    convert(number);
})

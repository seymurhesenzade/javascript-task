//    SUAL 1     // 1den 100e qeder cut ededler

for (let index = 0; index <= 100; index= index + 2) {

    console.log(index);
}

//  SUAL 2 number type'lı bir dəyişən daxil edin.
// Verilən rəqəmin tək və ya cüt olduğunu console'a çıxaran proqram tərtib edin.

let number = 100

if (number %2 === 0 ) {
    console.log(`${number} cut ededdir`);

}else {
    console.log(`${number} tek ededdir`);
}

//   SUAL 3              Verilmiş ədədin bütün bölənlərini console'a çıxaran proqram tərtib edin.

let number = +prompt("Eded daxil edin");

for (let i = 0; i <= number; i++) {

    if (number % i ===0) {
        console.log(i)

    }
}

//   SUAL 5    3 rəqəmli hər hansı bir ədəd verilib.
//   Həmin ədədin hansı rəqəmlərdən ibarət olduğunu bizə qaytaran bir proqram tərtib edin.
//   Məsələn: number=652 daxil etdikdə  cavab bu şəkildə olmalıdır:

let n = 1748;

while (n > 0) {

    let res = n % 10;

    console.log(res);   

n= parseInt(n / 10);
}


// SUAL 9               Ayın adlarına uyğun olaraq neçə gündən ibarət olduğunu cavablandıran alqoritm tərtib edin.
// Alqoritm  Switch Case  vasitəsi yazılsın.

// Məsələn: month="january" dedikdə cavab "january has 31 days",
// month="february" dedikdə cavab "february has 28 days" şəklində olsun   


let month = parseInt(prompt("Ay Daxil Edin"))

switch (month) {
    case 1:
        console.log("january has 31 days");
        
        break;
    case 2:
        console.log("February has 29 days");
        
        break;
    case 3:
        console.log("March has 31 days");
        
        break;
    case 4:
        console.log("April has 30 days");
        
        break;
    case 5:
        console.log("May has 31 days");
        
        break;
    case 6:
        console.log("june has 30 days");
        
        break;
    case 7:
        console.log("July has 31 days");
        
        break;
    case 8:
        console.log("August has 31 days");
        
        break;
    case 9:
        console.log("September has 30 days");
        
        break;
    case 10:
        console.log("October has 31 days");
        
        break;
    case 11:
        console.log("November has 30 days");
        
        break;
    case 12:
        console.log("December has 31 days");
        
        break;

}



// SUAL 11 Tələbənin daxil etdiyi bala görə A B C D E F qiymətlərindən hansını aldığını müəyyənləşdirrən proqram yazın.
// 90 və yuxarı üçün "A", 80-89 üçün "B", 70-79 üçün "C", 60-69 üçün "D", 59 və daha aşağı qiymətlər üçün "F".
// Daxil edilən rəqəm müsbət, sıfırdan böyük və 100-dən kiçik olmalıdır.


let number = parseInt(prompt("Balinizi qeyd edin") )

if (number > 0 && number <= 100) {
    
}
else if (number > 50 || number < 60); {

     console.log("F");
}
if (number > 60 || number < 70);{

    console.log("D");
}
if (number > 70 || number < 80);{
    console.log("C");
} 
if (number > 80 || number < 90);{
    console.log("B");
 }
 if (number > 90 || number < 100);{
    console.log("A");
 }

   

   


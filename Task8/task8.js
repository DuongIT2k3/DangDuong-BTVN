let weight = 60;
let height = 1.7;
function calcBMI(weight,height){
    let BMI = weight / height ** 2;
    if(BMI < 18.5){
        console.log("Thiếu cân");
    } else if(BMI < 23 && BMI >= 18.5){
        console.log("Bình thường");
    } else if(BMI < 25 && BMI >= 23){
        console.log("Thừa cân");
    } else{
        console.log("Béo phì");
    }
    console.log(BMI);    
}
calcBMI(weight,height);


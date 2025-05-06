let saudiaAirlines =[{
airlineName : "خطوط السعودية",
country : "السعودية",
fleetSize : 302,
destinations :["الرياض", "جدة", "القصيم", "الخبر"],
inOperation: true
}]


function bookFlight(params) {
    saudiaAirlines.map(saudiaAirline =>{
        if (saudiaAirline.destinations == params) {
            return ` تم حجز رحلة إلى ${params}`  ;
            
        }
        else{
            return` ${params} عذرًا، لا توجد رحلات إلى` ;
            
        }
        })
        
}

bookFlight("الرياض")

/* let bookFlight = saudiaAirlines.map(saudiaAirline =>{
if (saudiaAirline.destinations === "الرياض") {
    return " تم حجز رحلة إلى الرياض ";
    
}
else{
    return "عذرًا، لا توجد رحلات إلى الرياض";
    
}
})

console.log(bookFlight); */

function addDestination(name) {
    saudiaAirlines.map(saudiaAirline=>{
        return console.log( saudiaAirline.destinations + name);
   })
}

 addDestination("لندن")

/* let addDestination = saudiaAirlines.map(saudiaAirline=>{
     return saudiaAirline.destinations;
})
console.log(addDestination + "الاحساء"); */

/* function getSummary() {
    saudiaAirlines.map(saudiaAirline=>{
        return`${saudiaAirline.airlineName} تعمل في ${saudiaAirline.country} وتمتلك ${saudiaAirline.fleetSize} طائرة وتطير إلى 4 وجهة.`
    })
}
getSummary();
 */

let getSummary = saudiaAirlines.map(saudiaAirline=>{
    return`${saudiaAirline.airlineName} تعمل في ${saudiaAirline.country} وتمتلك ${saudiaAirline.fleetSize} طائرة وتطير إلى 4 وجهة.`
})

console.log(getSummary);


function sum(num1 , num2) {
    return num1+num2
}

function sub(num1 , num2) {
    return num1-num2
}

function milt(num1 , num2) {
    return num1*num2
}

function div(num1 , num2) {
    return num1/num2
}

console.log(sum(2,4));
console.log(sub(2,4));
console.log(milt(2,4));
console.log(div(2,4));



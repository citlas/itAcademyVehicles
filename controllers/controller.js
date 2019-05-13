"use strict";
/*
function createCar(plate:string,brand:string,color:string){
    let car=new Car(plate,color,brand);
    car.addWheel(new Wheel(2,"SEAT"));
    document.body.innerText="CAR: PLATE: " + car.plate
    + " COLOR: " +car.color + " BRAND: " + brand
    + " WHEELS: " + JSON.stringify(car.wheels);
}
*/
function createCar2(plate, color, brand) {
    var car = new Car(plate, color, brand);
    var showPlate = document.querySelector('#showPlate');
    var showBrand = document.querySelector('#showBrand');
    var showColor = document.querySelector('#showColor');
    var showCarFeatures = [showPlate, showColor, showBrand];
    if (((showPlate.textContent.length || showColor.textContent.length) || showBrand.textContent.length) > 7) {
        showPlate.innerHTML = "Plate: ";
        showColor.innerHTML = "Color: ";
        showBrand.innerHTML = "Brand: ";
    }
    var carInfo = [];
    for (var _i = 0, _a = Object.entries(car); _i < _a.length; _i++) {
        var _b = _a[_i], carFeature = _b[0], featureIntroduced = _b[1];
        carInfo.push(featureIntroduced.value);
    }
    var regexTest = /\d\d\d\d[A-Za-z][A-Za-z][A-Za-z]/.test(plate.value);
    if (regexTest == false) {
        alert("la matrícula debe constar de 4 números y 3 letras");
        return false;
    }
    else {
        $("#response").removeClass('d-none');
        for (var i = 0; i < showCarFeatures.length; i++) {
            showCarFeatures[i].textContent += carInfo[i + 1];
        }
    }
}
function addWheels(wheel1, wheel2, wheel3, wheel4, diameterWheel1, diameterWheel2, diameterWheel3, diameterWheel4) {
    //Cada roda té un diàmetre >0.4 < 2. -- ver metdo every
    var argumentsLength = arguments.length / 2;
    var takeWheelsFromParams = Object.entries(arguments).slice(0, argumentsLength);
    var takeDiameterFromParams = Object.entries(arguments).slice(argumentsLength);
    console.log(takeDiameterFromParams);
    var wheelsResponse = document.querySelector('#responseWheelsContent');
    for (var i = 0; i < takeWheelsFromParams.length; i++) {
        var wheelFeature = document.createElement('p');
        wheelFeature.setAttribute("class", "wheelFeature" + i + ", col-3");
        wheelsResponse.appendChild(wheelFeature).textContent = "Wheel " + (i + 1) + ": Brand " + takeWheelsFromParams[i][1].value + ", Diameter: " + takeDiameterFromParams[i][1].value + " ";
        console.log(takeDiameterFromParams[i + argumentsLength] + 'diametro');
        console.log(takeWheelsFromParams[i] + 'brand');
    }
    /*
let wheel:any = new Wheel(diameter,brand)

let wheelsBrand:any=[document.querySelector('#wheel1'),document.querySelector('#wheel2'),document.querySelector('#wheel3'),document.querySelector('#wheel4')]
let wheelsDiameter:any=[document.querySelector('#diameterWheel1'),document.querySelector('#diameterWheel2'),document.querySelector('#diameterWheel3'),document.querySelector('#diameterWheel4')]


showingWheels(wheelsBrand,wheelsDiameter)

}
function showingWheels(wheelsBrand:any,wheelsDiameter:any){
let wheelsResponse:any = document.querySelector('#responseWheelsContent')!
wheelsResponse.innerHTML = ''

wheelsBrand.forEach(function(element:any,i:any){
    let wheelFeature = document.createElement('p');
    wheelFeature.setAttribute("class", `wheelFeature${i}, col-3`);
    wheelsResponse!.appendChild(wheelFeature).textContent = `Wheel ${i+1}: Brand ${element.value}, Diameter: ${wheelsDiameter[i].value} `
})
*/
}

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
    $("#response").removeClass('d-none');
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
    for (var i = 0; i < showCarFeatures.length; i++) {
        showCarFeatures[i].textContent += carInfo[i + 1];
    }
}
function addWheels() {
    var wheelsBrand = [document.querySelector('#wheel1'), document.querySelector('#wheel2'), document.querySelector('#wheel3'), document.querySelector('#wheel4')];
    var wheelsDiameter = [document.querySelector('#diameterWheel1'), document.querySelector('#diameterWheel2'), document.querySelector('#diameterWheel3'), document.querySelector('#diameterWheel4')];
    showingWheels(wheelsBrand, wheelsDiameter);
}
function showingWheels(wheelsBrand, wheelsDiameter) {
    var wheelsResponse = document.querySelector('#responseWheelsContent');
    wheelsResponse.innerHTML = '';
    wheelsBrand.forEach(function (element, i) {
        var wheelFeature = document.createElement('p');
        wheelFeature.setAttribute("class", "wheelFeature" + i + ", col-3");
        wheelsResponse.appendChild(wheelFeature).textContent = "Wheel " + (i + 1) + ": Brand " + element.value + ", Diameter: " + wheelsDiameter[i].value + " ";
    });
}

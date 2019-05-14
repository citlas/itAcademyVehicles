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
    var wheelBrands = [wheel1, wheel2, wheel3, wheel4];
    var wheelDiameters = [diameterWheel1, diameterWheel2, diameterWheel3, diameterWheel4];
    var wheelsResponse = document.querySelector('#responseWheelsContent');
    var mywheels = [];
    for (var i = 0; i < wheelBrands.length; ++i) {
        mywheels[i] = new Wheel(wheelDiameters[i].value, wheelBrands[i].value);
        if (isNaN(Number(mywheels[i].diameter))) {
            alert("El diametro de la rueda " + (i + 1) + " no es correcto, debe ser un n\u00FAmero entre 0.4 y 2, , no letra");
            return false;
        }
        if ((Number(wheelDiameters[i].value) < 0.4) || (Number(wheelDiameters[i].value) > 2)) {
            alert("El diametro de la rueda " + (i + 1) + " no es correcto, debe ser entre 0.4 y 2");
            return false;
        }
    }
    mywheels.forEach(function (element, i) {
        var wheelFeature = document.createElement('p');
        wheelFeature.setAttribute("class", "wheelFeature" + i + ", col-3");
        wheelsResponse.appendChild(wheelFeature).textContent = "Wheel " + (i + 1) + ": Brand " + element.brand + ", Diameter: " + mywheels[i].diameter + " ";
    });
}

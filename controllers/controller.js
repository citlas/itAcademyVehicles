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
function createCar2() {
    var plate = document.querySelector('#plate');
    var brand = document.querySelector('#brand');
    var color = document.querySelector('#color');
    var car = {};
    var regexTest = /\d\d\d\d[A-Za-z][A-Za-z][A-Za-z]/.test(plate.value);
    if (regexTest) {
        car = new Car(plate.value, color.value, brand.value);
        showCar(car);
    }
    else {
        alert("la matrícula debe constar de 4 números y 3 letras");
    }
}
function showCar(car) {
    var showPlate = document.querySelector('#showPlate');
    var showBrand = document.querySelector('#showBrand');
    var showColor = document.querySelector('#showColor');
    //borrar contenido anterior y ocultar, mostrar forms
    $("#response").removeClass('d-none');
    $(".carForm").addClass('d-none');
    if (((showPlate.textContent.length || showColor.textContent.length) || showBrand.textContent.length) > 7) {
        showPlate.innerHTML = "Plate: ";
        showColor.innerHTML = "Color: ";
        showBrand.innerHTML = "Brand: ";
    }
    showPlate.textContent += car.plate;
    showColor.textContent += car.color;
    showBrand.textContent += car.brand;
}
function createWheels() {
    var wheel1, wheel2, wheel3, wheel4, diameterWheel1, diameterWheel2, diameterWheel3, diameterWheel4;
    wheel1 = document.querySelector('#wheel1');
    wheel2 = document.querySelector('#wheel2');
    wheel3 = document.querySelector('#wheel3');
    wheel4 = document.querySelector('#wheel4');
    diameterWheel1 = document.querySelector('#diameterWheel1');
    diameterWheel2 = document.querySelector('#diameterWheel2');
    diameterWheel3 = document.querySelector('#diameterWheel3');
    diameterWheel4 = document.querySelector('#diameterWheel4');
    var wheelBrands = [wheel1.value, wheel2.value, wheel3.value, wheel4.value];
    var wheelDiameters = [Number(diameterWheel1.value), Number(diameterWheel2.value), Number(diameterWheel3.value), Number(diameterWheel4.value)];
    var checkOkDiameters = true;
    var mywheels = [];
    for (var i = 0; i < wheelBrands.length; ++i) {
        if (isNaN(wheelDiameters[i])) {
            alert("El diametro de la rueda " + (i + 1) + " no es correcto, debe ser un n\u00FAmero entre 0.4 y 2, , no letra");
            checkOkDiameters = false;
            return false;
        }
        else if (wheelDiameters[i] < 0.4 || wheelDiameters[i] > 2) {
            alert("El diametro de la rueda " + (i + 1) + " no es correcto, debe ser entre 0.4 y 2");
            checkOkDiameters = false;
            return false;
        }
    }
    if (checkOkDiameters) {
        for (var i = 0; i < wheelBrands.length; ++i) {
            mywheels[i] = new Wheel(wheelDiameters[i], wheelBrands[i]);
        }
        showWheels(mywheels);
    }
}
function showWheels(mywheels) {
    var wheelsResponse = document.querySelector('#responseWheelsContent');
    wheelsResponse.textContent = '';
    for (var i = 0; i < mywheels.length; ++i) {
        var wheelFeature = document.createElement('p');
        wheelFeature.setAttribute("class", "wheelFeature" + (i + 1) + ", col-3");
        wheelsResponse.appendChild(wheelFeature).textContent = "Wheel " + (i + 1) + ": Brand " + mywheels[i].brand + ", Diameter: " + mywheels[i].diameter + " ";
    }
}

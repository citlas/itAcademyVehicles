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
    $("#wheelsForm").removeClass('d-none');
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
    var wheelsArray = [];
    var diameterArray = [];
    var checkOkDiameters = true;
    var wheelsQuantity = 4;
    for (var i = 1; i <= wheelsQuantity; i++) {
        wheelsArray[i] = document.getElementById('wheel' + i);
        wheelsArray[i] = wheelsArray[i].value;
        diameterArray[i] = document.getElementById("diameterWheel" + i);
        diameterArray[i] = Number(diameterArray[i].value);
        checkOkDiameters = validate(diameterArray, i);
        if (!checkOkDiameters) {
            return false;
        }
    }
    var mywheels = [];
    if (checkOkDiameters) {
        for (var i = 0; i < wheelsArray.length; ++i) {
            mywheels[i] = new Wheel(diameterArray[i], wheelsArray[i]);
        }
        showWheels(mywheels);
    }
}
function validate(diameterArray, i) {
    if (isNaN(diameterArray[i])) {
        alert("El diametro de la rueda " + i + " no es correcto, debe ser un n\u00FAmero entre 0.4 y 2, , no letra");
        //checkOkDiameters= false
        return false;
    }
    else if (diameterArray[i] < 0.4 || diameterArray[i] > 2) {
        alert("El diametro de la rueda " + i + " no es correcto, debe ser entre 0.4 y 2");
        //checkOkDiameters= false
        return false;
    }
    return true;
}
function showWheels(mywheels) {
    var wheelsResponse = document.querySelector('#responseWheelsContent');
    wheelsResponse.textContent = '';
    for (var i = 1; i < mywheels.length; ++i) {
        var wheelFeature = document.createElement('p');
        wheelFeature.setAttribute("class", "wheelFeature" + i + ", col-3");
        wheelsResponse.appendChild(wheelFeature).textContent = "Wheel " + i + ": Brand " + mywheels[i].brand + ", Diameter: " + mywheels[i].diameter + " ";
    }
}

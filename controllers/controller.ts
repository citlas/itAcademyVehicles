/*
function createCar(plate:string,brand:string,color:string){
    let car=new Car(plate,color,brand);
    car.addWheel(new Wheel(2,"SEAT"));
    document.body.innerText="CAR: PLATE: " + car.plate 
    + " COLOR: " +car.color + " BRAND: " + brand 
    + " WHEELS: " + JSON.stringify(car.wheels);
}
*/


function createCar2(plate:any,color:any,brand:any){
    let car:any = new Car(plate,color,brand)
   
    let showPlate:any = (<HTMLInputElement>document.querySelector('#showPlate'))
    let showBrand:any = (<HTMLInputElement>document.querySelector('#showBrand'))
    let showColor:any = (<HTMLInputElement>document.querySelector('#showColor'))
    let showCarFeatures=[showPlate,showColor,showBrand]
  

    if(((showPlate.textContent.length || showColor.textContent.length) || showBrand.textContent.length)>7){
        showPlate.innerHTML = "Plate: "
        showColor.innerHTML = "Color: "
        showBrand.innerHTML = "Brand: "
    }

    let carInfo = []
    for (let [carFeature, featureIntroduced] of Object.entries(car)) {
        carInfo.push(featureIntroduced.value);       
    }

    let regexTest = /\d\d\d\d[A-Za-z][A-Za-z][A-Za-z]/.test(plate.value)

    if(regexTest==false){
        alert("la matrícula debe constar de 4 números y 3 letras")
        return false
    } else {
        $("#response").removeClass('d-none');
        for(let i=0; i<showCarFeatures.length; i++ ){
            showCarFeatures[i].textContent += carInfo[i+1];
        }
    
    }
           
}
    



function addWheels(wheel1:any,wheel2:any,wheel3:any,wheel4:any,diameterWheel1:any,diameterWheel2:any,diameterWheel3:any,diameterWheel4:any){
    let wheelBrands = [wheel1,wheel2,wheel3,wheel4]
    let wheelDiameters = [diameterWheel1,diameterWheel2,diameterWheel3,diameterWheel4]  
    let wheelsResponse:any = document.querySelector('#responseWheelsContent')!  
    let mywheels:any = []

    for (let i = 0; i < wheelBrands.length; ++i) {
        mywheels[i] = new Wheel(wheelDiameters[i].value,wheelBrands[i].value)

        if(isNaN(Number(mywheels[i].diameter))){
            alert(`El diametro de la rueda ${i+1} no es correcto, debe ser un número entre 0.4 y 2, , no letra`)
            return false
        }

        if((Number(wheelDiameters[i].value)<0.4)||(Number(wheelDiameters[i].value)>2)){
            alert(`El diametro de la rueda ${i+1} no es correcto, debe ser entre 0.4 y 2`)            
            return false
        } 
    }     
             
        mywheels.forEach(function(element:any,i:any){
        let wheelFeature = document.createElement('p'); 
        wheelFeature.setAttribute("class", `wheelFeature${i}, col-3`);
        wheelsResponse!.appendChild(wheelFeature).textContent = `Wheel ${i+1}: Brand ${element.brand}, Diameter: ${mywheels[i].diameter} `
    })
}
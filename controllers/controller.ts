/*
function createCar(plate:string,brand:string,color:string){
    let car=new Car(plate,color,brand);
    car.addWheel(new Wheel(2,"SEAT"));
    document.body.innerText="CAR: PLATE: " + car.plate 
    + " COLOR: " +car.color + " BRAND: " + brand 
    + " WHEELS: " + JSON.stringify(car.wheels);
}
*/


function createCar2(){
    
    let plate:any = (<HTMLInputElement>document.querySelector('#plate'))
    let brand:any = (<HTMLInputElement>document.querySelector('#brand'))
    let color:any = (<HTMLInputElement>document.querySelector('#color'))
    let car:any = {}
    let regexTest = /\d\d\d\d[A-Za-z][A-Za-z][A-Za-z]/.test(plate.value)
    
    if (regexTest){
        car = new Car(plate.value,color.value,brand.value)
        showCar(car);
    } else {
        alert("la matrícula debe constar de 4 números y 3 letras")
    }         
}
    

function showCar(car:any) {
    
    let showPlate:any = (<HTMLInputElement>document.querySelector('#showPlate'))
    let showBrand:any = (<HTMLInputElement>document.querySelector('#showBrand'))
    let showColor:any = (<HTMLInputElement>document.querySelector('#showColor'))
    
    //borrar contenido anterior y ocultar, mostrar forms
    $("#wheelsForm").removeClass('d-none');
    $(".carForm").addClass('d-none'); 
      if(((showPlate.textContent.length || showColor.textContent.length) || showBrand.textContent.length)>7){
        showPlate.innerHTML = "Plate: "
        showColor.innerHTML = "Color: "
        showBrand.innerHTML = "Brand: "
    }

    showPlate.textContent += car.plate;
    showColor.textContent += car.color;
    showBrand.textContent += car.brand;
}



function createWheels(){

    let wheelsArray:any = []
    let diameterArray:any = []
    let checkOkDiameters:boolean = true
    let wheelsQuantity:number = 4

    for (let i = 1; i <= wheelsQuantity; i++) {
       wheelsArray[i] = document.getElementById('wheel'+i)
       wheelsArray[i] = wheelsArray[i].value
       diameterArray[i] = document.getElementById(`diameterWheel`+i)
       diameterArray[i] = Number(diameterArray[i].value)
       checkOkDiameters = validate(diameterArray,i)
       if(!checkOkDiameters){
           return false
       }
       
    }
    
    let mywheels:any = []  
    if(checkOkDiameters){
        for (let i = 0; i < wheelsArray.length; ++i) {
            mywheels[i] = new Wheel(diameterArray[i],wheelsArray[i]);
        }
        showWheels(mywheels)
    }
}

function validate(diameterArray:any,i:number){
    if(isNaN(diameterArray[i])){
        alert(`El diametro de la rueda ${i} no es correcto, debe ser un número entre 0.4 y 2, , no letra`)
        //checkOkDiameters= false
        return false
    } else if(diameterArray[i]<0.4||diameterArray[i]>2){
        alert(`El diametro de la rueda ${i} no es correcto, debe ser entre 0.4 y 2`)
        //checkOkDiameters= false
        return false
    } 
    return true
}

function showWheels(mywheels:any){
    let wheelsResponse:any = document.querySelector('#responseWheelsContent')!  
    wheelsResponse.textContent = ''
    for (let i = 1; i < mywheels.length; ++i) {
        let wheelFeature = document.createElement('p'); 
        wheelFeature.setAttribute("class", `wheelFeature${i}, col-3`);
        wheelsResponse!.appendChild(wheelFeature).textContent = `Wheel ${i}: Brand ${mywheels[i].brand}, Diameter: ${mywheels[i].diameter} `
    }
}
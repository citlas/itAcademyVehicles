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
        
    $("#response").removeClass('d-none');

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

    for(let i=0; i<showCarFeatures.length; i++ ){
        showCarFeatures[i].textContent += carInfo[i+1];
    }
           
}
    



function addWheels(){
    

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
   
   
}
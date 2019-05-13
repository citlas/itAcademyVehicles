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
    document.querySelector('#responseContent')!.innerHTML = ''
    $("#response").removeClass('d-none');
    createContent('createPlate','Plate');
    createContent('createBrand','Brand');
    createContent('createColor','Color');       
}
    
function createContent(carFeature:any,name:string){
    let plate:any = (<HTMLInputElement>document.querySelector('#plate'))
    let brand:any = (<HTMLInputElement>document.querySelector('#brand'))
    let color:any = (<HTMLInputElement>document.querySelector('#color'))

    let carContent = document.querySelector('#responseContent');

    carFeature = document.createElement('p'); 
    carFeature.setAttribute("class", "col-3");

    if(name=='Plate'){
        carContent!.appendChild(carFeature).textContent = `${name}: ${plate!.value}`;
    } else if (name=='Brand'){
        carContent!.appendChild(carFeature).textContent = `${name}: ${brand!.value}`;
    }  else if (name=='Color'){
        carContent!.appendChild(carFeature).textContent = `${name}: ${color!.value}`;
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
import { appState } from "../AppState.js"
import { carsService } from "../Services/CarsService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

 function drawCars() {
   let template = '';
   appState.cars.forEach((car) => (template += car.CarTemplate));
   setHTML('listings',template)
 }

export class CarsController{
  
 
  
  
  constructor() {
    appState.on('cars',drawCars)
  }


  async getCarsAPI(){
    try {
      await carsService.getCars()
    } catch (error) {
      console.error('[Get Cars]',error);
      Pop.error(error)
    }
  }
}
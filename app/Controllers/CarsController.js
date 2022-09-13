import { appState } from '../AppState.js';
import { Car } from '../Models/Car.js';
import { carsService } from '../Services/CarsService.js';
import { getFormData } from '../Utils/FormHandler.js';
import { Pop } from '../Utils/Pop.js';
import { setHTML } from '../Utils/Writer.js';

function drawCars() {
  let template = '';
  appState.cars.forEach((car) => (template += car.CarCardTemplate));
  setHTML('listings', template);
}

export class CarsController {
  constructor() {
    appState.on('cars', drawCars);
    this.getCarsAPI();
  }

  showCars() {
    this.getCarsAPI();
    setHTML('forms', Car.GetCarFormTemplate());
  }

  async addCar() {
    try {
      window.event.preventDefault();
      const form = window.event.target;
      let formData = getFormData(form);
      await carsService.addCar(formData);
      form.reset();
    } catch (error) {
      console.error('[addCar]', error);
      Pop.error(error)
    }
  }

async deleteCar(id){
  try {
    await carsService.deleteCar()
  } catch (error) {
    console.error('[deleteCar]',error)
    Pop.error(error)
  }
}






  async getCarsAPI() {
    try {
      await carsService.getCarsAPI();
    } catch (error) {
      console.error('[Get Cars]', error);
      Pop.error(error);
    }
  }
}

import { appState } from '../AppState.js';
import { House } from "../Models/House.js";
import { housesService } from '../Services/HousesService.js';
import { Pop } from '../Utils/Pop.js';
import { setHTML } from '../Utils/Writer.js';

function drawHouses() {
  let template = '';
  appState.houses.forEach((house) => (template += house.HouseCardTemplate));
  setHTML('listings', template);
}

export class HousesController {
  constructor() {
    this.getHousesAPI()
    appState.on('houses', drawHouses);
  }


showHouses(){
  this.getHousesAPI()
  setHTML('forms',House.GetHouseFormTemplate())
}

  addHouse() {
    try {
      window.event.preventDefault();
      const form = window.event.target;
      let formData = getFormData(form);
      housesService.addHouse(formData);

      form.reset();
    } catch (error) {
      console.error('addHouse', error);
    }
  }

  async getHousesAPI() {
    try {
      await housesService.getHousesAPI();
    } catch (error) {
      console.error('[getHousesAPI]', error);
      Pop.error(error);
    }
  }
}

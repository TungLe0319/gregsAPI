import { appState } from '../AppState.js';
import { House } from "../Models/House.js";
import { housesService } from '../Services/HousesService.js';
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from '../Utils/Pop.js';
import { setHTML } from '../Utils/Writer.js';

function drawHouses() {
  let template = '';
  appState.houses.forEach((house) => (template += house.HouseCardTemplate));
  setHTML('listings', template);
}

export class HousesController {
  constructor() {
    this.showHouses()
    appState.on('houses', drawHouses);
  }

  showHouses() {
    this.getHousesAPI();
    setHTML('forms', House.GetHouseFormTemplate());
  }

  async handleSubmit() {
    try {
      window.event.preventDefault();
      const form = window.event.target;
      let formData = getFormData(form);

      if (appState.activeHouse) {
        await housesService.editHouse(formData);
      } else {
        await housesService.addHouse(formData);
      }

     
      form.reset();
    } catch (error) {
      console.error('[addHouse]', error);
      Pop.error(error);
    }
  }

  addHouse() {
    appState.activeHouse = null;
    const template = House.GetHouseFormTemplate();
    setHTML('forms', template);
  }

  async deleteHouse(id) {
    try {
      await housesService.deleteHouse(id);
    } catch (error) {
      console.error('[deleteHouse]', error);
      Pop.error(error);
    }
  }

  beginEdit(id) {
    housesService.setActiveHouse(id);
    setHTML('forms', House.GetHouseFormTemplate(appState.activeHouse));
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

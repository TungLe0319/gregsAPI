import { appState } from "../AppState.js";
import { House } from "../Models/House.js";
import { api } from "./AxiosService.js";


 class HousesService {
   addHouse(formData) {
     let house = new House(formData);
     appState.houses = [house, ...appState.houses];
   }

   async getHousesAPI() {
     const res = await api.get('/api/houses');
    //  console.log('houses?',res.data);
     appState.houses = res.data.map(apihouse => new House(apihouse))
   }
 }
export const housesService = new HousesService()
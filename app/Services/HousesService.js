import { appState } from "../AppState.js";
import { House } from "../Models/House.js";
import { Pop } from "../Utils/Pop.js";
import { api } from "./AxiosService.js";


 class HousesService {
   async getHousesAPI() {
     const res = await api.get('/api/houses');
     //  console.log('houses?',res.data);
     appState.houses = res.data.map((apihouse) => new House(apihouse));
   }

   async addHouse(formData) {
     const res = await api.post('/api/houses', formData);
     console.log('response?[addhouse]', res.data);
     let house = new House(res.data);
     appState.houses = [...appState.houses, house];
   }

   async deleteHouse(id) {
     const yes = await Pop.confirm('Are You Sure?');
     if (!yes) {
       return;
     } //FULL STOP
     await api.delete(`/api/houses/${id}`);
     appState.houses = appState.houses.filter((h) => h.id != id);
   }

   /** */
   setActiveHouse(id) {
     const house = appState.houses.find((house) => house.id == id);
     if (!house) {
       throw new Error('Bad ID');
     }
     appState.activeHouse = house;
     console.log('active house', appState.activeHouse);
   }

   /** 
    *  //example of a PUT REQUEST aka (UPDATE or EDIT)
   //formData is the update you want to apply to that particular Car
    * essentially in appData we made a new ActiveHouse = {} where we find and pass the id of the object we want and make it the active one  splice where the old one is in the api array and replace it with the updated house. */
   async editHouse(formData) {
     const house = appState.activeHouse;
     const res = await api.put(`/api/houses/${house.id}`, formData);
     console.log('[editHouse]updated response', res.data);
     const index = appState.houses.findIndex((h) => h.id == house.id);
     const updatedHouse = new House(res.data);
     appState.houses.splice(index, 1, updatedHouse);
     appState.emit('houses');
   }
 }
export const housesService = new HousesService()


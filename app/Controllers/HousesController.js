import { appState } from "../AppState.js"
import { housesService } from "../Services/HousesService.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"


function drawHouses(){
  let template = ''
  appState.houses.forEach(house=> template += house.HouseTemplates)
  setHTML('listings', template)
}
export class HousesController{
  
  
  
  constructor() {
    appState.on('houses',drawHouses)
  }



  async getHousesAPI(){
    try {
      await housesService.getHousesAPI()
    } catch (error) {
      console.error('[getHousesAPI',error)
      Pop.error(error)
    }
  }
}
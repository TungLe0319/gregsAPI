import { api } from "./AxiosService.js"

class HousesService{

async getHousesAPI(){
  const res = await api.get()
}
}

export const housesService =  new HousesService()
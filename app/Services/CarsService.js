import { api } from "./AxiosService.js"

class CarsService{


  async getCarsAPI(){
    const res = await api.get('')
  }
}

export const carsService = new CarsService()
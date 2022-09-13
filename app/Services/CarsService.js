import { appState } from "../AppState.js";
import { Car } from "../Models/Car.js";
import { Pop } from "../Utils/Pop.js";
import {api} from "./AxiosService.js"

 class CarsService {


async getCarsAPI(){
  const res = await api.get('/api/cars')
  // console.log('what are the cars',res.data);
  appState.cars = res.data.map(banana => new Car(banana))
}


//s when doing post or a put  the second is a Payload the third is your options
//when doing a get or delete the second is your options
async  addCar(formData) {
  const res = await api.post('/api/cars',formData)
  console.log('what is response[addcar]',res.data);
  //res.data includes all of the formData + the brand new shiny ID
  let car = new Car(res.data)
  // switched the car and ...appstate to have the car show up on top of the array/start of the page
  appState.cars = [...appState.cars, car]
  
}



//use backticks to put in the id at the end of when put or delete
async deleteCar(id){
  const yes = await Pop.confirm('Are You Sure?')
 await api.delete(`/api/cars/${id}`)
appState.cars = appState.cars.filter(c => c.id != id)
}
}


export const carsService = new CarsService()
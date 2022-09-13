import { api } from "./AxiosService.js"

class JobsService{
  


  async getJobsAPI(){
    const res = await api.get()
  }
}

export const jobsService = new JobsService()
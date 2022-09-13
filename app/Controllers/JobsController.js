import { appState } from "../AppState.js"
import { jobsService } from "../Services/JobsService.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"

function drawJobs(){
  let template = ''
  appState.jobs.forEach(job => template += job.JobCardTemplate)
  setHTML('listings',template)
}




export class JobsController{

  constructor() {
    appState.on('jobs', drawJobs)
  }


  


  async getJobsAPI(){
    try {
      await jobsService.getJobsAPI()
    } catch (error) {
      console.error('[getJobsAPI',error);
      Pop.error(error)
    }
  }
}
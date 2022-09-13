import { appState } from "../AppState.js"
import { House } from "../Models/House.js"
import { Job } from "../Models/Job.js"
import { jobsService } from "../Services/JobsService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"

function drawJobs(){
  let template = ''
  appState.jobs.forEach(job => template += job.JobCardTemplate)
  setHTML('listings',template)
}




export class JobsController {
  constructor() {
    appState.on('jobs', drawJobs);
    this.showJobs()
  }
  showJobs() {
    this.getJobsAPI();
    setHTML('forms', Job.GetJobFormTemplate());
  }

  async handleSubmit() {
    try {
      window.event.preventDefault();
      const form = window.event.target;
      let formData = getFormData(form);

      if (appState.activeJob) {
        await jobsService.editJob(formData);
      } else {
        await jobsService.addJob(formData);
      }

   
      form.reset();
    } catch (error) {
      console.error('[addJob]', error);
      Pop.error(error);
    }
  }

  async deleteJob(id) {
    try {
      await jobsService.deleteJob(id);
    } catch (error) {
      console.error('[deleteJob]', error);
      Pop.error(error);
    }
  }

  addJob() {
    appState.activeJob = null;
    const template = Job.GetJobFormTemplate()
    setHTML('forms', template);
  }

  //const editable = appState.activeCar is a broken down version of what's happening in the Car.GetCarFormTemplate()
  beginEdit(id) {
   jobsService.setActiveJob(id)
    setHTML('forms', Job.GetJobFormTemplate(appState.activeJob));
  }

  async getJobsAPI() {
    try {
      await jobsService.getJobsAPI();
    } catch (error) {
      console.error('[getJobsAPI', error);
      Pop.error(error);
    }
  }
}
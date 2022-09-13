import { appState } from '../AppState.js';
import { Job } from '../Models/Job.js';
import { Pop } from "../Utils/Pop.js";
import { api } from "./AxiosService.js";


class JobsService {
  async getJobsAPI() {
    const res = await api.get('/api/jobs');
    appState.jobs = res.data.map((jobapi) => new Job(jobapi));
  }

  async addJob(formData) {
    const res = await api.post('/api/jobs', formData);
    console.log('response?[addJob]', res.data);
    let job = new Job(res.data);
    appState.jobs = [...appState.jobs, job];
  }

  async deleteJob(id) {
    const yes = await Pop.confirm('Are You Sure?');
    if (!yes) {
      return;
    } //FULL STOP
    await api.delete(`/api/jobs/${id}`);
    appState.jobs = appState.jobs.filter((j) => j.id != id);
  }

  setActiveJob(id) {
    const job = appState.jobs.find((job) => job.id == id);
    if (!job) {
      throw new Error('Bad ID');
    }
    appState.activeJob = job;
    console.log('active Job', appState.activeJob);
  }

  async editJob(formData) {
    const job = appState.activeJob;
    const res = await api.put(`/api/jobs/${job.id}`, formData);
    console.log('[editJob]updated response', res.data);
    const index = appState.jobs.findIndex((j) => j.id == job.id);
    const updatedJob = new Job(res.data);
    appState.jobs.splice(index, 1, updatedJob);
    appState.emit('jobs');
  }
}
export const jobsService = new JobsService();

import { appState } from '../AppState.js';
import { Job } from '../Models/Job.js';


class JobsService {
  addJob(formData) {
    let job = new Job(formData);
    appState.jobs = [job, ...appState.jobs];
  }

  async getJobsAPI() {
    const res = await api.get('/api/jobs');
    appState.jobs = res.data.map(jobapi => new Job(jobapi))
  }
}
export const jobsService = new JobsService();

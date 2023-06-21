import { AppState } from "../AppState.js";
import { jobsService } from "../services/JobsService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawJobs() {
  const jobs = AppState.jobs
  let template = ''

  jobs.forEach(job => template += job.cardTemplate)

  setHTML('jobListing', template)
}

export class JobsController {
  constructor() {
    console.log("Jobs Controller Loaded");

    _drawJobs()

    AppState.on('jobs', _drawJobs)

  }

  createJob(event) {
    event.preventDefault()

    const form = event.target

    const jobData = getFormData(form)

    jobsService.createJob(jobData)
  }

  async deleteJob(jobId) {
    const wantsToBuy = await Pop.confirm("are you sure you wanna take this job?")

    if (!wantsToBuy) {
      return
    }

    jobsService.deleteJob(jobId)

  }
}
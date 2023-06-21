import { AppState } from "../AppState.js"
import { Job } from "../models/Job.js"

class JobsService {
  deleteJob(jobId) {
    const foundJob = AppState.jobs.find(job => job.id == jobId)

    AppState.jobs.splice(foundJob, 1)

    AppState.emit('jobs')
  }
  createJob(jobData) {
    const newJob = new Job(jobData)

    AppState.jobs.push(newJob)

    AppState.emit('jobs')
  }

}



export const jobsService = new JobsService()
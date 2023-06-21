import { generateId } from "../utils/generateId.js"


export class Job {
  constructor(data) {
    this.id = generateId()
    this.title = data.title
    this.salary = data.salary
    this.schedule = data.schedule
    this.jobType = data.jobType
    this.description = data.description
  }



  get cardTemplate() {
    return /*html*/`
    <div class="col-4 m-3 elevation-5">
    <div>
      <div class="d-flex justify-content-center">
        <h1>${this.title}</h1>
      </div>
      <p class="">$${this.salary}</p>
      <p class="">${this.schedule}</p>
      <p>${this.jobType}</p>
      <p>${this.description}</p>
      <div class="d-flex justify-content-center">
        <button onclick="app.JobsController.deleteJob('${this.id}')" class="btn btn-success">Purchase</button>
      </div>

    </div>
  </div>
    `
  }
}
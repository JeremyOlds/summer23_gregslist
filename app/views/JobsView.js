export const jobsView =/*html*/ `

<div class="container-fluid">
  <section class="row justify-content-center">
  
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Add Listing
</button>

  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form onsubmit="app.JobsController.createJob(event)">
                <label for="jobTitle">Job Title</label>
                <input type="text" id="jobTitle" name="title" required>

                <label for="jobSalary"> Hourly Wage</label>
                <input type="number" id="jobSalary" name="salary" min="0" max="300" required>

                <label for="jobSchedule">Shift</label>
                <input type="text" id="jobSchedule" name="schedule" required>

                <label for="jobTypeShift">Part-time or Full-time</label>
                <input type="text" id="jobTypeShift" name="jobType" required>

                <label for="jobDescription">Description</label>
                <input type="textarea" id="jobDescription" name="description" rows="10">

                <button type="submit">Add Listing</button>

              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
  
  
  
  
  
  </section>






  <section id="jobListing" class="row justify-content-center mt-3"></section>
`
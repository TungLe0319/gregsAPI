export class Job {
  /**
   * The data needed to make a car
   * @param {{imgUrl: string, company: string, jobTitle: string, hours: number,rate: number ,description: string, id?:string}} data
   */
  constructor(data) {
    this.id = data.id;

    this.company = data.company;
    this.jobTitle = data.jobTitle;
    this.hours = data.hours;
    this.rate = data.rate;
    this.description = data.description;
  }

  get JobCardTemplate() {
    return /*html*/ `
    <div class="col-md-3 col-lg-3 mb-3 position-relative" style="width:20rem;">
      <div class="card">
       
        <div class="card-body mt-5">
       
        <div class="text-primary border-bottom border-2 " >
         <h5 class="" >
           ${this.company}
          </h5>
        </div>
       
         <div class="text-warning text-end">
         <small>
         <em>
         ${this.jobTitle}
         </em>
         </small>
         </div>
         
          <div class="position-absolute bg-light p-1 ps-2 top-0 start-0 rounded hoverdiv elevation-2 selectable">
            <strong>Hours:${this.hours} || Starting:$${this.rate}</strong>
          </div>
          <div class="p-1 mt-4">
         <span>
        <p class="border-bottom"> Job Description:</p> 
         </span>
         <div>
         
         <small>${this.description}</small>
         </div>
          </div>
        </div>
        <div class="card-footer d-flex justify-content-around">
        <button class="btn text-uppercase text-danger " onclick="app.jobsController.deleteJob('${this.id}')">Delete</button>
        <button class="btn text-uppercase text-success" data-bs-toggle="offcanvas" data-bs-target="#rightcanvas" onclick="app.jobsController.beginEdit('${this.id}')">Edit</button>
        </div>
      </div>
    </div>
    `;
  }
  // -------------------------------------------------------------------------------------//
  /**
   *
   * @param {Job} [editable ]
   *
   */
  static GetJobFormTemplate(editable) {
    editable =
      editable ||
      new Job({
        company: '',
        jobTitle: '',
        hours: 40,
        rate: 55,
        description: '',
      });
    return /*html */ `
    <form onsubmit="app.jobsController.handleSubmit()">

 

  <div class="form-floating mb-3">
    <input type="text" class="form-control" name="company" required value="${
      editable.company
    }">
    <label for="company">Company</label>
  </div>

  <div class="form-floating mb-3">
    <input type="text" class="form-control" name="jobTitle" required value="${
      editable.jobTitle
    }">
    <label for="jobtitle">Job title</label>
  </div>

  <div class="form-floating mb-3">
    <input type="number" class="form-control" name="hours" required value="${
      editable.hours
    }">
    <label for="hours">Hours</label>
  </div>

  <div class="form-floating mb-3">
    <input type="number" class="form-control" name="rate" required  value="${
      editable.rate
    }">
    <label for="rate">Rate</label>
  </div>

 

  <div class="form-floating">
    <textarea class="form-control" placeholder="Describe your Listing" name="description">${
      editable.description
    }</textarea>
    <label for="description">Description</label>
  </div>

  <div class="d-flex my-4 gap-5 align-items-center">
     <button class="btn" type="reset">Cancel</button>
    <button class="btn btn-primary" type="submit">${
      editable.id ? 'Save Changes' : 'Create'
    } </button>
  </div>


</form>
    `;
  }
}

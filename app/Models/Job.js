export class Job {
  /**
   * The data needed to make a car
   * @param {{imgUrl: string, company: string, jobtitle: string, hours: number,rate: number ,description: string, id?:string}} data
   */
  constructor(data) {
    this.id = data.id 
    this.imgUrl = data.imgUrl;
    this.company = data.company;
    this.jobtitle = data.jobtitle;
    this.hours = data.hours;
    this.rate = data.rate;
    this.description = data.description;
  }

  get JobCardTemplate() {
    return /*html*/ `
    <div class="col-md-4 col-lg-3 mb-3">
      <div class="card">
        <img src="${this.imgUrl}" alt="" class="img-fluid">
        <div class="card-body">
          <h6 class="text-uppercase">
            ${this.company}
          </h6>
          <h6 class="text-uppercase">
            ${this.jobtitle}
          </h6>
          <p>
            <strong>$ ${this.hours}|${this.rate}</strong>
          </p>
          <p>${this.description}</p>
        </div>
      </div>
    </div>
    `;
  }


  /**
   * 
   * @param {Job} [editable ]
   * 
   */
  static GetJobFormTemplate(editable){
    return /*html */`
    <form onsubmit="app.jobsController.addJob()">

  <div class="form-floating mb-3">
    <input type="url" class="form-control" name="imgUrl">
    <label for="imgUrl">Image Url <i>(We are too lazy for uploads)</i></label>
  </div>


  <div class="form-floating mb-3">
    <input type="text" class="form-control" name="company" required>
    <label for="company">Company</label>
  </div>

  <div class="form-floating mb-3">
    <input type="text" class="form-control" name="jobtitle" required>
    <label for="jobtitle">Job title</label>
  </div>

  <div class="form-floating mb-3">
    <input type="number" class="form-control" name="hours" required>
    <label for="hours">Hours</label>
  </div>

  <div class="form-floating mb-3">
    <input type="number" class="form-control" name="rate" required >
    <label for="rate">Rate</label>
  </div>

 

  <div class="form-floating">
    <textarea class="form-control" placeholder="Describe your Listing" name="description"></textarea>
    <label for="description">Description</label>
  </div>

  <div class="d-flex my-4 gap-5 align-items-center">
    <button class="btn" type="reset">Cancel</button>
    <button class="btn btn-primary" type="submit">Submit</button>
  </div>


</form>
    `;
  }
}

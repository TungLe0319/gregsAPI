export class House {
  /**
   * The data needed to make a house
   * @param {{bedrooms: number, bathrooms: number, levels: number, imgUrl: string, year: number, price: number, id?:string}} data
   */
  constructor(data) {
    this.id = data.id;
    this.bedrooms = data.bedrooms;
    this.bathrooms = data.bathrooms;
    this.levels = data.levels;
    this.imgUrl = data.imgUrl;
    this.year = data.year;
    this.price = data.price;
    this.description = data.description;
  }


  // -----------------_______--------__---_-__-_-__-_---_-_-_-________---____--_-_-_-_---------------------------------------------//
  get HouseCardTemplate() {


    return /*html*/ `

    <div class="col-md-4 col-lg-3 mb-3" style="width:20rem;">
      <div class="card">
        <img src="${this.imgUrl}" alt="" class="img-fluid p-1 rounded " style="width:20rem;height:15rem;">
        <div class="card-body elevation-1">
        <div class=" p-1 my-1 rounded">
         <div class="d-flex justify-content-between">
          <span>Rooms:</span>
          <span>${this.bedrooms}</span>
         </div>
         <div class="d-flex justify-content-between ">
          <span>Bathrooms:</span>
          <span>${this.bathrooms}</span>
         </div>
         <div class="d-flex justify-content-between ">
          <span>Levels:</span>
          <span>${this.levels}</span>
         </div>
         <div class="d-flex justify-content-between ">
          <span>Year:</span>
          <span>${this.year}</span>
         </div>
           <div class="p-1 elevation-5 rounded position-absolute top-0 start-0 bg-light hoverdiv selectable">
          
          <strong>$ ${this.price}</strong>
          </div>
          <div class="p-1">
          <small >${this.description}</small>
          </div>
          </div>
          </div>
          <div class="card-footer d-flex justify-content-around">
        <button class="btn text-uppercase text-danger " onclick="app.housesController.deleteHouse('${this.id}')">Delete</button>
        <button class="btn text-uppercase text-success" data-bs-toggle="offcanvas" data-bs-target="#rightcanvas" onclick="app.housesController.beginEdit('${this.id}')">Edit</button>
        </div>
      </div>
    </div>
      `;
  }


// ---------------------------------------------------------------------------------------//

  /**
   *
   * @param {House} [editable]
   *
   */
  static GetHouseFormTemplate(editable) {
    editable =
      editable ||
      new House({
        bedrooms: 0,
        bathrooms: 0,
        levels: 0,
        imgUrl: '',
        year: 2000,
        price: 0,
        description: '',
      });

    return /*html */ `
    
    <form onsubmit="app.housesController.handleSubmit()">
  
 <div class="form-floating mb-3">
   <input type="number" class="form-control" name="bedrooms" required minlength="3" value="${editable.bedrooms}">
   <label for="bedrooms">Bedrooms</label>
 </div>

 <div class="form-floating mb-3">
   <input type="number" class="form-control" name="bathrooms" value="${editable.bathrooms}">
   <label for="bathrooms">Bathrooms</label>
 </div>

 <div class="form-floating mb-3">
   <input type="number" class="form-control" name="levels" required min="1" value="${editable.levels}">
   <label for="levels">Levels</label>
 </div>

 <div class="form-floating mb-3">
   <input type="url" class="form-control" name="imgUrl" value="${editable.imgUrl}" >
   <label for="imgUrl">Picture!</label>
 </div>

 <div class="form-floating mb-3">
   <input type="number" class="form-control" name="year" required  max="9999" value="${editable.year}">
   <label for="year">Year</label>
 </div>

<div class="form-floating mb-3">
   <input type="number" class="form-control" name="price" required min="0" value="${editable.price}">
   <label for="price">Price</label>
 </div>

 <div class="form-floating">
   <textarea class="form-control" placeholder="Describe your Listing" name="description">${editable.description}</textarea>
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

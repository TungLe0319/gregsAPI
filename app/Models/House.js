export class House {
  /**
   * The data needed to make a house
   * @param {{bedrooms: number, bathrooms: number, levels: number, imgUrl: string, year: number, price: number, id?:string}} data
   */
  constructor(data) {
    this.id = data.id 
    this.bedrooms = data.bedrooms;
    this.bathrooms = data.bathrooms;
    this.level = data.levels;
    this.imgUrl = data.imgUrl;
    this.year = data.year;
    this.price = data.price;
    this.description = data.description;
  }

  get HouseCardTemplate() {
    return /*html*/ `

    <div class="col-md-4 col-lg-3 mb-3">
      <div class="card">
        <img src="${this.imgUrl}" alt="" class="img-fluid p-1 rounded elevation-1">
        <div class="card-body ">
        <div class="elevation-1 p-1 my-1 rounded">
         <div class="d-flex justify-content-between">
          <span>Rooms:</span>
          <span>${this.bedrooms}</span>
         </div>
         <div class="d-flex justify-content-between ">
          <span>Bathroom:</span>
          <span>${this.bedrooms}</span>
         </div>
         <div class="d-flex justify-content-between ">
          <span>Levels:</span>
          <span>${this.level}</span>
         </div>
         <div class="d-flex justify-content-between ">
          <span>Year:</span>
          <span>${this.year}</span>
         </div>
         <div class="d-flex justify-content-between ">
          <span>Price:</span>
          <span>${this.price}</span>
         </div>
        
          <p class="">${this.description}</p>
          </div>
        </div>
      </div>
    </div>
      `;
  }


  /**
   * 
   * @param {House} [editable]
   * 
   */
  static GetHouseFormTemplate(editable){
    return /*html */ `
    
    <form onsubmit="app.housesController.addHouse()">
  
 <div class="form-floating mb-3">
   <input type="number" class="form-control" name="bedrooms" required minlength="3">
   <label for="bedrooms">Bedrooms</label>
 </div>

 <div class="form-floating mb-3">
   <input type="number" class="form-control" name="bathrooms" >
   <label for="bathrooms">Bathrooms</label>
 </div>

 <div class="form-floating mb-3">
   <input type="number" class="form-control" name="levels" required min="1">
   <label for="levels">Levels</label>
 </div>

 <div class="form-floating mb-3">
   <input type="url" class="form-control" name="imgUrl"  >
   <label for="imgUrl">Picture!</label>
 </div>

 <div class="form-floating mb-3">
   <input type="number" class="form-control" name="year" required  max="9999">
   <label for="year">Year</label>
 </div>

<div class="form-floating mb-3">
   <input type="number" class="form-control" name="price" required min="0" >
   <label for="price">Price</label>
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

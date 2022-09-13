export class Car {
  constructor(data) {
    this.id = data.id;
    this.make = data.make;
    this.model = data.model;
    this.year = data.year;
    this.price = data.price;
    this.color = data.color
    this.description = data.description;
    this.imgUrl = data.imgUrl;
  }


  get CarTemplate(){
    return /*html */ `
     <div class="col-md-4 col-lg-3">
          <div class="card mb-3 p-2">
            <img src="${this.imgUrl}" alt="${this.make}-${this.model}" class="img-fluid rounded">
            <div class="card-body">
              <h6 class="text-uppercase">${this.make}|${this.model}${this.year}</h6>
              <p><strong>$${this.price}</strong></p>
              <small>${this.description}</small>
            </div>
          </div>
        </div>
    
    
    `;
  }
}

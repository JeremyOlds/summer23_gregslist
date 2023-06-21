import { generateId } from "../utils/generateId.js"


export class House {
  constructor(data) {
    this.id = data.id || generateId()
    this.address = data.address
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.sqft = data.sqft
    this.price = data.price
    this.description = data.description
    this.img = data.img

  }


  get cardtemplate() {
    return /*html*/ `
    <div class="col-10 mt-3 elevation-5">
    <div class="row">
      <div class="col-4 p-0">
        <img class="car-img"
          src="${this.img}"
          alt="">
      </div>
      <div class="col-8">
        <h1>$${this.price}</h1>
        <div class="d-flex">
          <h2 class="house-break">${this.bedrooms} bds</h2>
          <h2 class="house-break">${this.bathrooms} ba</h2>
          <h2>${this.sqft} sqft</h2>
        </div>
        <h2> ${this.address}</h2>
        <h4>${this.description}</h4>
        <button onclick="app.HousesController.deleteHouse('${this.id}')" class="btn btn-success">Purchase</button>
      </div>
    </div>
  </div>
</section>
</div>
    `
  }
}
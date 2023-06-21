import { AppState } from "../AppState.js";
import { housesService } from "../services/HousesService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";


function _drawHouses() {
  const houses = AppState.houses

  let template = ''

  houses.forEach(house => template += house.cardtemplate)

  setHTML('houseListing', template)
}

export class HousesController {
  constructor() {
    console.log("Houses Controller test");
    _drawHouses()
    AppState.on('houses', _drawHouses)
  }

  createHouse(event) {
    event.preventDefault()

    console.log("form submitted")

    const form = event.target

    const houseData = getFormData(form)

    housesService.createHouse(houseData)
  }

  async deleteHouse(houseId) {
    const wantsToBuy = await Pop.confirm("are you sure you wanna buy this house?")

    if (!wantsToBuy) {
      return
    }

    housesService.deleteHouse(houseId)

  }

}
import { AppState } from "../AppState.js"
import { House } from "../models/House.js"

class HousesService {
  deleteHouse(houseId) {
    const foundHouse = AppState.houses.findIndex(house => house.id == houseId)

    AppState.houses.splice(foundHouse, 1)
    AppState.emit('houses')
  }
  createHouse(houseData) {
    const newHouse = new House(houseData)

    AppState.houses.push(newHouse)

    AppState.emit('houses')
  }

}



export const housesService = new HousesService()
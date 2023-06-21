import { Car } from "./models/Car.js"
import { House } from "./models/House.js"
import { Job } from "./models/Job.js"
import { Value } from "./models/Value.js"
import { EventEmitter } from "./utils/EventEmitter.js"
import { isValidProp } from "./utils/isValidProp.js"
import { loadState } from "./utils/Store.js"

class ObservableAppState extends EventEmitter {
  page = ''

  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])

  /** @type {import('./models/Car.js').Car[]} */
  cars = loadState('cars', [Car])

  houses = [
    new House({ price: 375000, sqft: 2136, bedrooms: 3, bathrooms: 2, description: 'What a nice house!', address: "1234 Noway Ln", img: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' }),
    new House({ price: 425000, sqft: 2560, bedrooms: 4, bathrooms: 2, description: 'What a nice house!', address: "1233 Noway Ln", img: 'https://images.unsplash.com/photo-1598228723793-52759bba239c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80' })

  ]



  jobs = [
    new Job({ title: 'Burger Flipper', schedule: 'Day Shift', jobType: "Part-time", salary: 8, description: 'You come in, flip burgers, and get paid' })
  ]



  // NOTE Used to load initial data
  init() {

  }

}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})

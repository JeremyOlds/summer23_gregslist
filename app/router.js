import { AboutController } from "./controllers/AboutController.js";
import { CarsController } from "./controllers/CarsController.js";
import { HomeController } from "./controllers/HomeController.js";
import { HousesController } from "./controllers/HousesController.js";
import { JobsController } from "./controllers/JobsController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";
import { CarView } from "./views/CarView.js";
import { housesView } from "./views/HousesView.js";
import { jobsView } from "./views/JobsView.js";


export const router = [
  {
    path: '',
    controller: HomeController,
    view: /*html*/`
    <div class="p-4">
      <h1>Welcome to Gregslist!</h1>
      <h2>Please select a category from the navbar!</h2>  
    </div>
    `
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  },
  {
    path: '#/cars',
    controller: CarsController,
    view: CarView
  },
  {
    path: '#/houses',
    controller: HousesController,
    view: housesView
  },
  {
    path: '#/jobs',
    controller: JobsController,
    view: jobsView
  }

  // FIXME write a new object that will load a housescontroller when you navigate to it
]
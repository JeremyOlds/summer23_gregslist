export const housesView =/*html*/ `
<div class="container-fluid">


  <section class="row justify-content-center mt-3">

  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Add Listing
      </button>

      <!-- Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form onsubmit="app.HousesController.createHouse(event)">
                <label for="housePrice">Price</label>
                <input type="number" id="housePrice" name="price" min="10000" max="10000000" required>

                <label for="houseBedroom">Bedrooms</label>
                <input type="number" id="houseBedroom" name="bedrooms" min="0" max="30" required>

                <label for="houseBathroom">Bathrooms</label>
                <input type="number" id="houseBathroom" name="bathrooms" min="0" max="10" required>

                <label for="houseSqft">Square Footage</label>
                <input type="number" id="houseSqft" name="sqft" min="50" max="500000" required>

                <label for="houseAddress">Address</label>
                <input type="text" id="houseAddress" name="address" required>

                <label for="houseDescription">Description</label>
                <input type="textarea" id="houseDescription" name="description" rows="10">

                <label for="houseImg"> Image Url</label>
                <input type="url" id="houseImg" name="img" required>

                <button type="submit">Add Listing</button>

              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>

  </section>

  <section id="houseListing" class="row justify-content-center mt-3"></section>
`
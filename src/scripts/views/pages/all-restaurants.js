import RestaurantsSource from '../../data/restaurants-source';
import {allRestaurantsTemplate} from '../templates/template-generator';

const AllRestaurants = {
  async render() {
    return `
            <div class="item-container_heading">
              <h2 class="heading-title">All Restaurants</h2>
            </div>
            <div id="restaurants" class="restaurants">
              
            </div>
        `;
  },

  async afterRender() {
    const restaurants = await RestaurantsSource.allRestaurants();
    const restaurantsContainer = document.getElementById('restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += allRestaurantsTemplate(restaurant);
    });
  },
};

export default AllRestaurants;

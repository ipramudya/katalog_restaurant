import FavoriteRestaurants from '../../data/favrestaurants-idb';
import {allRestaurantsTemplate, notFoundTemplate} from '../templates/template-generator';

const FavRestaurants = {
  async render() {
    return `
            <div class="item-container_heading">
              <h2 class="heading-title">Your Favorite Restaurants</h2>
            </div>
            <div id="restaurants" class="restaurants">
              
            </div>
        `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurants.getAllRestaurants();
    const restaurantsContainer = document.getElementById('restaurants');

    if (restaurants.length > 0) {
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += allRestaurantsTemplate(restaurant);
      });
    } else {
      restaurantsContainer.innerHTML = notFoundTemplate();
    }
  },
};

export default FavRestaurants;

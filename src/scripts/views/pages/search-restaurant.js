import SearchItem from '../../utils/search-item';
import {searchBarTemplate} from '../templates/template-generator';

const SearchRestaurant = {
  async render() {
    return `
              <div class="item-container_heading">
                <h2 class="heading-title">Find Your Restaurants</h2>
                <div id="searchRestaurant">
                
                </div>
              </div>
              <div id="restaurants" class="restaurants">
              
              </div>
        `;
  },

  async afterRender() {
    const restaurantsContainer = document.getElementById('restaurants');

    // search restaurant purpose
    const searchRestaurantContainer = document.getElementById('searchRestaurant');
    searchRestaurantContainer.innerHTML = searchBarTemplate();

    // initialize search button
    SearchItem.init(restaurantsContainer);
  },
};

export default SearchRestaurant;

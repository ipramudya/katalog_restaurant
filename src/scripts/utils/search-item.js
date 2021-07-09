import RestaurantsSource from '../data/restaurants-source';
import {allRestaurantsTemplate, notFoundTemplate} from '../views/templates/template-generator';

const SearchItem = {

  init(restaurantsContainer) {
    this._restaurantsContainer = restaurantsContainer;
    this._searchFields = document.getElementById('searchFields');

    const searchButton = document.getElementById('searchButton');
    searchButton.addEventListener('click', () => {
      this._searchHandler();
    });
  },


  _searchHandler() {
    const searchValue = this._searchFields.value;

    // reset restaurants container for next search event
    this._restaurantsContainer.innerHTML = '';
    this._fetchToServer(searchValue);
  },

  async _fetchToServer(query) {
    const {restaurants, founded} = await RestaurantsSource.searchRestaurant(query);

    if (founded > 0) {
      restaurants.forEach((restaurant) => {
        this._restaurantsContainer.innerHTML += allRestaurantsTemplate(restaurant);
      });
    } else if (founded === 0) {
      this._restaurantsContainer.innerHTML = notFoundTemplate();
    } else {
      alert('Query Error');
    }
  },
};

export default SearchItem;

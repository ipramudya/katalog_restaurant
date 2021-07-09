import ENDPOINTS from '../global/endpoints';
import CONFIG from '../global/config';

class RestaurantsSource {
  static async allRestaurants() {
    const respose = await fetch(ENDPOINTS.ALL_RESTAURANTS);
    const responseJson = await respose.json();
    return responseJson.restaurants;
  };

  static async detailRestaurant(id) {
    const response = await fetch(ENDPOINTS.DETAIL(id));
    return await response.json();
  };

  static async searchRestaurant(query) {
    const response = await fetch(ENDPOINTS.SEARCH_RESTAURANT(query));
    return await response.json();
  }

  static async postRestaurantReviews(body) {
    const response = await fetch(ENDPOINTS.ADD_REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': CONFIG.CONTENT_TYPE,
        'X-Auth-Token': CONFIG.KEY,
      },
      body: JSON.stringify(body),
    });
    return await response.json();
  }
}

export default RestaurantsSource;

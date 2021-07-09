import RestaurantsSource from '../../data/restaurants-source';
import UrlParser from '../../routes/url-parser';
import detailPageHelper from '../../utils/detailPage-helper';
import LikeButtonInit from '../../utils/like-button-init';
import SubmitForm from '../../utils/submit-form';
import {detailRestaurantTemplate} from '../templates/template-generator';

const Detail = {
  async render() {
    return `
            <div id="restaurant" class="restaurant"></div>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const {
      restaurant,
      restaurant: {id, name, pictureId, city, rating, description},
      restaurant: {categories},
      restaurant: {menus: {foods, drinks}},
      restaurant: {customerReviews},
    } = await RestaurantsSource.detailRestaurant(url.id);
    const restaurantContainer = document.getElementById('restaurant');
    restaurantContainer.innerHTML = detailRestaurantTemplate(restaurant);

    // Embedd items inside specific element
    const categoriesElement = document.getElementById('categories');
    detailPageHelper(categories, categoriesElement);

    const drinksElement = document.getElementById('drinks');
    detailPageHelper(drinks, drinksElement);

    const foodsElement = document.getElementById('foods');
    detailPageHelper(foods, foodsElement);

    const reviewElement = document.getElementById('revieswBox');
    detailPageHelper(customerReviews, reviewElement);

    // Like Button
    LikeButtonInit.init({
      likeButtonContainer: document.getElementById('likeContainer'),
      restaurant: {
        id: id,
        name: name,
        pictureId: pictureId,
        city: city,
        rating: rating,
        description: description,
      },
    });

    // Initialize Post Request
    SubmitForm.init(id);
  },
};

export default Detail;

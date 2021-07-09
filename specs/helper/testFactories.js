import LikeButtonInit from '../../src/scripts/utils/like-button-init';

const likeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonInit.init({
    likeButtonContainer: document.getElementById('likeButtonContainer'),
    restaurant,
  });
};

export {likeButtonPresenterWithRestaurant};

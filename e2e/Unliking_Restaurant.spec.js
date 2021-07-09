Feature('Unliking Restaurants');

/* I do this only for simulation purpose */
const simulatingOfLikingRestaurant = async (I) => {
  I.amOnPage('/');
  const firstRestaurant = locate('.restaurant-item_content_heading a').first();
  I.click(firstRestaurant);
  I.click('#likeButton');
};

Before(({I}) => {
  simulatingOfLikingRestaurant(I);
  I.amOnPage('/#/fav');
});

Scenario('Unliking the restaurant', async ({I}) => {
  I.seeElement('.restaurant-item');

  const firstLikedRestaurant = locate('.restaurant-item_content_heading a').first();
  const FirstLikedRestaurantTitle = await I.grabTextFrom(firstLikedRestaurant);
  I.click(firstLikedRestaurant);

  // on page "/#/detail/ID"
  I.seeElement('#likedButton');
  I.click('#likedButton');

  I.amOnPage('/#/fav');
  I.seeElement('.restaurant-item');
  I.dontSee(FirstLikedRestaurantTitle, '.restaurant-item_content_heading a');
});


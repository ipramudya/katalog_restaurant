const assert = require('assert');

Feature('Liking Restaurant');

Before(({I}) => {
  I.amOnPage('/#/fav');
});

Scenario('Liking one Restaurant', async ({I}) => {
  I.see('Restaurant was not found', '#content_heading-not_found');

  I.amOnPage('/');

  I.seeElement('.restaurant-item_content_heading a');

  const firstRestaurant = locate('.restaurant-item_content_heading a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  // on page "/#/detail/ID"
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/fav');
  I.seeElement('.restaurant-item');
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant-item_content_heading');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});



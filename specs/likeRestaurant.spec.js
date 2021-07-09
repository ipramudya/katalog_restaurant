import FavoriteRestaurants from '../src/scripts/data/favrestaurants-idb';
import {likeButtonPresenterWithRestaurant} from './helper/testFactories';

// abstraction
const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe('Like A Restaurant', () => {
  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when a restaurant has not been liked before', async () => {
    await likeButtonPresenterWithRestaurant({id: 1});

    expect(document.querySelector('[aria-label="add to favorite"]'))
        .toBeTruthy();
  });

  it('should not show the unlike button when a restaurant has not been liked before', async () => {
    await likeButtonPresenterWithRestaurant({id: 1});

    expect(document.querySelector('[aria-label="remove to favorite"]'))
        .toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    await likeButtonPresenterWithRestaurant({id: 1});

    document.querySelector('.like').dispatchEvent(new Event('click'));
    const restaurnt = await FavoriteRestaurants.getRestaurant(1);

    expect(restaurnt).toEqual({id: 1});

    FavoriteRestaurants.deleteRestaurant(1);
  });

  it('should not add a restaurant again when it is already liked', async () => {
    await likeButtonPresenterWithRestaurant({id: 1});

    // adding film with ID of 1 to the liked category
    await FavoriteRestaurants.putRestaurant({id: 1});

    // simulate user pressing like button
    document.getElementById('likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurants.getAllRestaurants()).toEqual([{id: 1}]);

    FavoriteRestaurants.deleteRestaurant(1);
  });

  it('should not add a restaurant when it has no id', async () => {
    await likeButtonPresenterWithRestaurant({});

    document.getElementById('likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurants.getAllRestaurants()).toEqual([]);
  });
});

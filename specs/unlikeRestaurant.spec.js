import FavoriteRestaurants from '../src/scripts/data/favrestaurants-idb';
import {likeButtonPresenterWithRestaurant} from './helper/testFactories';

// abstraction
const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe('Unliking a Restaurant', () => {
  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestaurants.putRestaurant({id: 1});
  });

  afterEach(async () => {
    await FavoriteRestaurants.deleteRestaurant(1);
  });

  it('should display unlike widget when the restaurant has been liked', async () => {
    await likeButtonPresenterWithRestaurant({id: 1});

    expect(document.querySelector('[aria-label="remove to favorite"]'))
        .toBeTruthy();
  });

  it('should not display unlike widget when the restaurant has been liked', async () => {
    await likeButtonPresenterWithRestaurant({id: 1});

    expect(document.querySelector('[aria-label="add to favorite"]'))
        .toBeFalsy();
  });

  it('should be able to remove liked restaurant from the list', async () => {
    await likeButtonPresenterWithRestaurant({id: 1});

    document.querySelector('[aria-label="remove to favorite"]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurants.getAllRestaurants()).toEqual([]);
  });

  it('should not throw error if the unliked restaurant is not in the list', async () => {
    await likeButtonPresenterWithRestaurant({id: 1});

    await FavoriteRestaurants.deleteRestaurant(1);

    document.querySelector('[aria-label="remove to favorite"]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurants.getAllRestaurants()).toEqual([]);
  });
});

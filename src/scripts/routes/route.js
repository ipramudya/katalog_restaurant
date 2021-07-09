import AllRestaurants from '../views/pages/all-restaurants';
import Detail from '../views/pages/detail';
import FavRestaurants from '../views/pages/favorite';
import SearchRestaurant from '../views/pages/search-restaurant';

const routes = {
  '/': AllRestaurants,
  '/fav': FavRestaurants,
  '/detail/:id': Detail,
  '/search': SearchRestaurant,
};

export default routes;

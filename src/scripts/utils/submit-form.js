import RestaurantsSource from '../data/restaurants-source';
import detailPageHelper from './detailPage-helper';

const SubmitForm = {
  init(id) {
    this._id = id;
    this._theForm = document.getElementById('addReview');
    // const theForm = document.getElementById('addReview');

    this._isFormExist();
  },

  _isFormExist() {
    if (this._theForm) {
      this._theForm.addEventListener('submit', this._submitHandler());
    } else {
      return null;
    }
  },

  _submitHandler() {
    return (event) => {
      event.preventDefault();

      const formData = new FormData(this._theForm);
      const body = {
        id: this._id,
        name: formData.get('name'),
        review: formData.get('review'),
      };

      // check network, whether user is online or offline
      if (this._checkNetwork()) {
        this._fetchToServer(body);

        // reset input fields
        this._theForm.reset();
      } else {
        alert('Anda sedang offline, tidak dapat menambahkan review...');
      };
    };
  },

  _checkNetwork() {
    return window.navigator.onLine;
  },

  async _fetchToServer(body) {
    const {message, customerReviews} = await RestaurantsSource.postRestaurantReviews(body);

    // Jika sukses, lakukan perubahan UI pada bagian All Reviews
    if (message === 'success') {
      alert(message);
      const reviewElement = document.getElementById('revieswBox');
      detailPageHelper(customerReviews, reviewElement);
    } else {
      alert('fail');
    }
  },
};

export default SubmitForm;

import CONFIG from '../../global/config';

const allRestaurantsTemplate = (item) => `
    <div class="restaurant-item" tabindex="0">
        <div class="restaurant-item_img">
            <img src="${CONFIG.BASE_URL}/images/medium/${item.pictureId}"
             alt="${item.name}" class="restaurant-item_img lazyload">
        </div>
        <div class="restaurant-item_content">
            <h3 class="restaurant-item_content_heading">
                <a href="/#/detail/${item.id}">${item.name}</a>
            </h3>
            <div class="restaurant-item_content_details">
                <div class="details_city">
                    <span class="icon" aria-label="location icon">
                        <i class="fas fa-map-marker-alt"></i>
                    </span>
                    <p class="city_text">${item.city}</p>
                </div>
                <div class="details_rating">
                    <span class="icon" aria-label="star icon">
                        <i class="fas fa-star"></i>
                    </span>
                    <p class="rating_text">${item.rating}</p>
                </div>
            </div>
            <p class="restaurant-item_content_desc">${item.description}</p>
        </div>
    </div>    
`;

const detailRestaurantTemplate = (item) => `
        <div class="restaurant_image">
            <img class="img-box_image" 
            src="${CONFIG.BASE_URL}/images/medium/${item.pictureId}" 
            alt="${item.name}">
            <div class="like-container" id="likeContainer"></div>
        </div>
        <div class="restaurant_detail">
            <input type="radio" name="tabs" id="details" checked>
            <label for="details" class="details_label" tabindex="0">
                <i class="fas fa-info-circle"></i> Details
            </label>

            <input type="radio" name="tabs" id="menus">
            <label for="menus" class="menus_label" tabindex="0">
                <i class="far fa-list-alt"></i> Menu
            </label>

            <input type="radio" name="tabs" id="reviews" >
            <label for="reviews" class="reviews_label" tabindex="0">
                <i class="far fa-smile-beam"></i> Add Review
            </label>

            <section class="tab-section" id="tabDetail">
                <div class="tab-detail_title">
                    <h3 class="title_name">${item.name}</h3>
                    <ul class="title_categories-list" id="categories">
                        
                    </ul>
                </div>
                <div class="tab-detail_address-rating">
                    <div class="address">
                        <span class="address_icon">
                            <i class="fas fa-map-marker-alt"></i>
                        </span>
                        <p class="address_text">${item.address}, Kota ${item.city}</p>
                    </div>
                    <div class="rating">
                        <span class="rating_icon">
                            <i class="fas fa-star"></i>
                        </span>
                        <p class="rating_text">${item.rating}</p>
                    </div>
                </div>
                <p class="tab-detail_desc">${item.description}</p>
            </section>

            <section class="tab-section" id="tabMenu">
                <div class="tab-menu_foods">
                    <h3 class="foods_title">Available Foods</h3>
                    <ul class="foods_list" id ="foods">
                        
                    </ul>
                </div>
                <div class="tab-menu_drinks">
                    <h3 class="drinks_title">Available Drinks</h3>
                    <ul class="drinks_list" id ="drinks">
                        
                    </ul>
                </div>
            </section>

            <section class="tab-section" id="tabReviews">
                <h3>Add Reviews</h3>
                <form id="addReview"">
                    <label for="addReviewName" class="review_label">Name</label>
                    <input type="text" name="name" id="addReviewName" required>
                    <label for="addReviewText" class="review_label">Your Review</label>
                    <textarea name="review" id="addReviewText" required></textarea>
                    <input type="submit" value="Submit" aria-label="submit your review">
                </form>  
            </section>
        </div>
        <div class="restaurant-detail_reviews" id="revieswBox">
            <h3>All Reviews</h3>
        </div>
`;

const reviewTemplate = (item) => `
    <div class="tab-review_item" tabindex="0">
        <div class="item_name-date">
            <h3 class="item_name" id="reviewResultName">${item.name}</h3>
            <h4 class="item_date">on ${item.date}</h4>
        </div>
        <p class="item_text" id="reviewResultText">${item.review}</p>
      </div>  
`;

const likeButtonTemplate = () => `
    <button aria-label="add to favorite" class="like" id="likeButton">
        <i class="far fa-heart"></i>
    </button>
`;

const likedButtonTemplate = () => `
    <button aria-label="remove to favorite" class="like" id="likedButton">
        <i class="fas fa-heart"></i>
    </button>
`;

const searchBarTemplate = () => `
        <input type="text" id="searchFields" placeholder="What are you looking for ?">
        <button type="button" aria-label="submit your search" id="searchButton">
            <i class="fas fa-search"></i>
        </button>
`;

const notFoundTemplate = () => `
    <div class="restaurant-item" tabindex="0">
        <div class="restaurant-item_img">
            <img src="not-found-placeholder.jpg"
             alt="Image was not found" class="restaurant-item_img">
        </div>
        <div class="restaurant-item_content">
            <h3 class="restaurant-item_content_heading">
                <a href="/#/" id="content_heading-not_found">Restaurant was not found</a>
            </h3>
            <div class="restaurant-item_content_details">
                <div class="details_city">
                    <span class="icon" aria-label="location icon">
                        <i class="fas fa-map-marker-alt"></i>
                    </span>
                    <p class="city_text">Nothing</p>
                </div>
                <div class="details_rating">
                    <span class="icon" aria-label="star icon">
                        <i class="fas fa-star"></i>
                    </span>
                    <p class="rating_text">Nothing</p>
                </div>
            </div>
            <p class="restaurant-item_content_desc">There is no Description to show, click title above for getting back onto home page</p>
            <ul class="movie"></ul>
        </div>
    </div>
`;

export {
  allRestaurantsTemplate,
  detailRestaurantTemplate,
  likeButtonTemplate,
  likedButtonTemplate,
  reviewTemplate,
  searchBarTemplate,
  notFoundTemplate,
};

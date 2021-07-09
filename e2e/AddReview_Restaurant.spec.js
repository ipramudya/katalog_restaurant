const assert = require('assert');
Feature('Add Review Restaurant');

Before(({I}) => {
  I.amOnPage('/');
});

Scenario('Add some reviews', async ({I}) => {
  I.seeElement('.restaurant-item');
  I.seeElement('.restaurant-item_content_heading a');
  I.click(locate('.restaurant-item_content_heading a').first());

  // on page "/#/detail/ID"
  I.seeElement('.reviews_label');
  I.click(locate('.reviews_label'));

  const reviewName = 'E2E Tester';
  const reviewText = 'Some reviews from E2E Tester';

  // if you want to check failure test
  // const reviewName = ' ';
  // const reviewText = ' ';

  I.click(locate('#addReviewName'));
  I.fillField('name', reviewName);
  I.click(locate('#addReviewText'));
  I.fillField('review', reviewText);

  const grabbedName = await I.grabValueFrom('#addReviewName');
  const grabbedText = await I.grabValueFrom('#addReviewText');

  I.seeInField('name', grabbedName);
  I.seeInField('review', grabbedText);

  const submitButton = 'form input[type=submit]';
  I.seeElement(submitButton);
  I.click(locate(submitButton));

  const grabPopUpMessage = await I.grabPopupText();

  if (grabPopUpMessage === 'success') {
    I.acceptPopup();
    I.see(reviewName, locate('#reviewResultName').last());
    I.see(reviewText, locate('#reviewResultText').last());

    const grabReviewResultName = await I.grabTextFrom(locate('#reviewResultName').last());
    const grabReviewResultText = await I.grabTextFrom(locate('#reviewResultText').last());

    assert.strictEqual(grabReviewResultName, reviewName);
    assert.strictEqual(grabReviewResultText, reviewText);
  } else {
    I.seeInPopup('fail');
    I.acceptPopup();
  }
});

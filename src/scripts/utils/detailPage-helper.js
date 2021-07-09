import {reviewTemplate} from '../views/templates/template-generator';

const detailPageHelper = (fetchedData, parent) => {
  fetchedData.forEach((item) => {
    if (!item.review) {
      parent.innerHTML += `
        <li>${item.name}</li>
      `;
    } else {
      parent.innerHTML += reviewTemplate(item);
    }
  });
};

export default detailPageHelper;

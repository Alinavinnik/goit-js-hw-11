import { getImagesByQuery } from './js/pixabay-api';
import { createGallery } from './js/render-functions';
const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);
function handleSubmit(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const searchText = formData.get('search-text');
  getImagesByQuery(searchText).then(res => createGallery(res.hits));

  form.reset();
}

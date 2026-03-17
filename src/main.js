import { getImagesByQuery } from './js/pixabay-api';
import { createGallery } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);
function handleSubmit(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const searchText = formData.get('search-text');
  if (searchText.trim() === '') {
    iziToast.show({
      message: 'Please enter a search term',
      position: 'topRight',
    });
    return;
  } else {
    getImagesByQuery(searchText).then(res => {
      if (!res.hits.length) {
        iziToast.show({
          message: `Sorry, there are no images matching your search query.Please try again!`,
          position: 'topRight',
        });
      } else {
        createGallery(res.hits);
      }
    });
  }
  form.reset();
}

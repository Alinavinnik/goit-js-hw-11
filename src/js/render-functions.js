// import SimpleLightbox from 'simplelightbox';
// import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';
const ulElem = document.querySelector('.gallery');
// new SimpleLightbox();
export function createGallery(images) {
  const markup = imgsTemplate(images);
  ulElem.innerHTML = markup;
}
function clearGallery() {}
function showLoader() {}
function hideLoader() {}

function imgTemplate(img) {
  const { webformatURL, tags, likes, views, comments, downloads } = img;
  return `<figure class="photo-card">
              <img src="${webformatURL}" alt="${tags}" />

              <figcaption class="info">
                <p>Likes: ${likes}</p>
                <p>Views: ${views}</p>
                <p>Comments: ${comments}</p>
                <p>Downloads: ${downloads}</p>
              </figcaption>
            </figure>`;
}

function imgsTemplate(imgs) {
  return items.map(imgTemplate).join('');
}

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const ulElem = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

// створення розмітки
export function createGallery(images) {
  function imgTemplate(img) {
    const {
      webformatURL,
      tags,
      likes,
      views,
      comments,
      downloads,
      largeImageURL,
    } = img;
    return `<figure class="photo-card">
              <a>${largeImageURL}</a><img src="${webformatURL}" alt="${tags}"/>

              <figcaption class="info">
              <div class="info-item">
              <p>Likes: <span>${likes}</span> </p></div>
               <div class="info-item"><p>Views: <span>${views}</span></p></div>
                <div class="info-item"><p>Comments: <span>${comments}</span></p></div>
                 <div class="info-item"><p>Downloads: <span>${downloads}</span></p></div>
              </figcaption>
            </figure>`;
  }
  function imgsTemplate(imgs) {
    return imgs.map(imgTemplate).join('');
  }
  const markup = imgsTemplate(images);
  return (ulElem.innerHTML = markup);
}

export function clearGallery() {}
export function showLoader() {
  loader.classList.remove('is-hidden');
}
export function hideLoader() {}

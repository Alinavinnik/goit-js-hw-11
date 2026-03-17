// import SimpleLightbox from 'simplelightbox';
// import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';
const ulElem = document.querySelector('.gallery');
// new SimpleLightbox();
export function createGallery(images) {
  function imgTemplate(img) {
    const { webformatURL, tags, likes, views, comments, downloads } = img;
    return `<figure class="photo-card">
              <img src="${webformatURL}" alt="${tags}"  />

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
function clearGallery() {}
function showLoader() {}
function hideLoader() {}

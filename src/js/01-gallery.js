// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galeryListEl = document.querySelector('.gallery');

const imgPreview = galleryItems.map(item => item.preview);
const imgOriginal = galleryItems.map(item => item.original);
const imgDescription = galleryItems.map(item => item.description);

galleryItems.forEach(function (item, i) {
  const li = document.createElement('li');
  galeryListEl.append(li);
  const a = document.createElement('a');
  a.classList.add('gallery__item');
  a.setAttribute('href', imgOriginal[i]);
  li.append(a);
  const newImg = document.createElement('img');
  a.append(newImg);
  item = newImg;
  newImg.classList.add('gallery__image');
  newImg.setAttribute('src', imgPreview[i]);
  newImg.setAttribute('alt', imgDescription[i]);
});

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionsDelay: 250,
});
gallery.on('show.simplelightbox');

galeryListEl.addEventListener('click', e => {
  e.preventDefault();
});

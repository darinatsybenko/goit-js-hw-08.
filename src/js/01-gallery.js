// Add imports above this line
import { galleryItems } from './gallery-items.js';
console.log(galleryItems); 
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);
console.log(SimpleLightbox);
console.log(SimpleLightbox);


const galleryContainer = document.querySelector('.gallery')

 const murkUp = createGalleryItem (galleryItems);

 galleryContainer.insertAdjacentHTML('beforeend', murkUp)
 const galleryEl = document.querySelector('.gallery');


 function createGalleryItem (galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
        `;
    })
    .join('');
    };
    console.log(createGalleryItem);

    //  const lightbox = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250,});
    //  lightbox.on('show.simplelightbox')

    const gallery = new SimpleLightbox('.some-element a', {captionsData: 'alt', captionDelay: 250,});
    gallery.on('show.simplelightbox')
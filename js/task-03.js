const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector('.gallery');
const markup = images
  .map(
    image =>
      `<li><img class="image" src="${image.url}" alt="${image.alt}" width="100%" /></li>`
  )
  .join('');

gallery.insertAdjacentHTML('afterbegin', markup);

gallery.style.listStyleType = 'none';
gallery.style.backgroundColor = 'rgba(255, 127, 80, 0.33)';
gallery.style.display = 'flex';
gallery.style.alignItems = 'center';
gallery.style.gap = '15px';
gallery.style.border = '5px solid coral';
gallery.style.maxHeight = '400px';
gallery.style.padding = '15px';

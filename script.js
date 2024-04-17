let place = document.querySelector('.place');
let background = document.querySelector('.background');
let open = document.querySelector('.button');
let close = document.querySelector('.close');

open.addEventListener('click', function() {
  background.classList.add('active');
  place.classList.add('active');

})

close.addEventListener('click', function() {
  background.classList.remove('active');
  place.classList.remove('active');

})

background.addEventListener('click', function() {
  background.classList.remove('active');
  place.classList.remove('active');

})

var openmodalbtn = document.querySelector('.open-modal-btn');
var closemodalbtn = document.querySelector('.modal-icon');
var recModal = document.querySelector('.recommendation-modal');
var overlay = document.querySelector('#overlay');




openmodalbtn.addEventListener('click', function() {
        recModal.classList.add('active');
        overlay.classList.add('active');
});

closemodalbtn.addEventListener('click', function() {
        recModal.classList.remove('active');
        overlay.classList.remove('active');
});
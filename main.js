// var $form = document.querySelector('form');

// function submitForm(event) {
//   event.preventDefault();
//   var objForm =
// }

// $form.addEventListener('submit', submitForm);

var modalOn = false;

var $addEntryButton = document.querySelector('.add-entry-button');
var $modal = document.querySelector('.modal-background');

function clickAddEntryButton(event) {
  if (modalOn === false) {
    $modal.setAttribute('class', 'modal-background');
    modalOn = true;
  } else {
    $modal.setAttribute('class', 'modal-background hidden');
    modalOn = false;
  }
}
$addEntryButton.addEventListener('click', clickAddEntryButton);

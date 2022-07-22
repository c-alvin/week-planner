
/* global data */

var $form = document.querySelector('form');

function submitForm(event) {
  event.preventDefault();
  var objForm = {
    day: $form.elements.day.value,
    time: $form.elements.time.value,
    description: $form.elements.description.value,
    entryId: data.nextEntryId
  };

  for (var property in data) {
    if (objForm.day === property) {
      data[property].push(objForm);
    }
  }
}

$form.addEventListener('submit', submitForm);

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

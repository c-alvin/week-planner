
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

  data.nextEntryId += 1;
  for (var property in data) {
    if (objForm.day === property) {
      data[property].push(objForm);
    }
  }

  $form.reset();
  $modal.className = 'modal-background hidden';
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

var $a = document.querySelectorAll('a');
var $dataView = document.querySelectorAll('[data-view]');

function switchView(viewName) {
  for (var i = 0; i < $dataView.length; i++) {
    if (viewName === $dataView[i]) {
      $dataView[i].className = 'view';
      data.view = viewName;
    } else {
      $dataView[i].className = 'hidden';
    }
  }
}

function handleClick(event) {
  switchView(event.target.getAttribute('data-view'));
}

var $days = document.querySelector('#days');
$days.addEventListener('click', handleClick);

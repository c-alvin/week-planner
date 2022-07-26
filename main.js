
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
  renderPlannerEntry(objForm);
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
var $tbody = document.querySelector('tbody');

function handleClick(event) {
  debugger;
  if (event.target.matches('a') === false) {
    return;
  }
  for (var property in data) {
    if (event.target.getAttribute('data-view') === property) {
      var renderedEntry = renderPlannerEntry(data[property]);
      $tbody.appendChild(renderedEntry);
    }
  }
}

var $days = document.querySelector('#days');
$days.addEventListener('click', handleClick);

function renderPlannerEntry(objForm) {
  var trow = document.createElement('tr');

  var tdata = document.createElement('td');
  tdata.textContent = objForm.time;
  trow.appendChild(tdata);

  var tdata2 = document.createElement('td');
  tdata.textContent = objForm.description;
  trow.appendChild(tdata2);

  console.log(trow);
  return trow;
}

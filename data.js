/* exported data */

var data = {
  view: 'monday',
  editing: null,
  nextEntryId: 1,
  sunday: [],
  monday: [],
  tuesday: [],
  wednesday: [],
  thursday: [],
  friday: [],
  saturday: []
};

var previousData = localStorage.getItem('weekly-planner-local-storage');
if (previousData !== null) {
  data = JSON.parse(previousData);
}

function stringifyData(event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('weekly-planner-local-storage', dataJSON);
}

window.addEventListener('beforeunload', stringifyData);

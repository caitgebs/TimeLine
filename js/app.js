// DOM element where the Timeline will be attached
  var container = document.getElementById('visualization');

  // Create a DataSet (allows two way data-binding)
  var items = new vis.DataSet([
    {id: 1, content: 'One Thing', className:'ext', start: new Date(2018,3,30,00,00), end: new Date(2018,4,3,18,00), group: 0, subgroup:1},
    {id: 2, content: 'Final Thing', start: new Date(2018,4,10,00,00), group: 0, subgroup:1},
    {id: 3, content: 'Do it!', className:'ext', start: new Date(2018,4,13,00,00), end: new Date(2018,4,18,18,00), group: 2},
    {id: 4, content: 'The Prestige', start: new Date(2018,5,11,00,00), group: 3}
  ]);

var groups = [
  {
    id: 1,
    content: 'Task 1',
    className: 'group-a'
    // Optional: a field 'className', 'style', 'order', [properties]
  },
   {
    id: 12,
    content: 'Task 2',
    className: 'group-b'
    // Optional: a field 'className', 'style', 'order', [properties]
  },
   {
    id: 3,
    content: 'Task 3',
    className: 'group-c'
    // Optional: a field 'className', 'style', 'order', [properties]
  }
  ];
  // Configuration for the Timeline
  var options = {width: '90%'};

  // Create a Timeline
  var timeline = new vis.Timeline(container, items, groups, options);

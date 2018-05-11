// DOM element where the Timeline will be attached
  var container = document.getElementById('visualization');

  // Create a DataSet (allows two way data-binding)
  var items = new vis.DataSet([
    {id: 1, content: 'May A', className:'ext', start: new Date(2018,3,30,00,00), end: new Date(2018,4,11,18,00), group: 0, subgroup:1},
    {id: 2, content: 'May B', className:'ext', start: new Date(2018,4,14,00,00), end: new Date(2018,4,23,18,00), group: 0, subgroup:1},
    {id: 3, content: 'June A', className:'ext', start: new Date(2018,4,26,00,00), end: new Date(2018,5,8,18,00), group: 0, subgroup:1},
    {id: 4, content: 'June B', className:'ext', start: new Date(2018,5,11,00,00), end: new Date(2018,5,28,18,00), group: 0, subgroup:1},

    {id: 11, content: '<span class="material-icons">done</span>11 Revisions<br/> - Lerner -', className:'day done', start: new Date(2018,3,30,00,00), group: 1},
    {id: 12, content: '<span class="material-icons">done</span>11 Revisions:<br/> - Lerner -', className:'day done', start: new Date(2018,4,7,00,00), group: 1},
    {id: 13, content: '<span class="material-icons">done</span>11 Revisions<br/> - Lerner - ', className:'day done', start: new Date(2018,4,14,00,00), group: 1},

    {id: 14, content: '<span class="material-icons">done</span>CC PDF Final updates', className:'ext done', start: new Date(2018,3,30,00,00), end:new Date(2018,4,5,00,00), group: 4},
    {id: 15, content: '<span class="material-icons">done</span>Load CC PDF to Prod', className:'day done', start: new Date(2018,4,8,00,00), group: 4},
    {id: 16, content: 'HDMv23 Testing', className:'ext current', start: new Date(2018,3,30,00,00), end:new Date(2018,4,11,23,00), group: 4},
    {id: 17, content: 'HBS Template testing', className:'ext', start: new Date(2018,4,14,00,00), end:new Date(2018,4,18,23,00), group: 4},
    {id: 301, content: 'Pipeline/WE <br/>QA features', className:'ext', start: new Date(2018,4,14,00,00), end:new Date(2018,4,18,23,00), group: 4},
    {id: 302, content: 'Product <br/>QA features', className:'ext', start: new Date(2018,4,14,00,00), end:new Date(2018,4,18,23,00), group: 4},
    {id: 303, content: 'Gather Test Products', className:'ext', start: new Date(2018,4,21,00,00), end:new Date(2018,4,25,23,00), group: 4},
    {id: 304, content: 'Create Documentation', className:'ext', start: new Date(2018,4,21,00,00), end:new Date(2018,4,25,23,00), group: 4},

    {id: 21, content: '<span class="material-icons">done</span>Sagacity:<br/> Templating', className:'ext done', start: new Date(2018,4,1,00,00), end:new Date(2018,4,4,00,00), group: 2, subgroup:1},
    {id: 22, content: 'Sagacity: Final', className:'ext', start: new Date(2018,4,15,00,00), end:new Date(2018,4,29,00,00), group: 2, subgroup:1},
    {id: 31, content: '<span class="material-icons">done</span>Hawk', className:'day', start: new Date(2018,3,25,00,00), group: 2, subgroup:0},
    {id: 41, content: 'Barber', className:'ext', start: new Date(2018,5,5,00,00), end:new Date(2018,5,12,00,00), group: 2, subgroup:2},
    {id: 51, content: 'Relax', className:'ext', start: new Date(2018,5,7,00,00), end: new Date(2018,5,14,00,00),  group: 2, subgroup:3},
    {id: 61, content: 'Verona', className:'ext', start: new Date(2018,5,11,00,00), end: new Date(2018,5,18,00,00), group: 2, subgroup:4},
    {id: 72, content: 'Meridian', className:'ext', start: new Date(2018,5,19,00,00), end: new Date(2018,5,26,00,00), group: 2, subgroup:5},
    {id: 82, content: 'Mirea', className:'ext', start: new Date(2018,5,30,00,00), end: new Date(2018,6,6,00,00), group: 2, subgroup:5},
    {id: 92, content: 'Hunley', className:'ext', start: new Date(2018,6,4,00,00), end: new Date(2018,6,11,00,00), group: 2, subgroup:5},
    {id: 50, content: 'Relax Templating', className:'ext', start: new Date(2018,4,10,00,00), end: new Date(2018,4,14,00,00),  group: 2},
    {id: 60, content: 'Verona Templating', className:'ext', start: new Date(2018,4,10,00,00), end: new Date(2018,4,14,00,00), group: 2},

    {id: 101, content: 'Value Proposition', className:'ext', start:new Date(2018,4,17,00,00), end: new Date(2018,4,21,00,00), group: 3, subgroup: 3},
    {id: 111, content: 'IT Management', className:'day', start: new Date(2018,4,21,00,00),end: new Date(2018,4,23,00,00), group: 3, subgroup: 3},

    {id: 121, content: 'CoumbiaV2:<br/>Release (Mid May)', className:'ext', start: new Date(2018,4,14,00,00), end: new Date(2018,4,23,18,00), group: 5, subgroup: 3},
    //{id: 122, content: 'Bolt:<br/>Release (Mid May)', className:'ext', start: new Date(2018,4,14,00,00), end: new Date(2018,4,23,18,00), group: 5, subgroup: 3},
    //{id: 123, content: 'Threadbare V2:<br/>Release (Mid May)', className:'ext', start: new Date(2018,4,14,00,00), end: new Date(2018,4,23,18,00), group: 5, subgroup: 3},

    {id: 131, content: '<span class="material-icons">done</span>8358 Global Teams: </br>Indexing', className:'done ext', start: new Date(2018,4,7,00,00), end: new Date(2018,4,10,18,00), group: 6, subgroup: 3},
    {id: 132, content: '8358 Global Teams: </br>PDF', className:'ext', start: new Date(2018,4,17,00,00), end: new Date(2018,5,30,18,00), group: 6, subgroup: 3},
    {id: 141, content: '5094 Market and Regulatory: </br>Indexing', className:'ext', start: new Date(2018,4,20,00,00), end: new Date(2018,4,24,18,00), group: 6, subgroup: 3},
    {id: 142, content: '5094 Market and Regulatory: </br>PDF', className:'ext', start: new Date(2018,5,1,00,00), end: new Date(2018,5,30,18,00), group: 6, subgroup: 3},

    {id: 200, content: 'DJ:<br/>AccessU', className:'ext', start: new Date(2018,4,14,00,00), end: new Date(2018,4,17,23,00), group: 7},
    {id: 201, content: 'CG:<br/>Balisage', className:'ext', start: new Date(2018,6,31,00,00), end: new Date(2018,7,3,23,00), group: 7},
    {id: 203, content: 'MM:<br/>Out', className:'ext', start: new Date(2018,6,9,00,00), end: new Date(2018,6,13,23,00), group: 7},
    {id: 204, content: 'DJ:<br/>Out', className:'ext', start: new Date(2018,6,2,00,00), end: new Date(2018,6,6,23,00), group: 7},
    {id: 205, content: 'CG:<br/>Out', className:'ext', start: new Date(2018,6,11,00,00), group: 7},
    {id: 206, content: 'CG:<br/>Out', className:'ext', start: new Date(2018,7,16,00,00), end: new Date(2018,7,17,23,00), group: 7},
    


  ]);

var groups = [
{id: 0, content:'Sprint',className:'sprint'},

  {
    id: 1,
    content: '33 Revisions',
    className: 'group-a'
    // Optional: a field 'className', 'style', 'order', [properties]
  },
  { id: 2, content:'Brief Case', className: 'group-b'},
  {id:3, content:'Simulation', className:'group-c'},
  {id:4, content:'Projects', className:'group-d'},
  {id:5, content:'MultiMedia Case', className:'group-e'},
  {id:6, content:'Core Curriculum', className:'group-f'},
  {id:7, content:'Out of Office',className:'group-g'},

  
  ];
  // Configuration for the Timeline
  var options = {width: '80%', align:'center'};

  // Create a Timeline
  var timeline = new vis.Timeline(container, items, groups, options);
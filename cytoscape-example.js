//http://js.cytoscape.org/


var cy = cytoscape({
  container: $('#cy'), // container to render in

  elements: [ // list of graph elements to start with
    { data: { id: 'abanico', color:'blue' } },
    { data: { id: 'barco', color:'blue' } },
    { data: { id: 'c', color:'yellow' } },
    { data: { id: 'd', color:'yellow' } },
    { data: { id: 'e', color:'gray' } },
    { data: { id: 'f', color:'gray' } },
    { data: { id: 'g', color:'green' } },
    { data: { id: 'h', color:'green' } },
    { data: { id: 'indeterminadamente', color:'green' } },
    { data: { id: 'ab', source: 'abanico', target: 'barco', label: 'uno', color:'gray'} },
    { data: { id: 'ac', source: 'abanico', target: 'c', label: 'edge', color:'gray'} },
    { data: { id: 'ad', source: 'abanico', target: 'd', label: 'arista', color:'gray'} },
    { data: { id: 'ae', source: 'abanico', target: 'e', label: 'enlace', color:'gray'} },
    { data: { id: 'af', source: 'abanico', target: 'f', label: 'test', color:'green'} },
    { data: { id: 'fg', source: 'f', target: 'g', label: 'dos', color:'red'} },
    { data: { id: 'fh', source: 'f', target: 'h', label: 'tres', color:'blue'} },
    { data: { id: 'fi', source: 'f', target: 'indeterminadamente', label: 'cuatro', color:'yellow'} }

  ],

  style: [ // the stylesheet for the graph
    {
      selector: 'node',
      style: {
        'background-color': 'data(color)',
        'label': 'data(id)',
        'width': 'label',
        'shape': 'roundrectangle',
        'text-valign': 'center',
        'text-halign': 'center',
        'padding-left': '0.5em',
        'padding-right': '0.5em'
      }
    },

    {
      selector: 'edge',
      style: {
        'width': 3,
        'line-color': 'data(color)',
        'target-arrow-color': 'data(color)',
        'target-arrow-shape': 'triangle',
        'label': 'data(label)'
      }
    },

    {
      selector: '#a',
      style: {
        'background-color': '#blue',
      }
    }
  ],

  layout: {
    name: 'spread'
  }

});

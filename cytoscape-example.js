//http://js.cytoscape.org/


var cy = cytoscape({
  container: $('#cy'), // container to render in

  elements: [ // list of graph elements to start with
    { data: { id: 'a', color:'blue' } },
    { data: { id: 'b', color:'blue' } },
    { data: { id: 'c', color:'yellow' } },
    { data: { id: 'd', color:'yellow' } },
    { data: { id: 'e', color:'gray' } },
    { data: { id: 'f', color:'gray' } },
    { data: { id: 'g', color:'green' } },
    { data: { id: 'h', color:'green' } },
    { data: { id: 'i', color:'green' } },
    { data: { id: 'ab', source: 'a', target: 'b', label: 'uno'} },
    { data: { id: 'ac', source: 'a', target: 'c', label: 'edge'} },
    { data: { id: 'ad', source: 'a', target: 'd', label: 'arista'} },
    { data: { id: 'ae', source: 'a', target: 'e', label: 'enlace'} },
    { data: { id: 'af', source: 'a', target: 'f', label: 'test'} },
    { data: { id: 'fg', source: 'f', target: 'g', label: 'dos'} },
    { data: { id: 'fh', source: 'f', target: 'h', label: 'tres'} },
    { data: { id: 'fi', source: 'f', target: 'i', label: 'cuatro'} }

  ],

  style: [ // the stylesheet for the graph
    {
      selector: 'node',
      style: {
        'background-color': 'data(color)',
        'label': 'data(id)'
      }
    },

    {
      selector: 'edge',
      style: {
        'width': 3,
        'line-color': '#ccc',
        'target-arrow-color': '#ccc',
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
    name: 'grid',
    rows: 1
  }

});

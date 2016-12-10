//Documentation Cytoscape
//http://js.cytoscape.org/



////////////////////////////////////
// Function to show and hide divs //
////////////////////////////////////

activate_rdfdat = function(){
    $('#sparql_item').removeClass('active');
    $('#rdfdat_item').addClass('active');
    $('#rdfdat_div').removeClass('invisible');
    $('#sparql_div').addClass('invisible');
}



activate_sparql = function(){
    $('#rdfdat_item').removeClass('active');
    $('#sparql_item').addClass('active');
    $('#sparql_div').removeClass('invisible');
    $('#rdfdat_div').addClass('invisible');
}



//////////////////////
// global variables //
//////////////////////

var data = {};
var temp = '';



//////////////////////
// helper functions //
//////////////////////

is_not_comment = function(string){
    return string[0] != '#'
}

get_spo = function(string){
    aux = string.split(' ')
    if (aux.length != 4){ alert('bad syntax:', string) }
    return {'s':aux[0], 'p':aux[1], 'o':aux[2]} 
}



///////////////////
// big functions //
///////////////////

turtle2json = function(){
    string = $('#turtle_data').val()
    los = string.split('\n')
    los = los.filter(is_not_comment)
    data = los.map(get_spo)
}



json2cytoscape = function(){
    ele = [ // list of graph elements to start with
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
    ]

    var cy = cytoscape({
        container: $('#cy'), // container to render in
        elements: ele,
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
                    'target-arrow-fill': 'filled',
                    'label': 'data(label)'
                }
            }
        ],
        layout: {
            //name: 'spread'
            name: 'grid'
        }

    });
    cy.ready()
}



// change colors in json data
runquery = function(){
}


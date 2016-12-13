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
var cyto = {};
var temp = '';
var simple_query = '#make a simple sparql query\nSELECT ?s ?p ?o\nWHERE { ?s ?p ?o .}'


//////////////////////
// helper functions //
//////////////////////

is_not_comment = function(string){
    return string[0] != '#'
}

is_not_prefix = function(string){
    return string.substring(0,6).toLowerCase() != 'prefix'
}

get_spo = function(string){
    aux = string.split(' ')
    if (aux.length != 4){ alert('bad syntax:', string) }
    return {'s':aux[0], 'p':aux[1], 'o':aux[2], 'sc':'grey', 'pc':'grey', 'oc':'grey'}
}

get_select = function(string){
    ret = []
    aux = string.split(' ')
    if (aux.indexOf('?s') >=0 ) { ret.push('s')}
    if (aux.indexOf('?p') >=0 ) { ret.push('p')}
    if (aux.indexOf('?o') >=0 ) { ret.push('o')}
    return ret
}

get_where = function(string){
    //no es optimo ni bonito
    aux = string.replace('WHERE', '').replace('where','').replace('{','').replace('}','')
    aux =  aux.replace('  ',' ').replace('  ',' ').replace('  ',' ')
    aux = aux.split(' ')
    if ( !aux[0]) { aux.splice(0, 1); }
    return {'s':aux[0], 'p':aux[1], 'o':aux[2]}
}



//interpret query to retrieve elements of turtle data
applyQuery2Turtle = function(spo){
    //console.log(spo)
    node1 = {'data': {'id': spo['s'], 'color':spo['sc'] }}
    node2 = {'data': {'id': spo['o'], 'color':spo['oc'] }}
    edges = {'data': {'id': spo['s']+"__TO__"+spo['o'],
                      'source': spo['s'],
                      'target': spo['o'],
                      'label': spo['p'],
                      'color': spo['pc']}
            }
    return([node1, node2, edges])
}



///////////////////
// big functions //
///////////////////

//helper function to mental health
generate_graph = function(){
    turtle2json()
}



//load triples from user
turtle2json = function(){
    string = $('#turtle_data').val()
    los = string.split('\n')
    los = los.filter(is_not_comment)
    los = los.filter(is_not_prefix)
    data = los.map(get_spo)
    runquery() // kind of sequential
}



// change colors in json data
runquery = function(){
    temp = data
    string = $('#sparql_data').val();
    if (string != simple_query){
        los = string.split('\n');
        los = los.filter(is_not_comment);
        los = los.filter(is_not_prefix);
        selec = get_select(los[0]);
        where = get_where(los[1]);

        pintar = []

        for (i in data) {
            if ((where['s']=='?s'  || (where['s']!='?s' && where['s']==data[i]['s'] )) &&
                (where['p']=='?p'  || (where['p']!='?p' && where['p']==data[i]['p'] )) &&
                (where['o']=='?o'  || (where['o']!='?o' && where['o']==data[i]['o'] ))){
                    if (selec.indexOf('s') >=0 ) { pintar.push(data[i]['s'])}
                    if (selec.indexOf('p') >=0 ) { pintar.push(data[i]['p'])}
                    if (selec.indexOf('o') >=0 ) { pintar.push(data[i]['o'])}
            }
        }
        for (i in data) {
            if (pintar.indexOf(data[i]['s']) >=0 ) { data[i]['sc']='yellow'}
            if (pintar.indexOf(data[i]['p']) >=0 ) { data[i]['pc']='yellow'}
            if (pintar.indexOf(data[i]['o']) >=0 ) { data[i]['oc']='yellow'}
        }
    }
    json2cytoscape()
}



//transform json data to be 'elements' of cytoscape
//read global variable data and return transformation for cytoscape
json2cytoscape = function(){
    ele = []
    for (i in data) {
        l = applyQuery2Turtle(data[i])
        ele.push(l[0])
        ele.push(l[1])
        ele.push(l[2])
    }
    
    plot_cytoscape(ele)
}



//plot cytoscape graph
plot_cytoscape = function(elements){
    var cy = cytoscape({
        container: $('#cy'), // container to render in
        elements: elements,
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



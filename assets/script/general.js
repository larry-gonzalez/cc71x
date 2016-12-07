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
}



// change colors in json data
runquery = function(){
}


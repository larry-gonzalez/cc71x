var temp = ''
var temp2 = ''
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


load_triples = function(){
    temp = $('#turtle_data').val()
}

run_query = function(){}

is_not_comment = function(string){
    return string[0] != '#'
}

spo = function(string){
    aux = string.split(' ')
    if (aux.length != 4){
        alert('bad syntax:', string)
    }
}


simple_interp = function(string){
    los = string.split('\n')
    los = los.filter(is_not_comment)
    temp2 = los
}

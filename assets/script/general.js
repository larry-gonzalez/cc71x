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


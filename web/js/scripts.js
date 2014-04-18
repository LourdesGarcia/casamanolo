function init(){
    $('.infoContainer').hide();
    $('#homeContainer').show();
}

$(document).ready(function(){

    init();

    $('.menuButton').on('click',function(){
        var idB = $(this).attr('id');
        $('.infoContainer').hide();
        $('#' + idB + 'Container').show();
    });

});
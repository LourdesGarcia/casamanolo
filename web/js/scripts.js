function init(){
    $('.infoContainer').hide();
    $('#homeContainer').fadeIn(1500);
    $("#photosContainer li a").fancybox();

    $(document).foundation({
        offcanvas : {
            // Sets method in which offcanvas opens.
            // [ move | overlap_single | overlap ]
            open_method: 'move',
            // Should the menu close when a menu link is clicked?
            // [ true | false ]
            close_on_click : true
        }
    });
}

$(document).ready(function(){

    init();

    $('.menuButton a').on('click',function(){
        var idB = $(this).attr('id');
        $('.infoContainer').hide();
        $('#' + idB + 'Container').fadeIn(1500);
        $('.menuButton a').removeClass('activeButton');
        $(this).addClass('activeButton');
        if(idB == 'direccion'){
            $('#' + idB + 'Container .Centrado').html('<iframe src="http://maps.google.es/maps?f=l&amp;source=s_q&amp;hl=es&amp;geocode=&amp;q=casa+manolo&amp;sll=42.882022,-8.543689&amp;sspn=0.002296,0.005654&amp;ie=UTF8&amp;near=&amp;split=1&amp;ei=gwvdSdmJLozS2wKinbmYCQ&amp;attrid=&amp;sig2=lVRWE6LiJrMoYEPuspxpMA&amp;cd=1&amp;cid=42881130,-8542497,13005694202227844341&amp;li=lmd&amp;t=h&amp;ll=42.88113,-8.542497&amp;spn=0.006295,0.006295&amp;output=embed" width="100%" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" ></iframe>');
        }

    });

});
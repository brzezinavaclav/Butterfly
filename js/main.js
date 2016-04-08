<!-- Smooth scrolling script -->
$(function () {

    $('a[href^="#"]').click(function(event) {
        var id = $(this).attr("href");
        var offset = 120;
        var target = $(id).offset().top - offset;

        $('html, body').animate({scrollTop:target}, 800);
        event.preventDefault();
    });

});
$('body').scrollspy({ target: '#navigation', offset: 125 });
$(function(){
    $('.navbar-nav > li > a').click(function(){
        $('.navbar-toggle').toggleClass('collapsed').attr('aria-expanded', 'false');
        $('.navbar-collapse').toggleClass('in');
    });
});



$(function() {
    $(".rslides").responsiveSlides({
        nav:true,
        speed: 700,
        timeout: 5000,
        prevText: '<i class="fa fa-chevron-left"></i>',
        nextText: '<i class="fa fa-chevron-right"></i>'
    });
});

window.onload = function () {
    var viewportWidth =  $(window).width();
    var latit = 50.72232;
    var longtit = 15.1749;
    if (viewportWidth > 776) {
        var styles = [
            {
                featureType: 'all',
                stylers: [
                    { "hue": "#8D7551" },
                ]
            },{
                "featureType": "road",
                "stylers": [
                    { "saturation": -60 }
                ]
            }
        ];
        var options = {
            mapTypeControlOptions: {
                mapTypeIds: ['Styled']
            },
            center:new google.maps.LatLng(latit,longtit),
            zoom: 16,
            disableDefaultUI: true,
            mapTypeId: 'Styled',
            scrollwheel: false,
            draggable: true
        };
        var div = document.getElementById('gmap_canvas');
        var map = new google.maps.Map(div, options);
        var styledMapType = new google.maps.StyledMapType(styles, { name: 'Styled' });
        map.mapTypes.set('Styled', styledMapType);
        marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(50.72343,15.17092), icon: './images/marker.svg', });
        infowindow = new google.maps.InfoWindow({content:'<strong>Kadeřnictví butterfly</strong>'});
        google.maps.event.addListener(marker, 'click', function(){infowindow.open(map,marker);});infowindow.open(map,marker);
    }
}
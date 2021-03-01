
//////map
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 35.736, lng: 14.437 }, //35.736168307093756, 14.43735974420858
    zoom: 3,
    styles:[
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "landscape.natural.landcover",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#bababa"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#000000"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  }
]
  });

  const marker1 = new google.maps.Marker({
    position: { lat: 50.511, lng: 30.601 }, //50.51186328174741, 30.601320418455757
    map: map,
    icon: '../img/map-point.svg',
    draggable: false,
    //animation: google.maps.Animation.BOUNCE

  });
  const marker2 = new google.maps.Marker({
    position: { lat: 39.739, lng: -101.267 }, //39.739272084161364, -101.26714689539278
    map: map,
    icon: '../img/map-point.svg',
    draggable: false,
    //animation: google.maps.Animation.BOUNCE

  });
  const marker3 = new google.maps.Marker({
    position: { lat: 48.946, lng: 31.297 },//48.946460223550105, 31.29722692991811
    map: map,
    icon: '../img/map-point.svg',
    draggable: false,
    //animation: google.maps.Animation.BOUNCE

  });
  const marker4 = new google.maps.Marker({
    position: { lat: 54.728, lng: -2.186 },
    map: map,
    icon: '../img/map-point.svg',
    draggable: false,
    //animation: google.maps.Animation.BOUNCE

  });
  const marker5 = new google.maps.Marker({
    position: { lat: 42.501, lng: 25.101 }, //42.5013148256776, 25.10145638369199
    map: map,
    icon: '../img/map-point.svg',
    draggable: false,
    //animation: google.maps.Animation.BOUNCE

  });
  ////partners infos
        const contentString1 =
        '<div class="map__partner__info">' +
        '<h1 class="map__partner__info__name">LLC Mango Dental Clinic</h1>' +
        '<div class="map__partner__info__content">' +
        "<p>A well-established partner of the GCL ordering medical chemicals from the GCL. </p>" +
        '<a href="#">' +
        "website.com</a> " +
        "</div>";

        const contentString2 =
        '<div class="map__partner__info">' +
        '<h1 class="map__partner__info__name">LLC Sun-Oil </h1>' +
        '<div class="map__partner__info__content">' +
        "<p>A long-term partner of the GCL in terms of extraction and separation of chemical products from biomass on a large scale. </p>" +
        '<a href="#">' +
        "website.com</a> " +
        "</div>";

        const contentString3 =
        '<div class="map__partner__info">' +
        '<h1 class="map__partner__info__name">Polyprom Group LTD</h1>' +
        '<div class="map__partner__info__content">' +
        "<p>Polyprom Group is a large ukrainian manufacturer of solvents, polymers and solid fuels. This is an important partner for the GCL in terms of experience exchange and chemical supply.</p>" +
        '<a href="#">' +
        "website.com</a> " +
        "</div>";

        const contentString4 =
        '<div class="map__partner__info">' +
        '<h1 class="map__partner__info__name">Master-IR LTD</h1>' +
        '<div class="map__partner__info__content">' +
        "<p>Master-IR LTD is a British partner of the GCL. We supply them with the requested multifunctional chemicals and provide chemical consultancy.</p>" +
        '<a href="#">' +
        "website.com</a> " +
        "</div>";

        const contentString5 =
        '<div class="map__partner__info">' +
        '<h1 class="map__partner__info__name">Varna</h1>' +
        '<div class="map__partner__info__content">' +
        "<p>Varna is a large medical centre in Bulgaria. The GCL is proud to supply high-quality pharmaceutical intermediates to the Varna.</p>" +
        '<a href="#">' +
        "website.com</a> " +
        "</div>";


  const infowindow1 = new google.maps.InfoWindow({
    content: contentString1,
  });
  const infowindow2 = new google.maps.InfoWindow({
    content: contentString2,
  });
  const infowindow3 = new google.maps.InfoWindow({
    content: contentString3,
  });
  const infowindow4 = new google.maps.InfoWindow({
    content: contentString4,
  });
  const infowindow5 = new google.maps.InfoWindow({
    content: contentString5,
  });
  marker1.addListener("click", () => {
    infowindow1.open(map, marker1);
    infowindow2.close();
    infowindow3.close();
    infowindow4.close();
    infowindow5.close();
  });
  marker2.addListener("click", () => {
    infowindow2.open(map, marker2);
    infowindow5.close();
    infowindow1.close();
    infowindow3.close();
    infowindow4.close();
  });
  marker3.addListener("click", () => {
    infowindow3.open(map, marker3);
    infowindow5.close();
    infowindow4.close();
    infowindow1.close();
    infowindow2.close();
  });
  marker4.addListener("click", () => {
    infowindow5.close();
    infowindow4.open(map, marker4);
    infowindow3.close();
    infowindow2.close();
    infowindow1.close();
  });
  marker5.addListener("click", () => {
    infowindow5.open(map, marker5);
    infowindow4.close();
    infowindow3.close();
    infowindow2.close();
    infowindow1.close();
  });

  /*  const trafficLayer = new google.maps.TrafficLayer();
    const transitLayer = new google.maps.TransitLayer();
    const bikeLayer = new google.maps.BicyclingLayer();

    $('#traffic').click(function(){
        trafficLayer.setMap(map);
        transitLayer.setMap(null);
        bikeLayer.setMap(null);
    });
    $('#transit').click(function(){
        trafficLayer.setMap(null);
        transitLayer.setMap(map);
        bikeLayer.setMap(null);
    });
    $('#bike').click(function(){
        trafficLayer.setMap(null);
        transitLayer.setMap(null);
        bikeLayer.setMap(map);
    });
    $('#default').click(function(){
        trafficLayer.setMap(null);
        transitLayer.setMap(null);
        bikeLayer.setMap(null);
    });
    $('.to_partners__btn').click(function(){
        $('.partners__content, #map').toggleClass('active');
    });
    */
}

////team catds
$('.team__title__dot').click(function(){
  var remCl = function(){
      if ($('.team__item__content').hasClass('active')){
           $('.team__item__content, .team__item__head').removeClass('active');
      }
    }
    remCl();
    $('.team__item__content_0').addClass('active');
});
$('.team__item__head[data-card]').on('mouseover', function (){
  //console.log('mouseover');
   var cardno = $(this).data('card');
   var remCl = function(){
       if ($('.team__item__content').hasClass('active')){
            $('.team__item__content, .team__item__head').removeClass('active');
       }
     }
//console.log(cardno);
    remCl();

        if (cardno == 1){
          $('.team__item__content_1').addClass('active');
          $('.team__item__head_1').addClass('active');
        }else if (cardno == 2) {
          $('.team__item__content_2').addClass('active');
          $('.team__item__head_2').addClass('active');
        }else if (cardno == 3) {
          $('.team__item__content_3').addClass('active');
          $('.team__item__head_3').addClass('active');
        }else if (cardno == 4) {
          $('.team__item__content_4').addClass('active');
          $('.team__item__head_4').addClass('active');
        }else if (cardno == 5) {
          $('.team__item__content_5').addClass('active');
          $('.team__item__head_5').addClass('active');
        }
});



////parallax on mousemove

var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    x_2 = 0,
    y_2 = 0,
    z = 0,
    friction = 1 / 30;

function moveBackground() {
  x += (lFollowX - x) * friction;
  y += (lFollowY - y) * friction;
//  blurex = x + y;
  translate = 'translate(' + x + 'px, ' + y + 'px) rotate(' + x + 'deg)';
//  rotate3d = 'rotate3d(' + x + ',' + y + ',' + x + ')';
//  blur = 'blur('+ blurex + 'px)';
  $('.services__bg, .intro__bg, .contacts__bg').css({
    'width' : '110%',
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate,
    //'filter': blur
  });
//  $('.more__product__info__formula').css({
    //'position': 'absolute',
  //  '-webit-transform': rotate3d,
  //  '-moz-transform': rotate3d,
  //  'transform': rotate3d
//  })

  window.requestAnimationFrame(moveBackground);
}

$(window).on('mousemove click', function(e) {

  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
  var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
  lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
  lFollowY = (10 * lMouseY) / 100;

});

moveBackground();


//////// sticky titles
var stickyHeaders = (function() {
  var $window = $(window),
      $stickies;
  var load = function(stickies) {
    if (typeof stickies === "object" && stickies instanceof jQuery && stickies.length > 0) {
      $stickies = stickies.each(function() {
        var $thisSticky = $(this).wrap('<div class="followWrap" />');
        $thisSticky
            .data('originalPosition', $thisSticky.offset().top - 100)
            .data('originalHeight', $thisSticky.outerHeight())
              .parent()
              .height($thisSticky.outerHeight());
      });

      $window.off("scroll.stickies").on("scroll.stickies", function() {
		  _whenScrolling();
      });
    }
  };

  var _whenScrolling = function() {
    $stickies.each(function(i) {
      var $thisSticky = $(this),
          $stickyPosition = $thisSticky.data('originalPosition') + 100;
      if ($stickyPosition <= $window.scrollTop()) {
        var $nextSticky = $stickies.eq(i + 1),
            $nextStickyPosition = $nextSticky.data('originalPosition') - $thisSticky.data('originalHeight');
        $thisSticky.addClass("fixed");
        if ($nextSticky.length > 0 && $thisSticky.offset().top >= $nextStickyPosition) {
          $thisSticky.addClass("absolute").css("top", $nextStickyPosition);
        }
      } else {
        var $prevSticky = $stickies.eq(i - 1);
        $thisSticky.removeClass("fixed");
        if ($prevSticky.length > 0 && $window.scrollTop() <= $thisSticky.data('originalPosition') - $thisSticky.data('originalHeight')) {
          $prevSticky.removeClass("absolute").removeAttr("style");
        }
      }
    });
  };

  return {
    load: load
  };
})();

$(function() {
  stickyHeaders.load($(".title"));
});
///////////////////////////
$(function(){

  $('.header__burger').click(function(event){
    if($('.fancybox-container').hasClass('fancybox-is-open')){
      $('.header__burger, .burger__menu').toggleClass('active');
      $('.fancybox-container').toggleClass('blurred');
      $('.fancy__btn').toggleClass('blurred');
    }else{
      $('.header__burger, .burger__menu').toggleClass('active');
      $('body').toggleClass('lock');
      $('.title').toggleClass('blurred');
    }
  });

  $('.header__link, .burger__link, .burger__sublink').click(function(){
    if($('.header__burger').hasClass('active') || $('.fancybox-container').hasClass('fancybox-is-open')){
      $('.header__burger, .burger__menu').removeClass('active');
      $('body').removeClass('lock');
      $('.title').toggleClass('blurred');
      $('.fancy__btn').removeClass('active');
      $('.fancy__btn').removeClass('blurred');
      $.fancybox.close();
  //  }else if($('.header__burger').hasClass('active') || $('.fancybox-container').hasClass('fancybox-is-open')){
  //    $('body').removeClass('lock');
  //    $('.title').removeClass('blurred');
  //    $('.fancy__btn').removeClass('active');
  //    $('.fancy__btn').removeClass('blurred');
  //    $.fancybox.close();
    }else if ($('.fancybox-container').hasClass('fancybox-is-open')) {
      $('.fancybox-container').toggleClass('blurred');
      $('.fancy__btn').removeClass('active');
      $('.fancy__btn').removeClass('blurred');
      $.fancybox.close();
    }else if($('.fancybox-container').hasClass('fancybox-is-open') && $('.header__burger').hasClass('active')){
      $('.header__burger, .burger__menu').toggleClass('active');
      $('body').removeClass('lock');
      $('.title').removeClass('blurred');
      $('.fancybox-container').toggleClass('blurred');
      $('.fancy__btn').removeClass('active');
      $('.fancy__btn').removeClass('blurred');
      $.fancybox.close();
    }
  });

////// fancy buttons
$('.more__product__info__btn').on('click', function(){
    $('body').toggleClass('lock');
    $('.title').toggleClass('blurred');
    $('.fancy__btn').toggleClass('active');
  });
$('.fancy__btn').on('click', function(){
    $('body').toggleClass('lock');
    $('.title').toggleClass('blurred');
    $.fancybox.close();
    $(".fancy__btn").removeClass('active');
  });


  //// go to slide in enterance slider by buttons
  $('.about__btn[data-slide], .header__logo[data-slide], .news__btn[data-slide], .who-we-are__btn[data-slide]').click(function(e) {
   e.preventDefault();
   var slideno = $(this).data('slide');
   $('.enterance__slider').slick('slickGoTo', slideno - 1);
 });
 //// go to slide in why-us slider by buttons
   $('.certification__btn[data-slide], .team__btn[data-slide], .reviews__btn[data-slide]').click(function(e) {
    e.preventDefault();
    var slideno = $(this).data('slide');
    $('.why-us__slider').slick('slickGoTo', slideno - 1);
  });
  //// go to slide in products slider by buttons
    $('.levoglucosenone__btn[data-slide], .levoglusan__btn[data-slide], .melanine__btn[data-slide]').click(function(e) {
     e.preventDefault();
     var slideno = $(this).data('slide');
     $('.products__slider').slick('slickGoTo', slideno - 1);
   });


// night mode trigger
  $('.mode__btn').click(function(event){
    $('.mode__btn, .header__burger, .burger__link, .header__link, .bodyyy, .logo-night, .products, .plug-white, .plug-black, .arroww, .slick-dots, .header, .mouse-icon, .about, .more__product__info__btn , #modal-1, #modal-2,#modal-3, .product__plug, .services, .why-us, .team, .contacts').toggleClass('night');
  });

  $('.product__plug, .products__dot').click(function(){
    $('.product__plug').addClass('off');
    setTimeout(function(){
      $(".product__plug").addClass('anim-end');
    }, 500);
  });

  $('.products__btn').click(function(){
    $('.product__plug').removeClass('off');
    $('.product__plug').removeClass('anim-end');

  });
//

////counter
var $slider = $('.products__slider');

if ($slider.length) {
  var currentSlide;
  var slidesCount;
  var sliderCounter = document.createElement('div');
  sliderCounter.classList.add('slider__counter');

  var updateSliderCounter = function(slick, currentIndex) {
    currentSlide = slick.slickCurrentSlide() + 1;
    slidesCount = slick.slideCount;
    $(sliderCounter).text(currentSlide + ' - ' + slidesCount)
  };

  $slider.on('init', function(event, slick) {
    $slider.append(sliderCounter);
    updateSliderCounter(slick);
  });

  $slider.on('afterChange', function(event, slick, currentSlide) {
    updateSliderCounter(slick, currentSlide);
  });
}

  $('.titles__slider').slick({
    infinite: true,
    fade: true,
    dots: false,
    slidesToShow: 1,
    asNavFor: '.enterance__slider',
    arrows: false,
    lazyLoad: 'progressive'
  });


  $('.enterance__slider').slick({
    lazyLoad: 'progressive',
    asNavFor: '.titles__slider',
    infinite: true,
    //  dots: true,
    fade: true,
    waitForAnimate: false,
    autoplaySpeed: 3000,
    arrows:false,
    autoplay: false,
    adaptiveHeight: true
    //prevArrow: '<div class="corner-1"><div class="arroww-wrapper"><div class="arroww"></div><div class="arroww"></div><div class="arroww"></div></div> </div>',
    //nextArrow: '<div class="corner-2"><div class="arroww-wrapper"><div class="arroww"></div><div class="arroww"></div><div class="arroww"></div></div> </div>'
  });

  /*$(document).ready(function(){
    setTimeout(function(){
      $('.enterance__slider').slick({
        autoplay: true,
      })
    }, 2000);
  })
*/

  $('.products__dots').slick({
    lazyLoad: 'progressive',
    slidesToScroll: 1,
    slidesToShow: 4,
    infinite: true,
    fade: false,
    arrows:false,
    asNavFor:'.products__slider',
    focusOnSelect: true

  });
  $('.products__slider').slick({
    lazyLoad: 'progressive',
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    fade: true,
    arrows:true,
    asNavFor:'.products__dots',
    prevArrow: '<div class="corner-1"><div class="arroww-wrapper"><div class="arroww"></div><div class="arroww"></div><div class="arroww"></div></div> </div>',
    nextArrow: '<div class="corner-2"><div class="arroww-wrapper"><div class="arroww"></div><div class="arroww"></div><div class="arroww"></div></div> </div>',
    responsive: [
      {
        breakpoint: 666,
        settings:{
          arrows: false
        }
      }
    ]


  });



  $('.why-us__dots').slick({
    lazyLoad: 'progressive',
    slidesToScroll: 1,
    slidesToShow: 2,
    infinite: true,
    fade: false,
    arrows:false,
    asNavFor:'.why-us__slider',
    focusOnSelect: true
  });
  $('.why-us__slider').slick({
    lazyLoad: 'progressive',
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    fade: true,
    arrows:false,
    asNavFor:'.why-us__dots'
  });

  //Click Logo To Scroll To Top
  $('#logo').click(function(event) {
    if($('body').hasClass('lock')){
        $('body').toggleClass('lock');
        $('.title').toggleClass('blurred');
        $('.header__burger, .burger__menu').toggleClass('active');
        $('html,body').animate({
          scrollTop: 0
        },500);
    }else{
        $('html,body').animate({
    			scrollTop: 0
    		},500);
      }
	});

	//Smooth Scrolling Using Navigation Menu
	$('a[href*="#"]').on('click', function(e){
		$('html,body').animate({
			scrollTop: $($(this).attr('href')).offset().top
		},500);
		e.preventDefault();
	});

  /////////// loading

  // $(window).on("load", function() {
	//	  $('.load-wrapp').addClass('preload-finish');
  //    });

    $(function(){
  //  $(window).on("load", function(){
      $('body').toggleClass('lock');

      setTimeout(function(){
        $(".loading__animation").addClass('off');
      }, 8000);

      setTimeout(function(){
        $('body').toggleClass('lock');
      }, 6500);
    });





/// SERVICES__ACCORDEON
  $.fn.accordion = function(){

    var activeClass = 'active';
    var $titles = $(this).children().filter(':even');
    var $contents = $(this).children().filter(':odd');

    var hideAllContent = function(el) {
      $contents.hide();
    }
    var showContent = function(el) {
      return el.next().show();
    }

    hideAllContent();
    showContent($(this).find('.' + activeClass));

    $titles.click(function(){
      hideAllContent();
      $titles.removeClass(activeClass);
      $(this).toggleClass(activeClass);
      showContent($(this));
    });
  };

  // init
  $('.accordion').accordion();



});

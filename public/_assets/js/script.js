let gallery_carousel = $('.slider-gallery-carousel').owlCarousel({
    loop:true,
    margin:15,
    nav: true,
    navText: ["<img src='images/leftArrow.png'>","<img src='images/rightArrow.png'>"],
    dots:false,
    smartSpeed: 1000,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        }
    }
}), carousel_wid, collection_carousel = $('.slider-collection-carousel').owlCarousel({
    loop:true,
    margin:15,
    nav: true,
    navText: ["<img src='images/leftArrow.png'>","<img src='images/rightArrow.png'>"],
    dots:false,
    smartSpeed: 1000,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        }
    }
}), collection_wid;

$(document).ready(function(){

    if ($(window).width() > 1200){
        carousel_wid = $('.slider-gallery-carousel .owl-item').width();
        adjacentSlider('gallery');
        gallery_carousel.on('changed.owl.carousel', function(e) {
            setTimeout(function(){
                adjacentSlider('gallery');
            }, 300);
        })
    
        $('.slider-gallery-carousel .owl-item').hover(function() {
            let wid = parseInt(carousel_wid)/2.5;
            wid += 20;
            $('.slider-gallery-carousel .owl-item.active').first().css('width', ''+wid+'px');
            $(this).css('width', ''+carousel_wid+'px');
            $(this).css('opacity', '1');
        });
        $('.slider-gallery-carousel .owl-item').mouseout(function() {
            adjacentSlider('gallery');
        });
    
    
        collection_wid = $('.slider-collection-carousel .owl-item').width();
        adjacentSlider('collection');
        collection_carousel.on('changed.owl.carousel', function(e) {
            setTimeout(function(){
                adjacentSlider('collection');
            }, 300);
        })
    
        $('.slider-collection-carousel .owl-item').hover(function() {
            let wid = parseInt(collection_wid)/2.5;
            wid += 20;
            $('.slider-collection-carousel .owl-item.active').last().css('width', ''+wid+'px');
            $(this).css('width', ''+collection_wid+'px');
            $(this).css('opacity', '1');
        });
        $('.slider-collection-carousel .owl-item').mouseout(function() {
            adjacentSlider('collection');
        });
    }

   
});

const adjacentSlider = (keyword) => {
    let wid;
    if(keyword == 'gallery'){
        wid = parseInt(carousel_wid);
    }else if(keyword == 'collection') {
        wid = parseInt(collection_wid);
    }
   
    let items = document.querySelectorAll(`.slider-${keyword}-carousel .owl-item.active`);

    $(`.slider-${keyword}-carousel .owl-item`)?.css({
        'width':  ''+wid+'px',
        'opacity': ''
    })

    wid = wid/2.5;
    wid += 20;

    if(keyword == 'gallery'){
        try{
            items[2].nextElementSibling.style.opacity = '0';
            items[2].nextElementSibling.style.width = ''+wid+'px';
        }catch(errors){}
    
        items[1].style.width = ''+wid+'px';
        items[1].style.opacity = '0.6';
        items[2].style.width = ''+wid+'px';
        items[2].style.opacity = '0.2';
        
    }else if(keyword == 'collection') {
        try{
            items[0].prevElementSibling.style.opacity = '0';
            items[0].prevElementSibling.style.width = ''+wid+'px';
        }catch(errors){}
    
        items[1].style.width = ''+wid+'px';
        items[1].style.opacity = '0.6';
        items[0].style.width = ''+wid+'px';
        items[0].style.opacity = '0.2';
    }
    
}
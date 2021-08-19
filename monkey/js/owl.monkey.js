$(document).ready(function(){

    $("#top-carousel").owlCarousel({
        items:1,
        lazyLoad: true,
        margin: 0, // 與右邊圖片的距離
        nav: true, //導航文字
        loop: true, //循環輪播
        autoplay:true, //自動輪播
        mouseDrag: true, // 滑鼠拖曳
        touchDrag: false, // 觸控拖曳
        nav: false,
        animateOut: 'fadeOutLeft',
        animateIn: 'slideInRight',
        responsive : {
            // breakpoint from 300 up
            0 : {
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
                touchDrag: true,
            },
            // breakpoint from 760 up
            760 : {
                animateOut: 'fadeOutLeft',
                animateIn: 'slideInRight',
                touchDrag: false
            }
        }

    });

    $("#live-carousel").owlCarousel({
        items:3,
        lazyLoad: true,
        margin: 20, // 與右邊圖片的距離
        nav: true, //導航文字
        loop: true, //循環輪播
        autoplay:true, //自動輪播
        mouseDrag: true, // 滑鼠拖曳
        touchDrag: false, // 觸控拖曳
        nav: false,
        responsive : {
            // breakpoint from 300 up
            0 : {
                items:1,
                touchDrag: true,
            },
            // breakpoint from 760 up
            760 : {
                items:3,
                touchDrag: false
            }
        }

    });

    
    $("#card_event-carousel").owlCarousel({
        items:3,
        lazyLoad: true,
        margin: 20, // 與右邊圖片的距離
        nav: true, //導航文字
        loop: true, //循環輪播
        autoplay:true, //自動輪播
        mouseDrag: true, // 滑鼠拖曳
        touchDrag: false, // 觸控拖曳
        nav: false,
        responsive : {
            // breakpoint from 300 up
            0 : {
                items:1,
                touchDrag: true,
            },
            // breakpoint from 760 up
            760 : {
                items:3,
                touchDrag: false
            }
        }

    });




});

/**********WOW*********/
new WOW().init();
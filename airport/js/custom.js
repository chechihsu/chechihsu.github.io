/*------------------------------*/
/*landscape*/
 /*------------------------------*/
                var wWidth = $(window).width();
                    var wHeight = $(window).height();
                    if(isMobile.any && wWidth > wHeight){
                        $('.landscape_view').addClass('active');
                    }

                    $(window).on("orientationchange", function(){
                        if(isMobile.any){
                            if(window.orientation == 0){ // Portrait
                        $('.landscape_view').removeClass('active');
                            }
                            else { // Landscape
                                $('.landscape_view').addClass('active');
                            }
                        }
                    });

                    if(isMobile.any){
                        $('html').eq(0).addClass('isMobile');
                    }else{
                        $('html').eq(0).addClass('isPC');
                    }


/*------------------------------*/
/* Page Loader
 /*------------------------------*/

$(window).load(function() {
    $(".loader-item").delay(500).fadeOut();
    $("#pageloader").delay(500).fadeOut("slow");

});


/*------------------------------*/
/* resize
 /*------------------------------*/

$(window).resize(function() {
    $('.infopopup.allheight').height($(window).height());
    $('.rightbg').height($(window).height());
    $('.leftbg').height($(window).height());
});

$(window).trigger('resize');
/*------------------------------*/
/* collapse
 /*------------------------------*/

function toggleDiv(divId) {
    $("#"+divId).toggle();
}

/*------------------------------*/
/* fullpage animate
 /*------------------------------*/
$('#acqlanding').fullpage({
    anchors: ['vip_lounge', 'tokyo' ,'osaka', 'hokkaido', 'okayama', 'event_info'],
    // sectionsColor: ['#C63D0F', '#1BBC9B', '#7E8F7C', '#1BBC9B', '#C63D0F', '#1BBC9B'],
    navigationPosition: 'right',
    navigationTooltips: ['貴賓休息室','東京', '大阪','北海道', '名古屋 九州 東北 岡山', '活動詳情說明'],
    menu: '.navigation',
    showActiveTooltip:false,
    navigation: true,
    //responsive: 768 ,
    normalScrollElements: '#mybenefit1,#mybenefit2,#mybenefit3,#mybenefit4',
    css3:false
});


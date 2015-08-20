$(document).ready(function(){
    // var height_menu = $(window).height();
    // $('#wd-menu-bar').css('height', height_menu);
    
    $('.icon-list-menu').click(function(){
        $('.wd-form li:last-child span').fadeOut('icon-list-menu');
    })

    $('.fa-fa').click(function(){
        $('.wd-form li:last-child span').fadeIn('icon-list-menu');
    })
    
    $('.icon-search').click(function(){
        if($('.search-box').css('display') == 'none'){
            $('.search-box').fadeIn('search-show');
        }else{
            $('.search-box').fadeOut('search-show');
        }
    })
})
$(document).mouseup(function (e){
    var container = $("#wd-menu-bar");

    if (!container.is(e.target) && container.has(e.target).length === 0){
        container.show();
        $('.wd-form li:last-child span').fadeIn('icon-list-menu');
    }
});
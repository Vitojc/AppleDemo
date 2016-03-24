/**
 * Created by Administrator on 2015/11/12.
 */
$(document).ready(function() {
    $("#menu2 li a").wrapInner( '<span class="out"></span>' );
    $("#menu2 li a").each(function() {
        $( '<span class="over">' +  $(this).text() + '</span>' ).appendTo( this );
    });
    $("#menu2 li a").hover(function() {
        $(".out",this).stop().animate({'top':	'48px'},	300);
        $(".over",this).stop().animate({'top':	'0px'}, 300);
    }, function() {
        $(".out",this).stop().animate({'top':	'0px'}, 300);
        $(".over",this).stop().animate({'top':	'-48px'}, 300);
    });
});


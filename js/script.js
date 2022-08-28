 $(document).rady(function() {

    var img1 = $('#img1').attr('src');
    var img2 = $('#img2').attr('src');
    var img3 = $('#img3').attr('src');
    var img4 = $('#img4').attr('src');
    $('#img1').click(function(){
        $('preview').fadeOut(0);
        $('preview').stop().fadeIn(400).attr('src',img1);
    });
    $('#img2').click(function(){
        $('preview').fadeOut(0);
        $('preview').stop().fadeIn(400).attr('src',img2);
    });
    $('#img3').click(function(){
        $('preview').fadeOut(0);
        $('preview').stop().fadeIn(400).attr('src',img3);
    });
    $('#img4').click(function(){
        $('preview').fadeOut(0);
        $('preview').stop().fadeIn(400).attr('src',img4);
    });
});
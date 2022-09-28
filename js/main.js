$(document).ready(function () {
    console.log('main -> start');
    const ctrl = new Controller();

    //1
    $('.nav_img').click((event)=>{
        let url = $(event.target).attr('src');
        console.log(url);
        ctrl.dispatch(url);
    });

    //2
    $('#logo').click(function () { 
        $('.mini').hide(500);
    });

    //3
    $(document).on('click','.mini',function(){
        let url = $(this).attr('src');
        ctrl.displayImage(url);
    });

    //4

    $('.nav_img').hover(
        function(){
            console.log(1);
            $(this).css('transform','rotate(360deg)');
        },
        function(){
            $(this).css('transform','rotate(0deg)');
        }
    );

});


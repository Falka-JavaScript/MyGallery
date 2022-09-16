$(document).ready(function () {
    console.log('main -> start');
    const ctrl = new Controller();

    $('.nav_img').click((event)=>{
        let url = $(event.target).attr('src');
        console.log(url);
        ctrl.dispatch(url);
    });

    $('#logo').click(function () { 
        $('.mini').hide(500);
    });
});
class Controller{
    loadImages(dir,prefix){
       
        

        

        $('section div').html('');
        $('section div').hide(300);

        for(let i = 1;i<=5;i++){
            $('<img>',{src: `img/${dir}/${prefix}${i}.jpg`, class: 'mini'}).delay(300).appendTo($('section div'));
        }
        $('section div').fadeIn(300);
    }
    dispatch(url){
        if(url=='img/drone.jpg'){
            this.loadImages('drones','d');
        }else if(url=='img/mountain.jpg'){
            this.loadImages('landscapes','mt');
        }else if(url=='img/laptop.jpg'){
            this.loadImages('laptops','l');
        }
    }
}
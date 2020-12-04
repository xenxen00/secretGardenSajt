$(document).ready(function(){
    $('#navBar > ul').addClass('d-flex align-items-center justify-content-around list-inline d-xs-none d-sm-none d-md-none d-xl-block');
    $('#navBar > ul > li').addClass('list-inline-item text-left ml-3 hoverEfekat');
    $('#navBar > ul li a').addClass('text-dark text-decoration-none');
    
    $(window).scroll(function(){
        if($(window).scrollTop()>50){
        $('#kontejner').css('background-color','rgba(229, 229, 237, 0.8)');
        $('#logo').removeClass('col-xl-3').addClass('col-xl-2');
        $('#navBar').css('top', '25px');
        /*if($('.hoverEfekat').hover()){
            $('.hoverEfekat').css('background-color', '#ffffff');
        }
        else $('.hoverEfekat').css('background-color', '#e5e5ed');*/
    }
        else {
         $('#kontejner').css('background', 'transparent');
         $('#logo').removeClass('col-xl-2').addClass('col-xl-3');
         $('#navBar').css('top', '50px');
        }
    });

    $('#hamburger ul').addClass('nav flex-column');
    $('#hamburger ul li').addClass('nav-item');
    $('#hamburger ul li a').addClass('text-dark text-decoration-none');
    var br=0;
    $('#hamDugme').click(function(){
        br++;
        console.log("kliknuto je");
        /*$('#nav2 #hamburger ul').css('visibility','visible');
        console.log("ispred ifa");
        if(!(br%2)) {        
            console.log("u ifu");    
            $('#nav2 #hamburger ul').css('visibility','hidden');
        }*/
        $('#hamburger > ul').slideToggle(1000);
    })
    $('#naruciBuk').click(function(){
        $('#mojModal').slideToggle();
    })

    $( "#otkrij" ).click(function() {
        $( ".sakriven" ).toggle('fast','linear', function(){
        });
        if($('#otkrij').val()=='READ MORE'){
            $('#otkrij').val('SHOW LESS');
        }
        else  $('#otkrij').val('READ MORE');
    });
    

});
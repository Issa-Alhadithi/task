$(function () {

    // show search form

    $('.search').click(function () {
        
        if(!$('.collopses').hasClass('hidden')){
        	$('.collopses').addClass('hidden');
        }
        $('.form-search').toggleClass('hidden');
        
    });

    // show shop


    $('.sellers span').click(function () {
       var getclass = $(this).attr('class');

       $(this).addClass('active').siblings().removeClass('active');
       $('.' + getclass + '-content').addClass('active').removeClass('hidden').siblings().addClass('hidden').removeClass('active');
      //console.log($('.' + getclass + '-content'));
    });

    $(".counts .count").click(function () {
        var valueC = $(this).attr('id'),
            num = $(".counts .num").text(),
            price = $('.review h3').text(),
            replacePrice = price.replace("$", "");

            


        if(valueC == 'min' && num > 1){

            var min = parseInt(num) - 1;
            $(".counts .num").text("0" + min);
            if(num === "01"){
                $(".counts #min").removeClass('active');
            }

            var price = parseInt(replacePrice),
                results = price - 45.5;
            $('.review h3').text("$" + results);
            //console.log(result);
        }
        if(valueC == 'plus'){

            var plus = parseInt(num) + 1;
            $(".counts .num").text("0" + plus);
            if($(".counts .num").text("0" + plus) !== "01"){
                $(".counts #min").addClass('active');
            }
            var prices = parseInt(replacePrice),
                result = prices + 45.5;
            $('.review h3').text("$" + result);
            //console.log(result);
        }
    });


    // show navgition

    $('.glyphicon-bell').click(function () {
        $('.collopses').toggleClass('hidden');

        if(!$('.form-search').hasClass('hidden')){
        	$('.form-search').addClass('hidden');
        }
        
    });


    // project page add class active whan click him

    $('.body .nav li').click(function () {
        var project = $(this).attr('class');

        $('.' + project + '-content').removeClass('hidden').siblings('.content').addClass('hidden');
        //console.log($('.' + project + '-content'));
        $(this).addClass('active').siblings().removeClass('active');
    });


    $('.shurf i').click(function () {
        
        if ($(this).hasClass('active') && $(this).hasClass('prev')) {
            $('shopping div').prev(2).removeClass('hidden').siblings().addClass('hidden');
        }
        if ($(this).hasClass('next') && $(this).hasClass('next')) {
            $('shopping div').next(2).removeClass('hidden').siblings().addClass('hidden');
        }
    });



    //portfolio page
    //shwo work

    $('.bt').click(function () {
        $('.more').removeClass('hidden');
        $(this).fadeOut(200);
    });


});

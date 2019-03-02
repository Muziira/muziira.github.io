function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function eraseCookie(name) {   
    document.cookie = name+'=; Max-Age=-99999999;';  
}


var screenSize = window.innerWidth;
// console.log(screenSize);

// if(screenSize > 680) {
//     $('.career-pk-dropdown').show();
// }

jQuery(document).ready(function($) {
    setTimeout(function () {
        var target = window.location.hash;
        if( target ){
            if( $(target).length ){
                $('html, body').animate({
                    scrollTop: $(target).offset().top
                }, 800, function(){
                    window.location.hash = target;
                });
            }
        }
    }, 1500);

if($('.post-visible-gallery').length){
    $.each($('.gallery-item'), function(){
        $(this).find('a').attr('data-fancybox', '');
    });
}

    // var $heightContent = $('.post-text').height();
    // $('.post-text .text-wrapper').height(200);
    // $('.read-more-btn').on('click', function () {
    //     if( $(this).hasClass('active') ){
    //         $(this).removeClass('active');
    //         $('.post-text .text-wrapper').removeClass('active');
    //         $('.text-wrapper').height(200);
    //         $( "html, body" ).animate({
    //             scrollTop: "300px"
    //         }, 500);
    //     }else {
    //         $(this).addClass('active');
    //         $('.post-text .text-wrapper').addClass('active');
    //         $('.text-wrapper').height($heightContent);
    //     }
    // });

    if($('body').hasClass('page-template-template-company')) {
        var mixer = mixitup('.mix-container', {
            // load: {
            //     filter: '.cat-ibex'
            // }
        });
    }

    $('.cancel').click(function() {
        setCookie('polaccepted','true',360);

        var x = getCookie('polaccepted');
        if (x) {
            $('.pop-up-msg').addClass('close');         
        }
    });

    $('.leader-popup .content-area .col-left .scrollable-content').slimScroll({
        height: '300px'
    });

    $('.nav-toggle a').on('click', function(){
        $(this).parent().parent().toggleClass('opened');

        if($('.nav-overlay').css('opacity') == '0') {
            $('.career-click').addClass('active');
            $('html').addClass('no-scroll');
        } else {
            $('.career-click').removeClass('active');
            $('html').removeClass('no-scroll');
        }
    });

    $('body').on('click', '.nav-overlay', function(){
        $(this).parent().removeClass('opened').removeClass('sub-menu');
        $('#nav').removeClass('sub-menu');
        $('.nav-menu').attr('style','');
        $('html').removeClass('no-scroll');
    });


    $('.snav').css({
        width: $('.nav-menu').width()+'px'
    });

    if(screenSize <= 667) {
        // console.log($('.nav-menu').width());
        $('#nav .nav-menu div.menu-wrap .menu li a.sub-link').on('click', function(){
            $('.nav-menu').css({
                transform: 'translateX(-'+$('.nav-menu').width()+'px)',
                'transition-delay': '0s'
            });

            $(this).parent().find('.nav-sub-menu').css({
                width: $('.nav-menu').width()+'px'
            });
        });

        $('.btn-back').on('click', function(){
            $('.nav-menu').css({
                transform: 'translateX(0px)'
            });
            $('#nav .nav-menu div.menu-wrap .menu li .nav-sub-menu').css({
                width: '0%'
            });
        });

        $('#nav .nav-toggle a').on('click', function(){
            $('.nav-menu').attr('style','');
            $('#nav .nav-menu div.menu-wrap .menu li .nav-sub-menu').css({
                width: '0%'
            });
        });

        $('#nav .nav-overlay a').on('click', function(){
            $('.nav-overlay').css({'z-index': '-1', 'opacity': '0'});
            $('.career-click').removeClass('active');
        });
    }

    $('.cus-row').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3
    });

    $('.owl-carousel').owlCarousel({
        stagePadding: 70,
        loop:true,
        margin:35,
        smartSpeed: 1500,
        dots: false
    });

    $('.team-slick').slick({
        centerMode: true,
        slidesToShow: 4,
        // appendArrows: '.team-slick-navs',
        prevArrow: '.slick-prev',
        nextArrow: '.slick-next',
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    centerMode: true,
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.customer-slick-carousel').slick({
        centerMode: true,
        centerPadding: '0',
        arrows: false,
        slidesToShow: 3,
        draggable: false,
        infinite: true,
        asNavFor: '.customer-navs',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true

                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $('.customer-navs').slick({
        slidesToShow: 6,
        slidesToScroll: 6,
        asNavFor: '.customer-slick-carousel',
        dots: false,
        centerMode: false,
        focusOnSelect: true
    });

    $('.customer-navs li').on('click', function (e){
        var slideClicked = $(e.currentTarget).attr("data-slick-index");
        var setLeft = ('-'+(slideClicked*20)+'%');
        $('.customer-slick .customer-bg').css( "left", setLeft );
    });

    if (window.matchMedia('(min-width: 768px)').matches)
    {
        $('#slider').layerSlider({
            sliderVersion: '6.0.0',
            autoStart: true,
            type: 'fullsize',
            maxRatio: 1,
            hideUnder: 0,
            hideOver: 100000,
            pauseOnHover: false,
            showCircleTimer: false,
            allowFullscreen: false,
            navPrevNext: true,
            hoverPrevNext: false,
            navStartStop: false,
            navButtons: false
        });
    } else {
        $('.home-slider').hide();
    }

    $('.pointer-line').hover(
        function() {
            $(this).next().addClass('opened');
        }, function() {
            $(this).next().removeClass('opened');
        }
    );

    // Slider for our people of company page
    $('.owl-carousel').owlCarousel({
        stagePadding: 70,
        loop:true,
        margin:35,
        smartSpeed: 1500,
        dots: false,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
                stagePadding: 30,
                margin:15,
            },
            481:{
                items:2,
                stagePadding: 50,
                margin:25,
            },
            768:{
                items:3,
                stagePadding: 70,
                margin:35,
            }

        }
    });

    // company main header
    $('#companyslider').layerSlider({
        sliderVersion: '6.0.0',
        type: 'fullsize',
        maxRatio: 1,
        hideUnder: 0,
        hideOver: 100000,
        pauseOnHover: 'disabled',
        showCircleTimer: false,
        allowFullscreen: false
    });

    // Play CLX Function
    function playCLX() {
        $(".lifecycle-experience .overlay").show();
        $(".lifecycle-experience .block-caption").addClass('active');
        $(".lifecycle-experience .play-clx").addClass('active');
        $(".aquire--block").addClass("active");
        window.setTimeout(function(){
            $(".aquire--block").removeClass("active");
            $(".engage--block").addClass("active");
        },2000);

        window.setTimeout(function(){
            $(".engage--block").removeClass("active");
            $(".expand--block").addClass("active");
        },4000);

        window.setTimeout(function(){
            $(".expand--block").removeClass("active");
            $(".experience--block").addClass("active");
        },6000);

        window.setTimeout(function(){
            $(".experience--block").removeClass("active");
            $(".lifecycle-experience .block-caption").removeClass('active');
            $(".lifecycle-experience .play-clx").removeClass('active');
            $(".lifecycle-experience .overlay").hide();
        },8000);
    }

    $(document).on("click","a[name='playCLX']", function (e) {
        playCLX();
    });

    var wow = new WOW(
        {
            boxClass:     'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset:       100,          // distance to the element when triggering the animation (default is 0)
            mobile:       true,       // trigger animations on mobile devices (default is true)
            live:         true,       // act on asynchronously loaded content (default is true)
            callback:     function(box) {
                // the callback is fired every time an animation is started
                // the argument that is passed in is the DOM node being animated
            },
            scrollContainer: null // optional scroll container selector, otherwise use window
        }
    );
    wow.init();

    
    $('a.toggle-acr').on('click',function(e) {
        e.preventDefault();
        $(this).parents("li").find('.content').slideToggle();
        $(this).parents("li").toggleClass('show');
        // $(this).css({"transform":"translateX(-16%)rotate(90deg)","transition":"ease-out 0.2s","opacity":"0","display":"block"});
        // $('a.substract').css({"transform":"translateY(-22%)rotate(180deg)","transition":"ease-in 0.2s","opacity":"1"});
        // $(this).find('a.substract').fadeIn();
        // $(this).find('a.add').fadeOut();
    });

   $('h3.my-faq').on('click',function(e) {
        e.preventDefault();
        $(this).parents("li").find('.content').slideToggle();
        $(this).parents("li").toggleClass('show');
        // $(this).parents("li").find('a.toggle-acr').css({"transform":"translateX(-16%)rotate(90deg)","transition":"ease-out 0.2s","opacity":"0","display":"block"});
        // $(this).parents("li").find('a.substract').css({"transform":"translateY(-22%)rotate(180deg)","transition":"ease-in 0.2s","opacity":"1"});
        // $(this).removeClass('my-faq').addClass('hide-faq');
        // $(this).find('a.substract').fadeIn();
        // $(this).find('a.add').fadeOut();
    });
   $('h3.hide-faq').on('click',function(e){
        e.preventDefault();
        $(this).parents("li").find('.content').slideToggle();
        $(this).parents("li").toggleClass('show');
        // $(this).parents("li").find('a.toggle-acr').css({"transform":"translateX(0%)rotate(0deg)","transition":"ease-in 0.2s","opacity":"1","display":"block !important"});
        // $(this).parents("li").find('a.substract').css({"transform":"translateY(0%)rotate(-180deg)","transition":"ease-out 0.2s","opacity":"0"});
        // $(this).removeClass('hide-faq').addClass('my-faq');
        // $(this).find('a.substract').fadeIn();
        // $(this).find('a.add').fadeOut();
    });

    $('a.substract').on('click',function(e) {
        e.preventDefault();
        $(this).parents("li").find('.content').slideToggle();
        $(this).parents("li").toggleClass('show');
        // $('a.toggle-acr').css({"transform":"translateX(0%)rotate(0deg)","transition":"ease-in 0.2s","opacity":"1","display":"block !important"});
        // $(this).css({"transform":"translateY(0%)rotate(-180deg)","transition":"ease-out 0.2s","opacity":"0"});
        // $(this).find('a.substract').fadeIn();
        // $(this).find('a.add').fadeOut();
    });


    

    $('.the-connected .block-content .btn, .new-customers .nc__columnright a').click(function(e){
        e.preventDefault();
        $('.clx-from').addClass('active');
        $('body, html').css('overflow-y', 'hidden');
    });
    $('.clx-from .close-btn').click(function(){
        $('.clx-from').removeClass('active');
        $('body, html').css('overflow-y', 'auto');
    });

    /* Careers - job listing and search */
    $('[name=txt_jobs_search]').on('input', function(){
        search_job_trigger();
    });
    $('[name=txt_jobs_locations], [name=txt_jobs_departments]').on('change', function(){
        search_job_trigger();
    });
    $('.form-job.search-form').on('submit', function(e){
        e.preventDefault();
    });


    /* Careers - job application */
    $("#country__dd").on('click', function(){
        $('.dropdown.country__dd').toggleClass('show');
    });
    $('#select_job_type li .btn').on('click', function () {
        $('.form-job input#type').val($(this).data('job_type'));
        $('.form-inline.form-job').submit();
    });


    if($('input[name=cnic]').length){
        $('input[name=cnic]').mask(GLOBAL_VAR.cnic_mask);
    }
    if($('input[name=contact_number]').length){
        $('input[name=contact_number]').mask(GLOBAL_VAR.contact_mask);
    }
    if($('input[name=phone_number]').length){
        $('input[name=phone_number]').mask(GLOBAL_VAR.contact_mask);
    }
    if($('input[name=candidateContact]').length){
        $('input[name=candidateContact]').mask(GLOBAL_VAR.contact_mask);
    }
    $("input, select, textarea").on('focus', function(){
        $(this).siblings('label').css({'top' : '0'});
        $(this).siblings('label').addClass('active');

    });
    $("input, select, textarea").on('blur', function(){
        $(this).siblings('label').removeClass('active');
        if($(this).val() == ''){
            $(this).siblings('label').css({'top':'24px'});
        } else{
            $(this).siblings('label').addClass('active');
        }
    });

    // $('#btn_apply_now').on( 'click', function () {
    //     $( '#applyForm_container' ).slideToggle( 'fast', function () {
    //         if( $("#applyForm_container").is(':visible') ){
    //             $( '#btn_apply_now' ).hide();
    //             $( '#btn_submit_now' ).show();
    //             $('html,body').animate({
    //                 // scrollTop:$("#applyForm").offset().top - 220
    //             },1000,'swing');
    //         }
    //     } );
    // } );


    $('.career-pk-dropdown ul li.career-click').on('click', function() {

        if(screenSize >= 680) {
            $('.nav-toggle a').click();

            if($('.nav-overlay').css('opacity') == '0') {
                $('.career-click').addClass('active');
            } else {
                $('.career-click').removeClass('active');
            }

        } else {

            if($('.nav-overlay').css('opacity') == '0') {
                $('.career-click').addClass('active');
            } else {
                $('.career-click').removeClass('active');
            }

            if($('#nav').hasClass('opened')){
                $('.nav-toggle a').click();
                $('.career-click').addClass('active');
            }

            if($('.career-click').hasClass('active')) {
                $('.nav-overlay').css({'z-index': '99', 'opacity': '1'});
            } else {
                $('.nav-overlay').css({'z-index': '-1', 'opacity': '0'});
            }
        }


    });

    $('.shareicon').on('click', function() {

        $(this).parent('.share-btns').find('ul').toggleClass('active')
         // $('.share-btns');
     });


    $('body').on('#btn_submit_now', 'click', function () {
        $('form[name=applyNowForm]').submit();
    });

  

     $('.apply-toggle').on('click', function() {
         $('.selected_file').html('');
        $('body,html').toggleClass('no-scroll');
         console.log('body');
         $('#applyForm_container .job-form').toggleClass('active');
         $('.msg_container').html('');
         $('.source_details').hide();
     });
     $('body').on('click', '.btn--apply_now_trigger', function() {
         $('.selected_file').html('');
         $('body,html').toggleClass('no-scroll');
         $('#applyForm_container .job-form').toggleClass('active');
         $('.msg_container').html('');
         $('.source_details').hide();
         $('#applyForm_container [name=jobID]').val($(this).siblings('[name=jobID]').val());
         $('#applyForm_container [name=jobTitle]').val($(this).siblings('[name=jobTitle]').val());
         $('#applyForm_container [name=emailTo]').val($(this).siblings('[name=emailTo]').val());
         $('#applyForm_container .col-left h3').html($(this).siblings('[name=location]').val());
         $('#applyForm_container .col-left h2').html($(this).siblings('[name=jobTitle]').val());
         var location_array = $(this).siblings('[name=location]').val().split(', '),
            location_output = '<option value="" selected></option>';
         //
         if(typeof location_array[0] !== 'undefined' && location_array[0] != ''){
            for (var j = 0; j < location_array.length; j++) {
                location_output += '<option value="'+location_array[j]+'">'+location_array[j].replace(/_/g, ' ')+'</option>'
            }
            $('[name=field4]').html(location_output);
         }
     });
     $('.referral-toggle').on('click', function() {
        $('body,html').toggleClass('no-scroll');
         $('.selected_file').html('');
         $('#referralForm_container .job-form').toggleClass('active');
         $('.msg_container').html('');
     });


     $('.status-btn-toggle').click(function() {
         $('.check-status-pop-up').toggleClass('active');
         $('.jobs-title-section, #status-details').hide();
         $('#form-status-check, #status-default-msg').show();
         $('#error-msg').html('');
         $('body,html').toggleClass('no-scroll');
         $('[name=cnic], [name=contact_number]').val('');
     });


    $('.toggle_clx_popup').on('click', function() {
        var popup_name = $(this).data('popup_name'),
            talk_about = $(this).data('talk_about'),
            description = $(this).data('description'),
            heading = $(this).data('heading');
        if($('.popup--'+popup_name).length){
        	$('body,html').toggleClass('no-scroll');
            $('.popup--'+popup_name).toggleClass('active');
            if(talk_about != '' && typeof talk_about !== 'undefined'){
                $('.popup--'+popup_name+' [name=talk_about] option').removeAttr('selected');
                $('.popup--'+popup_name+' [name=talk_about] option[value='+talk_about+']').attr('selected', true);
            }
            if(heading != '' && typeof heading !== 'undefined'){
                $('.popup--'+popup_name+' .popup_heading').html(heading);
            }
            if(description != '' && typeof description !== 'undefined'){
                $('.popup--'+popup_name+' .popup_description').html(description);
            }
            if(talk_about == 'business'){
                $('.popup--'+popup_name+' .input-field.field:nth-child(1)').css('display', 'none');
            } else{
                $('.popup--'+popup_name+' .input-field.field:nth-child(1)').css('display', 'block');
            }
        }
    });


    $(window).scroll(function() {
        /*var scroll = $(window).scrollTop();
        if (scroll >= 400 && $('#applyForm_container').is(':visible')) {
            if(scroll < ($('#applyForm_container').outerHeight()+300)){
                var theWidth = $('.job-listing .job-sidebar').parent().width() + 6;
                $('.job-listing .job-sidebar').css({'width': theWidth + 'px', 'position': 'fixed', 'top': '98px', 'z-index': '9999'});
            } else {
                $('.job-listing .job-sidebar').css({'width': '100%', 'position': 'relative', 'top': 'auto'});
            }
        } else {
            $('.job-listing .job-sidebar').css({'width': '100%', 'position': 'relative', 'top': 'auto'});
        }*/
    });

    $('form[name=applyNowForm] [name=source]').change(function(){
        var selected_source = $(this).val();
        if ( selected_source != '' ) {
            $('.source_details').show();
            $('[name=source_details]').focus();
            /*$.ajax({
                async: false,
                type: 'POST',
                global: false,
                dataType: 'html',
                url: myAjaxObject.ajax_url,
                data: 'action=get_sources&selected_source=' + selected_source.replace(' ', '_'),
                success: function (data) {
                    data = data.split(',');
                    if( data.length > 0 ){
                        $('[name=source_details] option').remove();
                        for ( var i = 0; i < data.length; i++ ) {
                            $('[name=source_details]').append('<option value="'+ data[i] +'">'+ data[i] +'</option>');
                        }
                        $('.source_details').show();
                    } else{
                        $('.source_details').hide();
                    }
                }
            });*/
        } else{
            $('.source_details').hide();
        }
    });


    /*------------------------------------------------------------------------*/

    /*makeDroppable(document.querySelector('.applynow-droppable'), function(files) {
        var output = document.querySelector('.applynow-selected_file');
        output.innerHTML = '';
        for(var i = 0; i < files.length; i++) {
            output.innerHTML += '<span>'+files[i].name+'</span>';
            // document.getElementById('applyNow_upload').dataTransfer.files = files[i];
            // console.log(files[i]);
            // console.log(document.getElementById('applyNow_upload').value);
            break;
        }
    });*/

    /*------------------------------------------------------------------------*/


    $('form[name=applyNowForm] input[name=upload]').on('change', function(){
        var file_name = $(this).val().replace('C:\\fakepath\\', '');
        $(this).closest('form[name=applyNowForm]').find('.selected_file').html(file_name);
    });
    $('form[name=referralForm] input[name=upload]').on('change', function(){
        var file_name = $(this).val().replace('C:\\fakepath\\', '');
        $(this).closest('form[name=referralForm]').find('.selected_file').html(file_name);
    });


    $('body').on('submit', 'form[name=applyNowForm]', function (e) {
        e.preventDefault();

        var form_name = $(this).find('input[name=form_name]').val(),
            upload = $(this).find('input[name=upload]').val(),
            file_ext = upload.slice((upload.lastIndexOf(".") - 1 >>> 0) + 2).replace(/\s/g, ''),
            // allowed_ext = ['html', 'htm', 'txt', 'pdf', 'doc', 'docx', 'rtf', 'jpg', 'png', 'jpeg'],
            allowed_ext = ['doc', 'docx', 'pdf', 'rtf'],
            post_url = myAjaxObject.ajax_url;

        if(upload == '' || typeof upload == 'undefined'){
            $(this).find('.attach-box .status-msg').html('Attachment is required.');
            return false;
        } else{ $(this).find('.attach-box .status-msg').html(''); }

        if($.inArray( file_ext, allowed_ext) === -1){
            $(this).find('.attach-box .status-msg').html('That is not a valid file type. Accepted file types are pdf, txt, docx, doc, html, htm and rtf.');
            return false;
        } else{ $(this).find('.attach-box .status-msg').html(''); }

        var caller_name = $(this).find('input[name=caller_name]').val(),
            gender = $(this).find('select[name=gender] option:selected').val(),
            cnic = $(this).find('input[name=cnic]').val(),
            contact_number = $(this).find('input[name=contact_number]').val(),
            caller_email = (typeof $(this).find('input[name=caller_email]').val() !== 'undefined') ? $(this).find('input[name=caller_email]').val().replace(/\s/g, '') : '',
            shift_availability = $(this).find('select[name=shift_availability] option:selected').val(),
            field4 = $(this).find('select[name=field4] option:selected').val(),
            source = $(this).find('select[name=source] option:selected').val(),
            source_details = $(this).find('select[name=source_details] option:selected').val(),
            emailTo = $(this).find('input[name=emailTo]').val();

        if(caller_name == '' || typeof caller_name == 'undefined'){
            $(this).find('input[name=caller_name] + .status-msg').html('Full name is required');
            return false;
        }  else{ $(this).find('input[name=caller_name] + .status-msg').html(''); }
        if(gender == '' || typeof gender == 'undefined'){
            $(this).find('select[name=gender] + .status-msg').html('Gender is required');
            return false;
        }  else{ $(this).find('select[name=gender] + .status-msg').html(''); }
        if(contact_number == '' || typeof contact_number == 'undefined'){
            $(this).find('input[name=contact_number] + .status-msg').html('Contact number is required');
            return false;
        }  else{ $(this).find('input[name=contact_number] + .status-msg').html(''); }
        if(caller_email == '' || typeof caller_email == 'undefined' || !validateEmail(caller_email)){
            $(this).find('input[name=caller_email] + .status-msg').html('Email address is required and must be in valid format');
            return false;
        }  else{ $(this).find('input[name=caller_email] + .status-msg').html(''); }
        if(shift_availability == '' || typeof shift_availability == 'undefined'){
            $(this).find('select[name=shift_availability] + .status-msg').html('Preferred shift is required');
            return false;
        }  else{ $(this).find('select[name=shift_availability] + .status-msg').html(''); }
        if(field4 == '' || typeof field4 == 'undefined'){
            $(this).find('select[name=field4] + .status-msg').html('Location is required');
            return false;
        }  else{ $(this).find('select[name=field4] + .status-msg').html(''); }
        /*if(source == '' || typeof source == 'undefined'){
            $(this).find('select[name=source] + .status-msg').html('Source is required');
            return false;
        }  else{ $(this).find('select[name=source] + .status-msg').html(''); }*/

        $(this).find('button span').html('Submitting...');
        $(this).find('button i').hide();
        $(this).find('button').css('pointer-event', 'none');

        var formData = new FormData($(this)[0]);
        formData.append('action', 'applyjob');
        $.ajax({
            type: 'POST',
            url: post_url,
            data: formData,
            cache: false,
            contentType: false,
            processData: false,
            success: function (response) {
                if( response == '1' ){
                    var form_container = 'applyForm_container';
                    $('#'+form_container+' form')[0].reset();
                    $('#'+form_container+' form button[type=submit] span').html('Apply Now');
                    $('#'+form_container+' form button[type=submit] i').show();
                    $(this).find('button').css('pointer-event', 'all');
                    $('#'+form_container+' .msg_container').html('<div class="form_submitted_msg">Thank you for applying on this job. One of our HR Executives will contact you shortly to follow up.</div>');
                    /*setTimeout(function () {
                        $('#'+form_container+' .job-form').toggleClass('active');
                    }, 2000);*/
                }
            }
        });


    });

    $('body').on('submit', 'form[name=referralForm]', function (e) {
        e.preventDefault();

        var form_name = $(this).find('[name=form_name]').val(),
            upload = $(this).find('[name=upload]').val(),
            file_ext = upload.slice((upload.lastIndexOf(".") - 1 >>> 0) + 2).replace(/\s/g, ''),
            // allowed_ext = ['html', 'htm', 'txt', 'pdf', 'doc', 'docx', 'rtf', 'jpg', 'png', 'jpeg'],
            allowed_ext = ['doc', 'docx', 'pdf', 'rtf'],
            post_url = myAjaxObject.ajax_url;

        if(upload == '' || typeof upload == 'undefined'){
            $(this).find('.attach-box .status-msg').html('Attachment is required.');
            return false;
        } else{ $(this).find('.attach-box .status-msg').html(''); }

        if($.inArray( file_ext, allowed_ext) === -1){
            $(this).find('.attach-box .status-msg').html('That is not a valid file type. Accepted file types are pdf, txt, docx, doc, html, htm and rtf.');
            return false;
        } else{ $(this).find('.attach-box .status-msg').html(''); }

        var employeeName = $(this).find('[name=employeeName]').val(),
            employeeID = $(this).find('[name=employeeID]').val(),
            candidateName = $(this).find('[name=candidateName]').val(),
            candidateContact = $(this).find('[name=candidateContact]').val(),
            candidateEmail = $(this).find('[name=candidateEmail]').val(),
            location = $(this).find('[name=location] option:selected').val(),
            program = $(this).find('[name=program] option:selected').val(),
            linkedin = $(this).find('[name=linkdinprofile]').val(),
            comment = $(this).find('[name=aboutcandidate]').val();

        if(employeeName == '' || typeof employeeName == 'undefined'){
            $(this).find('[name=employeeName] + .status-msg').html('Employee Name is required');
            return false;
        }  else{ $(this).find('[name=employeeName] + .status-msg').html(''); }
        if(employeeID == '' || typeof employeeID == 'undefined'){
            $(this).find('[name=employeeID] + .status-msg').html('Employee ID is required');
            return false;
        }  else{ $(this).find('[name=employeeID] + .status-msg').html(''); }
        if(candidateName == '' || typeof candidateName == 'undefined'){
            $(this).find('[name=candidateName] + .status-msg').html('Candidate Name is required');
            return false;
        }  else{ $(this).find('[name=candidateName] + .status-msg').html(''); }
        if(candidateContact == '' || typeof candidateContact == 'undefined'){
            $(this).find('[name=candidateContact] + .status-msg').html('Candidate Contact Number is required');
            return false;
        }  else{ $(this).find('[name=candidateContact] + .status-msg').html(''); }
        if(candidateEmail == '' || typeof candidateEmail == 'undefined'){
            $(this).find('[name=candidateEmail] + .status-msg').html('Candidate Email is required');
            return false;
        }  else{ $(this).find('[name=candidateEmail] + .status-msg').html(''); }
        if(location == '' || typeof location == 'undefined'){
            $(this).find('[name=location] + .status-msg').html('Location is required');
            return false;
        }  else{ $(this).find('[name=location] + .status-msg').html(''); }
        if(program == '' || typeof program == 'undefined'){
            $(this).find('[name=program] + .status-msg').html('Program is required');
            return false;
        }  else{ $(this).find('[name=program] + .status-msg').html(''); }

        $(this).find('button span').html('Submitting...');
        $(this).find('button i').hide();
        $(this).find('button').css('pointer-event', 'none');

        var formData = new FormData($(this)[0]);
        formData.append('action', 'applyjob');
        $.ajax({
            type: 'POST',
            url: post_url,
            data: formData,
            cache: false,
            contentType: false,
            processData: false,
            success: function (response) {
                if( response == '1' ){
                    var form_container = 'referralForm_container';
                    $('#'+form_container+' form')[0].reset();
                    $('#'+form_container+' form button[type=submit] span').html('Apply Now');
                    $('#'+form_container+' form button[type=submit] i').show();
                    $(this).find('button').css('pointer-event', 'all');
                    $('#'+form_container+' .msg_container').html('<div class="form_submitted_msg">Thank you. One of our HR Executives will contact you shortly to follow up.</div>');
                    /*setTimeout(function () {
                        $('#'+form_container+' .job-form').toggleClass('active');
                    }, 2000);*/
                }
            }
        });
    });

    /* Check status functionality */

    if($('[name=age]').length){
        $('[name=age]').mask('00');
    } 

    if($('[name=employeeID]').length){
        $('[name=employeeID]').mask('00000000');
    }
    if ($('#cnicNum').length) {
        if($('#cnicNum').length && GLOBAL_VAR.status_check_via_cnic){
            $('#cnicNum').mask(GLOBAL_VAR.cnic_mask);
        } else {
            $('#cnicNum').mask(GLOBAL_VAR.contact_mask);
        }

    }
    $('#search-type').on('change', function(){
        if( this.value == 'cn' ){
            $('#cnicNum').mask(GLOBAL_VAR.contact_mask);
            $('#cnicNum').attr('placeholder', 'Enter Your Phone Number');
        } else{
            $('#cnicNum').mask(GLOBAL_VAR.cnic_mask);
            $('#cnicNum').attr('placeholder', 'Enter Your CNIC Number');
        }
    });

    $('#form-status-check').on('submit', function(e){
        e.preventDefault();
        $('#status-details, #status-default-msg').fadeOut('fast');
        var key = 0,
            cnic = $(this).find('[name=cnic]').val(),
            contact_number = $(this).find('[name=contact_number]').val(),
            data = {},
            val_count = 0,
            value = '';


        if( cnic  != ''){
            key = 'cnic';
            value = cnic;
            val_count = GLOBAL_VAR.cnic_mask.length;
        } else{
            key = 'contact_number';
            value = contact_number;
            val_count = GLOBAL_VAR.contact_mask.length;
        }

        // data[key] = value;

        if(value.length < val_count){
            $("#error-msg").html(key.replace(/_/g, ' ')+' is not in appropriate format').fadeIn("fast");
        } else{
            $('.applicant-status .post-content').css('cursor', 'progress');
            $.ajax({
                async: false,
                type: 'POST',
                global: false,
                dataType: 'html',
                url: myAjaxObject.ajax_url,
                data: 'action=get_applicant_status&key=' + key + '&value=' + value + '&is_status_check_from_local=' + ((GLOBAL_VAR.is_status_check_from_local) ? '1' : '0'),
                success: function (response) {
                    response = $.parseJSON(response);
                    $("#error-msg").fadeOut("fast");
                    var left_list = '',
                        right_list = '';
                    if( response.length > 0 && typeof response[0]['candidate_name'] != 'undefined'){
                        $.each( response, function( key, value ) {

                            var post_title = (value['job_title'] != null) ? value['job_title'] : '';
                            var apply_date = (value['apply_date'] != null) ? value['apply_date'] : 'NA';
                            var contact_number = (value['contact_number'] != null) ? value['contact_number'] : 'NA';
                            var cnic = (value['cnic'] != null) ? value['cnic'] : 'NA';
                            var phone_screening_status = (value['phone_screening_status'] != null) ? value['phone_screening_status'] : 'NA';
                            var face2face_status = (value['face2face_status'] != null) ? value['face2face_status'] : 'NA';
                            var skill_assessment_status = (value['skill_assessment_status'] != null) ? value['skill_assessment_status'] : 'NA';
                            var final_interview_status = (value['final_interview_status'] != null) ? value['final_interview_status'] : 'NA';
                            var candidate_name = (value['candidate_name'] != null) ? value['candidate_name'] : '';

                            $('#applicant-name').html(candidate_name);
                            $('.jobs-title-section').slideDown();
                            $('#reset').show();

                            left_list += '<li>' +
                            '   <a href="javascript:void(0);" class="status_box_list" data-target_index="'+key+'">' +
                            '       <span class="left">'+post_title+'</span>' +
                            '       <span class="right">'+final_interview_status+'</span>' +
                            '   </a>' +
                            '</li>';
                            right_list += '<div class="status-box" id="status_box__'+key+'">'+
                                '<div class="single-status">'+
                                    '<ul>'+
                                        '<li>'+
                                            '<small>'+((GLOBAL_VAR.entity == 'pk') ? 'Apply Date': "Date d'application") +'</small>'+
                                            '<h5>'+apply_date+'</h5>'+
                                        '</li>'+
                                        '<li>'+
                                            '<small>'+((GLOBAL_VAR.entity == 'pk') ? 'Contact No.':'Numéro de contact')+'</small>'+
                                            '<h5>'+contact_number+'</h5>'+
                                        '</li>'+
                                        '<li>'+
                                            '<small>'+((GLOBAL_VAR.entity == 'pk') ? 'CNIC No.':'N°CNIC')+'</small>'+
                                            '<h5>'+cnic+'</h5>'+
                                        '</li>'+
                                         '<li>'+
                                            '<small>'+((GLOBAL_VAR.entity == 'pk') ? 'Phone Assesment':'Évaluation téléphonique')+'</small>'+
                                            '<h5>'+phone_screening_status+'</h5>'+
                                        '</li>'+
                                        '<li>'+
                                            '<small>'+((GLOBAL_VAR.entity == 'pk') ? 'Recruitment Screening':'Dépistage de recrutement')+'</small>'+
                                            '<h5>'+face2face_status+'</h5>'+
                                        '</li>'+
                                        '<li>'+
                                            '<small>'+((GLOBAL_VAR.entity == 'pk') ? 'Skill Test Status':'Statut du test de compétences')+'</small>'+
                                            '<h5>'+skill_assessment_status+'</h5>'+
                                        '</li>'+
                                    '</ul>'+
                                '</div>'+
                            '</div>';
                            if(key >= 2){ return false; }
                        });
                        $('#form-status-check').hide();

                    } else{
                        $('#applicant-name').html('');
                        $('.jobs-title-section').hide();
                        right_list += '<div class="status-box">'+
                            '<div class="single-status">'+
                                '<p class="red-text">No record found for this applicant</p>'+
                            '</div>'+
                        '</div>';
                    }

                    $('#candidate__jobs_list').html(left_list);
                    $('#status-response').html(right_list);

                    $("#error-msg").html('').fadeOut("fast");
                    if(
                        $('#status-response:contains("reject")').length > 0 ||
                        $('#status-response:contains("Reject")').length > 0 ||
                        $('#status-response:contains("rejected")').length > 0 ||
                        $('#status-response:contains("Rejected")').length > 0
                    ){
                        $('.disclaimer').fadeIn('fast');
                    } else{
                        $('.disclaimer').fadeOut('fast');
                    }
                    $('#status-details').fadeIn('fast');
                    $('.applicant-status .post-content').css('cursor', 'default');

                },
                error: function (request,error) {
                    $("#error-msg").html(error).fadeIn("fast");
                    $('.disclaimer, #status-details').fadeOut('fast');
                }
            });
        }

    });

    $('#reset').on('click',function(){
        $('#form-status-check').show();
        $('.jobs-title-section').hide();
        $(this).hide();
    });

    $('#candidate__jobs_list').on('click', '.status_box_list', function(e){
        e.preventDefault();
        $('#candidate__jobs_list li').removeClass('active');
        $(this).closest('li').addClass('active');
        $('.status-box').hide();
        $('#status_box__'+$(this).data('target_index')).fadeToggle();
    });

    $('.mobile-nav-toggle').on('click', function(){
        mobileNavToggle();
    });

    $('.mobile-nav .sub').on('click', function(){

        if($(this).hasClass('collapsed')){
            $(this).find('ul').slideDown(250);
            $(this).removeClass('collapsed');
        } else {
            $(this).find('ul').slideUp(250);
            $(this).addClass('collapsed');
        }
    });

    $('.mobile-nav li:not(".sub") a').on('click', function(){
        mobileNavToggle();
    });

    $("#cur-opening").click(function() {
        $('html, body').animate({
            scrollTop: $("#jobs-search").offset().top
        }, 2000);
    });


    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 799) {
            $('.main-nav:not(.industries)').addClass('fixed');
        } else {
            $('.main-nav:not(.industries)').removeClass('fixed');
        }
    });

    //Set the height of the block
    $('.menu-wrap .block-border').height($('.menu-wrap .menu li').height());

    //go to the default selected item
    $('.menu-wrap .the-menu > li').hover(
        function() {

            $('.menu-wrap .block-border').height($(this).height());
            //get the top position
            topval = $(this).position()['top'];

            //animate the block-border
            //you can add easing to it
            $('.menu-wrap .block-border').stop().stop().animate({top: topval}, {easing: '', duration:200});

            //add the hover effect to menu item
            $(this).addClass('hover');
        },
        function() {
            //remove the hover effect
            $(this).removeClass('hover');
        }
    );

    // $("#talk_about").on("change", function(){
    //     var selected_value = $("#talk_about option:selected").val();
    //     if( selected_value == "hr" ){
    //         // $('#country_office_container').show();
    //     } else{
    //         // $('#country_office_container').hide();
    //         $("#hr_office_container").hide();
    //         $('#hr_office').html('');
    //         $('#country_office option:eq(0)').prop('selected', true);
    //     }
    // });

    // $("#country_office").on("change", function(){
    //     var selected_value = $("#country_office option:selected").val();
    //     if(selected_value == 'pk') {
    //         $('#hr_office').html('<option value="isb">Islamabad</option>\n' +
    //             '<option value="khi">Karachi</option>\n' +
    //             '<option value="lhr">Lahore</option>');
    //         $("#hr_office_container").show();
    //     } else {
    //         $('#hr_office').html('');
    //         $("#hr_office_container").hide();
    //     }
    // });

    $("#contact_form, #request_demo_form").on("submit", function(e){

        e.preventDefault();
        var action = ($(this).attr('id') == 'request_demo_form') ? 'request_demo_form_submission' : 'contact_form_submission';
        var form_id = ($(this).attr('id') == 'request_demo_form') ? 'request_demo_form' : 'contact_form';
        var submit_text = ($(this).attr('id') == 'request_demo_form') ? 'Schedule a demo' : 'Submit';
        

        var full_name = $('#'+form_id+' input[name="full_name"]').val(),
            talkabout = $('#'+form_id+' #talk_about option:selected').val(),

            country = $('#'+form_id+' #country_office option:selected').html(),


            email_address = $('#'+form_id+' input[name="email_address"]').val(),
            email_address = (email_address != '' && typeof email_address !== 'undefined') ? email_address.replace(/\s/g,'') : undefined,
            captcha = $('#'+form_id+' textarea[name="g-recaptcha-response"]').val();


         if(talkabout == "" || typeof talkabout == "undefined"){
            $('#'+form_id+' .submit-msg').html('<div class="msg error">Query Category is required.</div>');
            return false;
        }
    

        if(country == "" || typeof country == "undefined"){
            $('#'+form_id+' .submit-msg').html('<div class="msg error">Country name is required.</div>');
            return false;
        }

       if(full_name == "" || typeof full_name == "undefined"){
            $('#'+form_id+' .submit-msg').html('<div class="msg error">Full name is required.</div>');
            return false;
        }

        if(email_address == "" || typeof email_address == "undefined" || !validateEmail(email_address)){
            $('#'+form_id+' .submit-msg').html('<div class="msg error">Email address must be in proper format.</div>');
            return false;
        }
        // if(captcha == "" || typeof captcha == "undefined"){
        //     $('#'+form_id+' .submit-msg').html('<div class="msg error">Captcha must be validated</div>');
        //     return false;
        // }

        $("#"+form_id+" .submit-btn").html('Submitting...');
        $('#'+form_id+' .submit-msg').html('');

        // console.log($("#"+form_id).serialize());
        
        $.ajax({
            global: false,
            data: $("#"+form_id).serialize()+'&action='+action+'&_ajax_nonce='+_ajax_nonce+'&ctr_label='+country,
            dataType: 'html',
            type: "POST",
            url: myAjaxObject.ajax_url,
            success: function( response ) {
                $('#'+form_id+' .submit-msg').html(response);
                $("#"+form_id+" .submit-btn").html(submit_text);
                $("#"+form_id)[0].reset();
                grecaptcha.reset();
            }
        });
    });

    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior


            // Store hash
            var http_contained = $(this).attr('href');
            if(http_contained.indexOf("http") >= 0){
                if(window.location.href == $(this).attr('href')){
                    event.preventDefault();
                }
            } else{
                event.preventDefault();
            }
            var hash = this.hash;
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area

            if($(this).hasClass('product-scroll')) {
                $('html, body').animate({
                    scrollTop: $(hash).offset().top - 82
                }, 800, function(){

                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;

                    console.log('if');
                });
            } else {
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function(){

                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                });

                console.log('else');
            }


        } // End if
    });

    if($("#Telephone").length){
        $("#Telephone").intlTelInput({
            utilsScript: HOME_DIRECTORY.PATH+'/assets/dnc/js/utils.js'
        });
    }

    // career click
    // if($('#nav').hasClass('opened')){
    //     $('.career-pk-dropdown ul li.career-click').addClass('active');
    // } else {
    //     $('.career-pk-dropdown ul li.career-click').removeClass('active');
    // }

    $('#location-area .location--name').click(function (e) {
        var location = $(this).data('location');
        $('#location-area .location--name').removeClass('active');
        $(this).addClass('active');
        // $(this).closest('.location').find('.address').hide('slow', function () {});
        // $('[id^="address-'+location+'"]').show('slow', function () {});
        // $(this).closest('.location').find('iframe.map').slideUp({duration: 500});
        // $('[id^="map-'+location+'"]').slideDown({duration: 1000});

        // address
        $(this).closest('.location').find('.address').removeClass('block').outerWidth();
        $(this).closest('.location').find('.address').removeClass('fade-in').outerWidth();
        $('[id^="address-'+location+'"]').addClass('block').outerWidth();
        $('[id^="address-'+location+'"]').addClass('fade-in').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {});
        // map
        $(this).closest('.location').find('iframe.map').removeClass('block').outerWidth();
        $(this).closest('.location').find('iframe.map').removeClass('fade-in').outerWidth();
        $('[id^="map-'+location+'"]').addClass('block').outerWidth();
        $('[id^="map-'+location+'"]').addClass('fade-in').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {});


    });
    setTimeout(function () {
        $('#location-area .location--name:first-child').click();
    }, 1000);

    $('#btn-view-all--life-at-ibex').on('click', function (e) {
        e.preventDefault();
        $(this).html('Please Wait...');
        $('#life-at-ibex-listing').css({
            'opacity': 0.5,
            'pointer-events' : 'none'
        });
        $.ajax({
            type: "POST",
            dataType : 'text',
            url: myAjaxObject.ajax_url,
            data:{action : 'get_all_life_at_ibex'},
            success: function (msg) {
                if(msg != ''){
                    $('#life-at-ibex-listing').html(msg);
                } else{
                    $('#btn-view-all--life-at-ibex').hide();
                }
                $('#life-at-ibex-listing').css({
                    'opacity': 1,
                    'pointer-events' : 'all'
                });
            },
            error: function (msg) {
               console.log(msg);
            }
        });
    });

});


// Scroll Magic Slider
$(document).ready(function(){

    if($('body').hasClass('page-template-template-home')) {
        var controller = new ScrollMagic.Controller();
        var ourSliderContainer = new ScrollMagic.Scene({
            triggerElement: '#scroll-magic-slider',
            triggerHook: 0.0015,
            duration: '950%',
        })
            .setClassToggle('#scroll-magic-slider', 'in-view')
            .addTo(controller)
            .on("update", function (e) {
                if ($('#slide-intro-container').hasClass('in-view')) {
                    $('.scroll-prev').addClass('disabled');
                    $('.scroll-prev').attr('href', 'javascript:void(0);');
                    $('.scroll-next').attr('href', '#slide-one-container');
                } else if ($('#slide-one-container').hasClass('in-view')) {
                    $('.scroll-prev').removeClass('disabled');
                    $('.scroll-prev').attr('href', '#slide-intro-container');
                    $('.scroll-next').attr('href', '#slide-two-container');
                } else if ($('#slide-two-container').hasClass('in-view')) {
                    $('.scroll-prev').attr('href', '#slide-one-container');
                    $('.scroll-next').attr('href', '#slide-three-container');
                } else if ($('#slide-three-container').hasClass('in-view')) {
                    $('.scroll-prev').attr('href', '#slide-two-container');
                    $('.scroll-next').attr('href', '#slide-four-container');
                    $('.scroll-next').removeClass('disabled');
                } else if ($('#slide-four-container').hasClass('in-view')) {
                    $('.scroll-prev').attr('href', '#slide-three-container');
                    $('.scroll-next').attr('href', 'javascript:void(0);');
                    $('.scroll-next').addClass('disabled');
                }
            });

        var ourPhoneContainer = new ScrollMagic.Scene({
            triggerElement: '#phone-container',
            triggerHook: 0.0015,
            duration: '730%',
        })
            .setClassToggle('#phone-container', 'in-view')
            // .addIndicators({ name: 'Phone Section', colorTrigger: 'black' })
            .addTo(controller);

        var ourSlideIntroDock = new ScrollMagic.Scene({
            triggerElement: '#slide-intro-container',
            triggerHook: 0.5,
        })
        // .addIndicators({ name: 'Slide Intro Section', colorTrigger: 'black' })
            .addTo(controller)
            .on("enter", function (e) {
                // $('.scroll-to-slider').click();
            });

        var ourSlideIntro = new ScrollMagic.Scene({
            triggerElement: '#slide-intro',
            triggerHook: 0.0015,
            duration: '100%'
        })
            .setPin('#slide-intro', {pushFollowers: true})
            .setClassToggle('#slide-intro-container', 'in-view')
            // .addIndicators({ name: 'Slide Intro', colorTrigger: 'black' })
            .addTo(controller);


        var ourSlideOneDock = new ScrollMagic.Scene({
            triggerElement: '#slide-one-container',
            triggerHook: 1
        })
        // .addIndicators({ name: 'Slide Show Section', colorTrigger: 'black' })
            .addTo(controller);

        var ourSlideOne = new ScrollMagic.Scene({
            triggerElement: '#slide-one',
            triggerHook: 0.0015,
            duration: '100%'
        })
            .setPin('#slide-one', {pushFollowers: true})
            .setClassToggle('#slide-one-container', 'in-view')
            // .addIndicators({ name: 'Slide One', colorTrigger: 'black' })
            .addTo(controller);

        var ourSlideTwoDock = new ScrollMagic.Scene({
            triggerElement: '#slide-two-container',
            triggerHook: 1
        })
        // .addIndicators({ name: 'Slide Show Section 2', colorTrigger: 'black' })
            .addTo(controller);

        var ourSlideTwo = new ScrollMagic.Scene({
            triggerElement: '#slide-two',
            triggerHook: 0.0015,
            duration: '100%'
        })
            .setPin('#slide-two', {pushFollowers: true})
            .setClassToggle('#slide-two-container', 'in-view')
            // .addIndicators({ name: 'Slide Two', colorTrigger: 'black' })
            .addTo(controller);

        var ourSlideThreeDock = new ScrollMagic.Scene({
            triggerElement: '#slide-three-container',
            triggerHook: 1
        })
        // .addIndicators({ name: 'Slide Show Section 3', colorTrigger: 'black' })
            .addTo(controller);

        var ourSlideThree = new ScrollMagic.Scene({
            triggerElement: '#slide-three',
            triggerHook: 0.0015,
            duration: '100%'
        })
            .setPin('#slide-three', {pushFollowers: true})
            .setClassToggle('#slide-three-container', 'in-view')
            // .addIndicators({ name: 'Slide Three', colorTrigger: 'black' })
            .addTo(controller);

        var ourSlideFourDock = new ScrollMagic.Scene({
            triggerElement: '#slide-four-container',
            triggerHook: 1
        })
        // .addIndicators({ name: 'Slide Show Section 4', colorTrigger: 'black' })
            .addTo(controller);

        var ourSlideFour = new ScrollMagic.Scene({
            triggerElement: '#slide-four',
            triggerHook: 0.0015,
            duration: '100%'
        })
            .setPin('#slide-four', {pushFollowers: true})
            .setClassToggle('#slide-four-container', 'in-view')
            // .addIndicators({ name: 'Slide Four', colorTrigger: 'black' })
            .addTo(controller);


        $('.mobile-slides-container').slick({
            fade: true,
            infinite: true,
            appendArrows: '.mobile-slider-nav',
            prevArrow: '.mobile-slider-prev',
            nextArrow: '.mobile-slider-next',
        });

        var slideOneHeadingAnimation = new TimelineMax,
            slideOneSwapWordAnimation = new TimelineMax,
            slideTwoSwapWordAnimation = new TimelineMax,
            slideThreeSwapWordAnimation = new TimelineMax,
            slideFourSwapWordAnimation = new TimelineMax,
            slideOneHeadingSwapWord = new SplitText("#mobile-slider .mobile-slide.one .content-block h2 .swap", {type: "words,chars"}),
            slideOneHeadingSwapWordChars = slideOneHeadingSwapWord.chars,
            slideTwoHeadingSwapWord = new SplitText("#mobile-slider .mobile-slide.two .content-block h2 .swap", {type: "words,chars"}),
            slideTwoHeadingSwapWordChars = slideTwoHeadingSwapWord.chars,
            slideThreeHeadingSwapWord = new SplitText("#mobile-slider .mobile-slide.three .content-block h2 .swap", {type: "words,chars"}),
            slideThreeHeadingSwapWordChars = slideThreeHeadingSwapWord.chars,
            slideFourHeadingSwapWord = new SplitText("#mobile-slider .mobile-slide.four .content-block h2 .swap", {type: "words,chars"}),
            slideFourHeadingSwapWordChars = slideFourHeadingSwapWord.chars,
            slideOneHeadingPart1 = new SplitText("#mobile-slider .content-block h2 span", {type: "words,chars"}),
            slideOneHeadingPart1Chars = slideOneHeadingPart1.chars,
            slideOneHeadingPart2 = new SplitText("#mobile-slider .content-block h2 .end-phrase", {type: "words,chars"}),
            slideOneHeadingPart2Chars = slideOneHeadingPart2.chars,
            slideOnePara = new SplitText("#mobile-slider > .content-block p.cta", {type: "words,chars"}),
            slideOneParaChars = slideOnePara.chars,
            speechBubbleMessage = new SplitText("#message", {type: "words,chars"}),
            speechBubbleMessageChars = speechBubbleMessage.chars;

        slideOneHeadingAnimation
            .staggerTo(slideOneHeadingPart1Chars, 0.8, {'visibility': 'visible', ease: Back.easeOut}, 0.1, "+=0")
            .staggerTo(slideOneHeadingPart2Chars, 0.8, {'visibility': 'visible', ease: Back.easeOut}, 0.1, "-=0.5")
            .staggerTo(slideOneParaChars, 0.8, {'visibility': 'visible', ease: Back.easeOut}, 0.1, "-=0.5")
            .to($('.speech-bubble'), 0.5, {alpha: 1, ease: Back.easeOut}, "-=0.5")
            .to($('.loader'), 0.1, {'display': 'none', ease: Back.easeOut}, "+=3")
            .staggerFrom(speechBubbleMessageChars, 0.8, {'display': 'none', ease: Back.easeOut}, 0.05, "+=0.1").stop();

        slideOneSwapWordAnimation
            .staggerTo(slideOneHeadingSwapWordChars, 0.8, {
                'visibility': 'visible',
                ease: Back.easeOut
            }, 0.1, "-=0.5").stop();

        slideTwoSwapWordAnimation
            .staggerTo(slideTwoHeadingSwapWordChars, 0.8, {
                'visibility': 'visible',
                ease: Back.easeOut
            }, 0.1, "-=0.5").stop();

        slideThreeSwapWordAnimation
            .staggerTo(slideThreeHeadingSwapWordChars, 0.8, {
                'visibility': 'visible',
                ease: Back.easeOut
            }, 0.1, "-=0.5").stop();

        slideFourSwapWordAnimation
            .staggerTo(slideFourHeadingSwapWordChars, 0.8, {
                'visibility': 'visible',
                ease: Back.easeOut
            }, 0.1, "-=0.5").stop();


        $('.mobile-slides-container').on('afterChange', function (event, slick, currentSlide, nextSlide) {
            console.log(currentSlide);

            if (currentSlide == 0) {
                slideFourSwapWordAnimation.reverse(0);
                slideOneSwapWordAnimation.play();
            } else if (currentSlide == 1) {
                slideOneSwapWordAnimation.reverse(0);
                slideTwoSwapWordAnimation.play();
            } else if (currentSlide == 2) {
                slideTwoSwapWordAnimation.reverse(0);
                slideThreeSwapWordAnimation.play();
            } else if (currentSlide == 3) {
                slideThreeSwapWordAnimation.reverse(0);
                slideFourSwapWordAnimation.play();
            }
        });

        if ($('.mobile-slides-container').slick('slickCurrentSlide') == 0) {
            slideOneHeadingAnimation.restart();
            slideOneSwapWordAnimation.delay(1.4);
            slideOneSwapWordAnimation.play();
        }
    }

if($('.post-visible-gallery .gallery').length){
    $('[data-fancybox]').attr('data-fancybox', 'gallery_fancybox');
}

    //subscription code

    $('.es_textbox input[type=email]').attr('required',false);

    $('.es_button input[type=submit]').on('click',function(){
        if($('.es_textbox input[type=email]').val() != ''){
            $('.submit-msg').hide();
        }
        else{
            $('.submit-msg').show();
            $('.es_msg').hide();
            $('.msg').html('Email Address is Required').css({"color":"#e71e37"});
        }
    });

    $('.es_lablebox label.es_shortcode_form_email').html('Email Address');
    $('.es_textbox input[type=email]').attr('placeholder','example@domain.com');



});
function mobileNavToggle(){
    if($('.mobile-nav').hasClass('down')){
        $('.mobile-nav').animate({
            bottom: 0
        },500);

        $('.mobile-nav').removeClass('down');
    } else {
        $('.mobile-nav').animate({
            bottom: '-358px'
        },500);

        $('.mobile-nav').addClass('down');
    }
}

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function ValidateNumber() {
    var telInput = $("#Telephone");
    var countryData = telInput.intlTelInput("getSelectedCountryData");
    var Country_code = countryData.dialCode;
    var Country_Name = countryData.name;
    $("#INmsg").hide();
    $("#EmptyMsg").hide();
    $("#SuccessMsg").hide();
    $("#ErrorMsg").hide();
    if ($.trim(telInput.val())) {
        if (telInput.intlTelInput("isValidNumber")) {
            $("#btn_DNC").css({
                'pointer-events': 'none',
                'cursor': 'default'
            });
            $("#btn_DNC").html('Submitting...');
            $("#INmsg").hide();
            $("#EmptyMsg").hide();
            dnc(Country_code, telInput.intlTelInput("getNumber", intlTelInputUtils.numberFormat.NATIONAL),Country_Name);
        } else {
            $("#INmsg").show();
            $("#btn_DNC").removeAttr('style');
            $("#btn_DNC").html('Submit');
        }
    }
    else {
        $("#INmsg").hide();
        $("#EmptyMsg").show();
        $("#btn_DNC").prop('disabled', false);
    }
}

function dnc(countrycode, telephoneNum,countryname) {
    var message = "";
    telephoneNum = telephoneNum.replace(/[()]/g,'').replace(' ','');
    telephoneNum = telephoneNum.replace('-','');
    $.ajax({
        type: "POST",
        dataType : 'text',
        url: myAjaxObject.ajax_url,
        data:{countrycode : countrycode, telephone: telephoneNum, countryname: countryname, action: 'dnc_submission'},
        success: function (msg) {
            try{
                msg = JSON.parse(msg);
                msg = msg.trim();
                if (msg == "true") {
                    succeeded();
                }
                else {
                    $("#ErrorMsg").show();
                    // $("#Loader").hide();
                    $("#btn_DNC").prop('disabled', false);
                }
            } catch(err){
                console.log(err);
                succeeded();
            }
            $("#Telephone").val("");
        },
        error: function (msg) {
            $("#ErrorMsg").show();
            $("#btn_DNC").prop('disabled', false);
        }
    });
}

function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}

function succeeded(){
    $("#disclaimerfield").hide();

    $("#inputfields").hide();

    $("#inputfields1").hide();

    $("#SuccessMsg").show();

    // $("#Loader").hide();

    $("#btn_DNC").hide();
    $("#contactform").hide();
}


function show_leader_details(obj){
    var post_id = $(obj).closest('.thumb').data('post_id'),
        post_order = $(obj).closest('.thumb').data('order'),
        leader_popup = $('.leader-popup'),
        slider = $('.slider-leadership');
    leader_popup.addClass('active');
    slider.slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: post_order
    });
}
function close_popup(){
    $('.leader-popup').removeClass('active');
    $('.slider-leadership').slick('destroy');
}
function search_job_trigger(){
    var txt_jobs_search = $('#txt_jobs_search').val(),
        txt_jobs_locations = $('#txt_jobs_locations').val(),
        entity = $('[name=entity]').val(),
        txt_jobs_departments = $('#txt_jobs_departments').val();
    var txt_excluded_job = '';
    if($('[name=txt_excluded_job]').length){
        txt_excluded_job = $('#txt_excluded_job').val();
    }
    $.ajax({
        async: true,
        type: 'POST',
        global: false,
        dataType: 'html',
        url: myAjaxObject.ajax_url,
        data: 'action=list_down_jobs&txt_jobs_search=' + txt_jobs_search + '&txt_jobs_locations=' + txt_jobs_locations + '&txt_jobs_departments=' + txt_jobs_departments + '&txt_excluded_job=' + txt_excluded_job + '&entity=' + entity,
        success: function (res) {
            if($('.jobs-listing--populate-here').length){
                if(res != ''){
                    $('.jobs-listing--populate-here').html(res);
                } else{
                    $('.jobs-listing--populate-here').html('<h3 class="title">We do not have any job opening available for the keywords that you entered.</h3>');
                }
            }
        }
    });
}
function triggerCallback(e, callback) {
    if(!callback || typeof callback !== 'function') {
        return;
    }
    var files;
    if(e.dataTransfer) {
        files = e.dataTransfer.files;
    } else if(e.target) {
        files = e.target.files;
    }
    callback.call(null, files);
}
function makeDroppable(ele, callback, ele_to_delete) {
    var input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('multiple', false);
    input.style.display = 'none';
    input.addEventListener('change', function(e) {
        triggerCallback(e, callback);
    });

    ele.appendChild(input);

    ele.addEventListener('dragover', function(e) {
        e.preventDefault();
        e.stopPropagation();
        ele.classList.add('dragover');
    });

    ele.addEventListener('dragleave', function(e) {
        e.preventDefault();
        e.stopPropagation();
        ele.classList.remove('dragover');
    });

    ele.addEventListener('drop', function(e) {
        e.preventDefault();
        e.stopPropagation();
        ele.classList.remove('dragover');
        triggerCallback(e, callback);
    });

    ele.addEventListener('click', function() {
        input.value = null;
        input.click();
    });
}

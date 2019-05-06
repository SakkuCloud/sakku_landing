$(document).ready(function () {
    ScrollReveal({ mobile: false });
    ScrollReveal().reveal('.intro h2', { delay: 200, distance: '80px', origin: 'bottom', easing: 'ease-in-out' });
    ScrollReveal().reveal('.intro p', { delay: 300, distance: '80px', origin: 'bottom', easing: 'ease-in-out' });
    ScrollReveal().reveal('.feature', { delay: 400, distance: '80px', origin: 'bottom', easing: 'ease-in-out' });
    ScrollReveal().reveal('.feature header', { delay: 500, distance: '80px', origin: 'bottom', easing: 'ease-in-out' });
    ScrollReveal().reveal('.feature_details header h3', { delay: 200, distance: '80px', origin: 'right', easing: 'ease-in-out' });
    ScrollReveal().reveal('.feature_details header p', { delay: 400, distance: '80px', origin: 'right', easing: 'ease-in-out' });
    ScrollReveal().reveal('.feature_details header img', { delay: 400, distance: '80px', origin: 'top', easing: 'ease-in-out' });

    for (var i = 1; i <= 6; i++) {
        ScrollReveal().reveal('.feature_details li:nth-child(' + i + ')', { delay: i * 150, distance: '80px', origin: 'bottom', easing: 'ease-in-out' });
        ScrollReveal().reveal('.feature_details li:nth-child(' + i + ') h3', { delay: 300, distance: '80px', origin: 'bottom', easing: 'ease-in-out' });
        ScrollReveal().reveal('.feature_details li:nth-child(' + i + ') p', { delay: 350, distance: '80px', origin: 'bottom', easing: 'ease-in-out' });
    }
    ScrollReveal().reveal('.section2 .img', { delay: 200, distance: '80px', origin: 'bottom', easing: 'ease-in-out' });
    ScrollReveal().reveal('.section2 .img img', { delay: 600, distance: '80px', origin: 'bottom', easing: 'ease-in-out' });
    ScrollReveal().reveal('.section2 .content', { delay: 1000, distance: '80px', origin: 'right', easing: 'ease-in-out' });


    ScrollReveal().reveal('.section3 .img', { delay: 200, distance: '80px', origin: 'bottom', easing: 'ease-in-out' });
    ScrollReveal().reveal('.section3 .img img', { delay: 600, distance: '80px', origin: 'bottom', easing: 'ease-in-out' });
    ScrollReveal().reveal('.section3 .content', { delay: 1000, distance: '80px', origin: 'right', easing: 'ease-in-out' });


    ScrollReveal().reveal('.section4 .img', { delay: 200, distance: '80px', origin: 'bottom', easing: 'ease-in-out' });
    ScrollReveal().reveal('.section4 .img img', { delay: 600, distance: '80px', origin: 'bottom', easing: 'ease-in-out' });
    ScrollReveal().reveal('.section4 .content', { delay: 1000, distance: '80px', origin: 'right', easing: 'ease-in-out' });


    ScrollReveal().reveal('.section5 h3', { delay: 200, distance: '80px', origin: 'bottom', easing: 'ease-in-out' });
    ScrollReveal().reveal('.section5 p', { delay: 300, distance: '80px', origin: 'bottom', easing: 'ease-in-out' });
    ScrollReveal().reveal('.section5 img', { delay: 600, distance: '80px', origin: 'bottom', easing: 'ease-in-out' });

    
    $('.get_link').on('click', function (e) {
        var url1 = 'https://api.sakku.cloud/landing/earlyaccess';
        var email1 = $("#earlyaccesss_email").val();
        
         if (( email1) !== '') {
            e.preventDefault();
            $.ajax({
                url: url1,
                dataType: 'json',
                type: 'post',
                contentType: 'application/json',
                data: JSON.stringify({
                    "email": email1
                }),
                processData: false,
                beforeSend: function () {
    
                    $('.get_link').html('درحال ارسال ....'); // change submit button text
                    $('.get_link').prop("disabled", true);
    
    
    
                },
                success: function (data, textStatus, jQxhr) {
                    // $('.earlyaccess-form ').find(".alert-msg").hide('slow')
                    // $('.get_link').hide();
                    // $('.earlyaccess-form ').find(".alert-msg").show('slow')
                    $(".alert-msg").replaceWith("<div class='alert-msg succes_error'>اطلاعات شما ارسال شد.</div>");
                    // setTimeout(function () {
                    //     $('.popup').hide();
                    // }, 3000);
                    $('.get_link').prop("disabled", false);
                    $('.get_link').html('ارسال اطلاعات');
                    $("input, textaream,select").val("");
    
                },
                error: function (e) {
                    $(".alert-msg").replaceWith("<div class='alert-msg danger_error'>" + e.responseJSON.message + "</div>");
                    $('.get_link').prop("disabled", false);
                    $('.get_link').html('ارسال اطلاعات');
                }
            });
        }
        else {
            $(".alert-msg").replaceWith("<div class='alert-msg danger_error'>تمامی فیلد ها را پر کنید.</div>");
        }
    });

    $("a[href^='#']").click(function (e) {
        
        e.preventDefault();
    
        var position = $($(this).attr("href")).offset().top;
    
        $("body, html").animate({
            scrollTop: position
        }, 500);
    });
    

});
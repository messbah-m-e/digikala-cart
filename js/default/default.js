$(document).ready(function(){


	// click menu increase height
	$("#menu").click(function(){
		$("#menu").toggleClass("show");
		$("#header-content #menu ul.nav li").toggleClass("shows");
	})

	// show info on menubar
	$(".show_menu").click(function(e){
		e.stopPropagation();
		$("#header-content #login-info").toggleClass("active");
	})
	// $("#header-content #login-info").mouseout(function(){
	// 	$("#header-content #login-info").removeClass("active");
	// })
	
	window.onscroll = function() { sticks() };

	// alert("connect problem");
	
    var username = $("#name");
	var passwords = $("#pass");
    var codesecurity = $("#captcha-2");
	// var pass2 = $("#pass_2");
	// $(pass2).focusout(function(){
	// 	if(passwords !== pass2)
	// 	{
	// 		check_empty(username, "نام کاربری را وارد کنید");
	// 	}
	// })
  
    $(username).focusout(function(){
        check_empty(username, "نام کاربری را وارد کنید");
    })
    $(passwords).focusout(function(){
         check_empty(passwords, "کلمه عبور را وارد کنید");
    })
    $(codesecurity).focusout(function(){
        check_empty(codesecurity, "کد امنیتی را وارد کنید");
    })
    $(".btn").click(function(){
        check_empty(username, "نام کاربری را وارد کنید");
        check_empty(passwords, "کلمه عبور را وارد کنید");
        check_empty(codesecurity, "کد امنیتی را وارد کنید");
     });

	//  profile
	// choose dashbored
	$("#wrraper .panels .panel_right .pages ul li#dash").click(function(){
		 $("#wrraper .panels .panel_left .password_change").removeClass("active");
		 $("#wrraper .panels .panel_right").addClass("not_shows");
		 $("body").toggleClass("over");
		 $("#wrraper .panels .position_fix").removeClass("not_shows");
		 $("#wrraper .panels .panel_left .dashbored").addClass("active");
		 top_choose();
		});
	// choose change password
	$("#wrraper .panels .panel_right .pages ul li#password").click(function(){
		$("#wrraper .panels .panel_left .dashbored").removeClass("active");
		$("#wrraper .panels .panel_right").addClass("not_shows");
		$("body").toggleClass("over");
		$("#wrraper .panels .position_fix").removeClass("not_shows");
		$("#wrraper .panels .panel_left .password_change").addClass("active");
		top_choose();
   });

//    mibile btn
   $("#profile_btn").click(function(){
	   $("body").toggleClass("over");
	   $("#wrraper .panels .panel_right").toggleClass("not_shows");
	   $("#wrraper .panels .position_fix").toggleClass("not_shows");
   })



	//  do not remember :|
	 $(".log-open").click(function(){
		 console.log("hi");
		 $("#login-info").show();
	 })

	 //potential
	 $("#next_1").click(function(){
		 $(".result").removeClass("act");
		 $(".img_1").removeClass("active");
		 $(".img_2").addClass("active");
		 $(".medical").addClass("act");
	})
	$("#next_2").click(function(){
		$(".medical").removeClass("act");
		$(".img_2").removeClass("active");
		$(".img_3").addClass("active");
		$(".body").addClass("act");
	})
	$("#next_3").click(function(){
		$(".body").removeClass("act");
		$(".img_3").removeClass("active");
		$(".img_4").addClass("active");
		$(".physical").addClass("act");
	})
	$("#next_4").click(function(){
		$(".physical").removeClass("act");
		$(".img_4").removeClass("active");
		$(".img_5").addClass("active");
		 $(".mental").addClass("act");
	 })


	// register trainer
	$("#next_1").click(function(){
		$("#wrraper .login .pages .general_information").removeClass("active");
		$("#wrraper .login .pages .personal_information").addClass("active");
	})
	$("#before_1").click(function(){
		$("#wrraper .login .pages .personal_information").removeClass("active");
		$("#wrraper .login .pages .general_information").addClass("active");
	})
	
	$("#next_2").click(function(){
		$("#wrraper .login .pages .personal_information").removeClass("active");
		$("#wrraper .login .pages .get_document").addClass("active");
	})
	$(".before_2").click(function(){
		$("#wrraper .login .pages .get_document").removeClass("active");
		$("#wrraper .login .pages .personal_information").addClass("active");
	})
	$(".show_first").click(function(){
		$(".part_1").removeClass("hide");
		$(".show_first").addClass("none");
		$(".show_second").removeClass("none");
	})
	$(".show_second").click(function(){
		$(".part_2").removeClass("hide");
		$(".show_second").addClass("none");
	})

	// form rememmber
	$(".show_next").click(function(){
		$(".first_page").removeClass("page_show");
		$(".second_page").addClass("page_show");
	})

	// fields
	$("#search").click(function(){
		$("#wrraper .search_box .search_result").toggleClass("active");
	})
	$(".search_result").mouseleave(function(){
		$(".search_result").removeClass("active");
	})
	

	// functions
	// stick navbar
	function sticks() {
		var scroll =window.pageYOffset | document.body.scrollTop;
		if( scroll>80)
			{
				$("#menu").addClass("sticky");
				$("#wrraper").addClass("pad");
				$("#menu .part img").addClass("show");
				$("#header-content #menu ul.log li").addClass("show");
			}
		else
			{
				$("#menu").removeClass("sticky");
				$("#wrraper").removeClass("pad");
				$("#menu .part img").removeClass("show");
				$("#header-content #menu ul.log li").removeClass("show");
			}
	}

	// check empty for log
	function check_empty(parametr, msg){
		var err = $(parametr).closest(".input").find(".error");
		if(!parametr.val())
		{
			$(parametr).closest(".input").addClass("err");
			err.find('span').addClass("err");
			err.find('span').text(msg);
		}
		else
		{
			$(".input").removeClass("err");
			err.find('span').removeClass("err");
		}
	}

	// scroll on width in profile
	function top_choose(){
		if (window.matchMedia('screen and (max-width: 400px)').matches) {
			document.documentElement.scrollTop = 90;
		}
		else if (window.matchMedia('screen and (min-width: 400px) and (max-width: 767px)')){
			document.documentElement.scrollTop = 80;
		}
	}
	



});

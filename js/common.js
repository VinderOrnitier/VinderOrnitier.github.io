$(document).ready(function() {


	$("#portfolio_grid").mixItUp();

	$(".s_portfolio li").click(function() {
		$(".s_portfolio li").removeClass("active");
		$(this).addClass("active");
	});

	$(".popup").magnificPopup({type:"image"});
	$(".popup_content").magnificPopup({type: "inline"});

	$(".top_name h1").animated("fadeInDown", "fadeInDown");
	$(".top_name p, .section_header").animated("fadeInUp", "fadeInUp");

	$(".animation_center").animated("flipInY", "flipInY");
	$(".animation_left").animated("fadeInLeft", "fadeInLeft");
	$(".animation_right").animated("fadeInRight", "fadeInRight");

	$(".left .resume_item").animated("fadeInLeft", "fadeInLeft");
	$(".right .resume_item").animated("fadeInRight", "fadeInRight");

	function heightDetect() {
		$(".main_head").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function(){
		heightDetect ();
	});

	$(".toggle_mnu").click(function() {
		$(".sandwich").toggleClass("active");
	});
	
	$(".top_mnu ul a").click(function() {
		$(".top_mnu").fadeOut(600);
		$(".sandwich").toggleClass("active");
		$(".top_name").css("opacity", "1");
	});

	$(".toggle_mnu").click(function() {
		if ($(".top_mnu").is(":visible")) {
			$(".top_name").css("opacity", "1");
			$(".top_mnu").fadeOut(600);
			$(".top_mnu li a").addClass("slideInDown animated");
		} else {
			$(".top_name").css("opacity", ".1");
			$(".top_mnu").fadeIn(600);
			$(".top_mnu li a").addClass("slideInDown animated");
		};
	});

	$(".portfolio_item").each(function(i) {
		$(this).find(".link a").attr("href", "#work_" + i);
		$(this).find(".port_decr").attr("id", "work_" + i);
	});

	$("input, select, textarea").not("[type=submit]").jqBootstrapValidation();

	$(".top_mnu ul a").mPageScroll2id();

});
$(window).load(function() { 
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});
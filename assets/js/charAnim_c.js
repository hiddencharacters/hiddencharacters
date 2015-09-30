$(document).ready(function(){

	hideALL();

	var value_d = parseInt($('#s_d').css("margin-top"));
	var value_d2 = parseInt($('#s_d2').css("margin-top"));
	var value_c = parseInt($('#s_c').css("margin-top"));
	var value_a = parseInt($('#s_a').css("margin-top"));
	var value_h = parseInt($('#s_h').css("margin-top"));
	var value_s = parseInt($('#s_s').css("margin-top"));

	$(function () {
		$(window).scroll(function () {
			
			if ($(this).scrollTop() > value_d2 - 70) {
				showHide('#d2',1);
			} else {
				showHide('#d2',0);
			}
			
			if ($(this).scrollTop() > value_d - 70) {
				showHide('#d',1);
			} else {
				showHide('#d',0);
			}
			
			if ($(this).scrollTop() > value_c - 80) {
				showHide('#c',1);
			} else {
				showHide('#c',0);
			}
			
			if ($(this).scrollTop() > value_a - 80) {
				showHide('#a',1);
			} else {
				showHide('#a',0);
			}
			
			if ($(this).scrollTop() > value_s - 80) {
				showHide('#s',1);
			} else {
				showHide('#s',0);
			}
			
			if ($(this).scrollTop() > value_h - 80) {
				showHide('#h',1);
			} else {
				showHide('#h',0);
			}
		});
	});
	
	function hideALL() {
		$("#c").css({ opacity: 0 });
		$("#h").css({ opacity: 0 });
		$("#a").css({ opacity: 0 });
		$("#s").css({ opacity: 0 });
		$("#d").css({ opacity: 0 });
		$("#d2").css({ opacity: 0 });
	}

	function showHide(myId, param) {
		$(myId).css({ opacity: param });
	}
});
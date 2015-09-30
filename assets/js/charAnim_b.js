$(document).ready(function(){

	hideALL();

	var value_d = parseInt($('#s_d').css("margin-top"));
	var value_n = parseInt($('#s_n').css("margin-top"));
	var value_i = parseInt($('#s_i').css("margin-top"));
	var value_a = parseInt($('#s_a').css("margin-top"));
	var value_t = parseInt($('#s_t').css("margin-top"));
	var value_r = parseInt($('#s_r').css("margin-top"));

	$(function () {
		$(window).scroll(function () {
			
			if ($(this).scrollTop() > value_i - 70) {
				showHide('#i',1);
			} else {
				showHide('#i',0);
			}
			
			if ($(this).scrollTop() > value_d - 70) {
				showHide('#d',1);
			} else {
				showHide('#d',0);
			}
			
			if ($(this).scrollTop() > value_n - 70) {
				showHide('#n',1);
			} else {
				showHide('#n',0);
			}
			
			if ($(this).scrollTop() > value_a - 80) {
				showHide('#a',1);
			} else {
				showHide('#a',0);
			}
			
			if ($(this).scrollTop() > value_r - 80) {
				showHide('#r',1);
			} else {
				showHide('#r',0);
			}
			
			if ($(this).scrollTop() > value_t - 80) {
				showHide('#t',1);
			} else {
				showHide('#t',0);
			}
		});
	});
	
	function hideALL() {
		$("#i").css({ opacity: 0 });
		$("#d").css({ opacity: 0 });
		$("#n").css({ opacity: 0 });
		$("#a").css({ opacity: 0 });
		$("#t").css({ opacity: 0 });
		$("#r").css({ opacity: 0 });
	}

	function showHide(myId, param) {
		$(myId).css({ opacity: param });
	}
});
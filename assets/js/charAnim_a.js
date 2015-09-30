$(document).ready(function(){

	hideALL();

	var value_d = parseInt($('#s_d').css("margin-top"));
	var value_h = parseInt($('#s_h').css("margin-top"));
	var value_h2 = parseInt($('#s_h2').css("margin-top"));
	var value_a = parseInt($('#s_a').css("margin-top"));
	var value_e = parseInt($('#s_e').css("margin-top"));
	var value_r = parseInt($('#s_r').css("margin-top"));
	
        $(window).scroll(function () {

                if ($(this).scrollTop() > value_h2 - 80) {
                        showHide('#h2',1);
                } else {
                        showHide('#h2',0);
                }

                if ($(this).scrollTop() > value_d - 70) {
                        showHide('#d',1);
                } else {
                        showHide('#d',0);
                }

                if ($(this).scrollTop() > value_h - 70) {
                        showHide('#h',1);
                } else {
                        showHide('#h',0);
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

                if ($(this).scrollTop() > value_e - 80) {
                        showHide('#e',1);
                } else {
                        showHide('#e',0);
                }
        });
        
	
	
	function hideALL() {
		$("#h").css({ opacity: 0 });
		$("#d").css({ opacity: 0 });
		$("#h2").css({ opacity:0 });
		$("#a").css({ opacity: 0 });
		$("#e").css({ opacity: 0 });
		$("#r").css({ opacity: 0 });
	}

	function showHide(myId, param) {
		$(myId).css({ opacity: param });
	}
});
$(function(){
	$('#nav-indexs').addClass('actives');
	$('#navbar ul li').mouseover(function(){
		$(this).addClass('actives');
	});
	$('#navbar ul li').mouseout(function(){
		$('#nav-indexs').addClass('actives');
		$(this).removeClass('actives');
	});
	$('.dropdown-menu li').mouseover(function(){
         $(this).addClass('font');
	});
	$('.dropdown-menu li').mouseout(function(){
         $(this).removeClass('font');
	});
	$('#tri-login').addClass('actives');
	$('#tab-sl li').mouseover(function(){
		$(this).addClass('actives');
	});
	$('#tab-sl li').mouseout(function(){
		$('#tri-login').addClass('actives');
		$(this).removeClass('actives');
	});
});
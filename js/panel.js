
$(document).ready(function(){

	
	//Start Control Panel Script
	$('body').append('<div class="panel opacity show"><a href="javascript:void(0)" class="settings"></a><span class="panel_title">Settings panel</span></div>');
	panel = $('body').find('.panel');
	
	panel.append('<div class="panel_item color_panel"><ul class="color_list"><li class="color_item"></li><li class="color_item"><a class="color2" rel="color-orange" href="javascript:void(0)"></a></li><li class="color_item"><a class="color3" rel="color-red" href="javascript:void(0)"></a></li><li class="color_item"><a class="color4" rel="color-pink" href="javascript:void(0)"></a></li><li class="color_item"><a class="color5" rel="color-violet" href="javascript:void(0)"></a></li><li class="color_item"><a class="color6" rel="color-ceruleum" href="javascript:void(0)"></a></li><li class="color_item"><a class="color7" rel="color-blue" href="javascript:void(0)"></a></li><li class="color_item"><a class="color8" rel="color-green" href="javascript:void(0)"></a></li><li class="color_item"><a class="color9" rel="color-yellowgreen" href="javascript:void(0)"></a></li><li class="color_item"><a class="color10" rel="color-grey" href="javascript:void(0)"></a></li></ul><div class="clear"></div><div/>');
	
	$('.settings').bind('click', function(){
		panel.toggleClass('show');
		var stylesheetFile = 'css/theme1.less';
					var link  = document.createElement('link');
					link.rel  = "stylesheet";
					link.type = "text/less";
					link.href = stylesheetFile;
					less.sheets.push(link);
					less.refresh();
	});
});

$(window).load(function(){
	setTimeout("$('body').find('.panel').removeClass('opacity')",800);
	
});
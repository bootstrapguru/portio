
$(document).ready(function(){
	//Start Control Panel Script
	$('body').append('<div class="panel opacity show"><a href="javascript:void(0)" class="settings"></a><span class="panel_title">Settings panel</span></div>');
	panel = $('body').find('.panel');
	
	panel.append('<div class="panel_item color_panel"><ul class="color_list"><li class="color_item"></li><li class="color_item"><a class="theme1" rel="theme1" href="javascript:void(0)"></a></li><li class="color_item"><a class="theme2" rel="theme2" href="javascript:void(0)"></a></li><li class="color_item"><a class="theme3" rel="theme3" href="javascript:void(0)"></a></li><li class="color_item"><a class="theme4" rel="theme4" href="javascript:void(0)"></a></li><li class="color_item"><a class="theme5" rel="theme5" href="javascript:void(0)"></a></li><li class="color_item"><a class="theme6" rel="theme6" href="javascript:void(0)"></a></li><li class="color_item"><a class="theme7" rel="theme7" href="javascript:void(0)"></a></li><li class="color_item"><a class="theme8" rel="theme8" href="javascript:void(0)"></a></li><li class="color_item"><a class="theme9" rel="theme9" href="javascript:void(0)"></a></li><li class="color_item"><a class="theme10" rel="theme10" href="javascript:void(0)"></a></li><li class="color_item"><a class="theme11" rel="theme11" href="javascript:void(0)"></a></li><li class="color_item"><a class="theme12" rel="theme12" href="javascript:void(0)"></a></li><li class="color_item"><a class="theme13" rel="theme13" href="javascript:void(0)"></a></li><li class="color_item"><a class="theme14" rel="theme14" href="javascript:void(0)"></a></li><li class="color_item"><a class="theme15" rel="theme15" href="javascript:void(0)"></a></li><li class="color_item"><a class="theme16" rel="theme16" href="javascript:void(0)"></a></li><li class="color_item"><a class="theme17" rel="theme17" href="javascript:void(0)"></a></li><li class="color_item"><a class="theme18" rel="theme18" href="javascript:void(0)"></a></li><li class="color_item"><a class="theme19" rel="theme19" href="javascript:void(0)"></a></li><li class="color_item"><a class="v20" rel="theme20" href="javascript:void(0)"></a></li><li class="color_item"><a class="theme21" rel="theme21" href="javascript:void(0)"></a></li></ul><div class="clear"></div><div/>');
	
		$('.color_item a').bind('click', function(){
		theme = $(this).attr('rel');
			var stylesheetFile = 'css/less/'+ theme +'.less';
					var link  = document.createElement('link');
					link.rel  = "stylesheet";
					link.type = "text/less";
					link.href = stylesheetFile;
					less.sheets.push(link);
					less.refresh();
	});
	
	$('.settings').bind('click', function(){
		panel.toggleClass('show');
	
	});
});

$(window).load(function(){
	setTimeout("$('body').find('.panel').removeClass('opacity')",800);
	
});
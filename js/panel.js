/*This is only for demo purpose. */
$(document).ready(function(){
	//Start Control Panel Script
	$('body').append('<div class="panel opacity show"><a href="javascript:void(0)" class="settings"></a><span class="panel_title">Theme Switcher</span></div>');
	panel = $('body').find('.panel');
	
	panel.append('<div class="panel_item color_panel"><ul class="color_list"><li class="color_item"><a class="theme1" rel="theme1" href="javascript:void(0)"></a></li><li class="color_item"><a class="theme2" rel="theme2" href="javascript:void(0)"></a></li><li class="color_item"><a class="theme3" rel="theme3" href="javascript:void(0)"></a></li><li class="color_item"><a class="theme4" rel="theme4" href="javascript:void(0)"></a></li><li class="color_item"><a class="theme5" rel="theme5" href="javascript:void(0)"></a></li><li class="color_item"><a class="theme6" rel="theme6" href="javascript:void(0)"></a></li><li class="color_item"><a class="theme7" rel="theme7" href="javascript:void(0)"></a></li><li class="color_item"><a class="theme8" rel="theme8" href="javascript:void(0)"></a></li><li class="color_item"><a class="theme9" rel="theme9" href="javascript:void(0)"></a></li><li class="color_item"><a class="theme10" rel="theme10" href="javascript:void(0)"></a></li><li class="color_item"><a class="theme11" rel="theme11" href="javascript:void(0)"></a></li></ul>  <div class="clear"></div> and more custom themes 5sec to edit.. <div/>');
	
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
	setTimeout("$('body').find('.panel').removeClass('show')",1600);
	
});
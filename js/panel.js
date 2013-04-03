/*This is only for demo purpose. */

/*!
 * jQuery Cookie Plugin
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
(function($) {
    $.cookie = function(key, value, options) {

        // key and at least value given, set cookie...
        if (arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(value)) || value === null || value === undefined)) {
            options = $.extend({}, options);

            if (value === null || value === undefined) {
                options.expires = -1;
            }

            if (typeof options.expires === 'number') {
                var days = options.expires, t = options.expires = new Date();
                t.setDate(t.getDate() + days);
            }

            value = String(value);

            return (document.cookie = [
                encodeURIComponent(key), '=', options.raw ? value : encodeURIComponent(value),
                options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
                options.path    ? '; path=' + options.path : '',
                options.domain  ? '; domain=' + options.domain : '',
                options.secure  ? '; secure' : ''
            ].join(''));
        }

        // key and possibly options given, get cookie...
        options = value || {};
        var decode = options.raw ? function(s) { return s; } : decodeURIComponent;

        var pairs = document.cookie.split('; ');
        for (var i = 0, pair; pair = pairs[i] && pairs[i].split('='); i++) {
            if (decode(pair[0]) === key) return decode(pair[1] || ''); // IE saves cookies with empty string as "c; ", e.g. without "=" as opposed to EOMB, thus pair[1] may be undefined
        }
        return null;
    };
})(jQuery);

$(document).ready(function(){

	if($.cookie("theme")) {
		theme = $.cookie("theme");
	}
	else {
		theme = 'main';
	}	

	

	$('body').append('<div class="panel opacity show"><a href="javascript:void(0)" class="settings"></a><span class="panel_title">Theme Switcher</span></div>');
	panel = $('body').find('.panel');
	
	panel.append('<div class="panel_item color_panel"><ul class="color_list"><li class="color_item"><a class="theme1" rel="theme1" href="javascript:void(0)">1</a></li><li class="color_item"><a class="theme2" rel="theme2" href="javascript:void(0)">2</a></li><li class="color_item"><a class="theme3" rel="theme3" href="javascript:void(0)">3</a></li><li class="color_item"><a class="theme4" rel="theme4" href="javascript:void(0)">4</a></li><li class="color_item"><a class="theme5" rel="theme5" href="javascript:void(0)">5</a></li><li class="color_item"><a class="theme6" rel="theme6" href="javascript:void(0)">6</a></li><li class="color_item"><a class="theme7" rel="theme7" href="javascript:void(0)">7</a></li><li class="color_item"><a class="theme8" rel="theme8" href="javascript:void(0)">8</a></li><li class="color_item"><a class="theme9" rel="theme9" href="javascript:void(0)">9</a></li><li class="color_item"><a class="theme10" rel="theme10" href="javascript:void(0)">10</a></li><li class="color_item"><a class="theme11" rel="theme11" href="javascript:void(0)">11</a></li><li></li><li class="color_item"><a class="headerbg" rel="headerbg" href="javascript:void(0)">Enable header background</a></li></ul> <div class="theme_info"> and more custom themes 5sec to edit.. </div>   <div/>');
	
		$('.color_item a').bind('click', function(){
		theme = $(this).attr('rel');
			$.cookie('theme', theme, { expires: 7 });
			location.reload();
			
			
	});
	
	$('.settings').bind('click', function(){
		panel.toggleClass('show');
	
	});
});

$(window).load(function(){
	setTimeout("$('body').find('.panel').removeClass('opacity')",800);
	setTimeout("$('body').find('.panel').removeClass('show')",1600);
	
});
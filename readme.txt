****************First of all thanks for purchasing this theme******************

*****Installation******* 
1. Place all the files in the root folder of your website.
2. Open up index.html and then goto line number 472, remove the follow lines

		<!-- The following panel.js is only for demo which makes to switch between themes please remove on production site-->
		<script type="text/javascript" src="js/panel.js"></script> 
 Then its all yours to use .
 
 
 ******* Theme change *************
 1. Open main.less file in css folder 
 2. Goto line number 27 , there is a code like this " .customTheme(#282827,#f05f5f); " (exluding qoute marks).
 3. Change that line to required theme , for example you want to install theme1 then change 
	      
		  .customTheme(#282827,#f05f5f);   TO .theme1();
		  
4. If you want to use custom colors then try changing the color values in between the function.

        lets say .customTheme(#282827,#f05f5f);  as .customTheme(A,B);
		so you can place any colors inplace of A and B. 
		
P.S. Dont forget that if you are changing themes like above then it should be with the line 27 only

5. If you want to change specific content or parts of the website color schemes, please make a backup of main.less and then try changing the variables defined from line 6 to 25. I wish you play well with them ;)


		



Resources and licenses :
Responsive showcase image - http://www.pixeden.com/
img/profile.jpg - http://blacklistedphotos.blogspot.in/
img/gallery/  - http://urdunews.wordpress.com/page/15/

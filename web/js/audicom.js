var window_ = jQuery(window);
jQuery(function($){
	
	//anchorStuff();
	jQuery('a[href*="#"]:not([href="#"])').click(function() {	
		
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		var target = jQuery(this.hash);
		target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
		if (target.length) {
			
			if(window_.width()>767){
				
				jQuery('html, body').animate({
				  scrollTop: target.offset().top
				}, 500);
				
			}else{
				
				jQuery('html, body').animate({
				  scrollTop: target.offset().top
				}, 0);
				
			}
		    return false;
		  }
		}
	});
	
	var rnd_message = 0;
	var dwarf_messages =
				['Seite in Arbeit!',
				"I'm on it!",
				"Arbeit, Arbeit!",
				'Rock and Stone!',
				'Under construction!',
				'Zzzzz, Zzzzz, Zzzzzz',
				'...Ich bin vergnügt und froh!',
				' I ❤ AudiCom',
				'...<section id ="home" class = "vcenter"><a href = "#info"><img id = "logo" src="img/logo_audicom.png" alt="Logo Audicom" class = "img-responsive"></a><a href = "#info" class...',
				'All work and no play makes Jack a dull boy All work and no play makes Jack a dull boy All work and no play makes Jack a dull boy'
				];
	
	$( "#under_construction_box" ).hover(
		
		
		function(){
			
			$('#uc_message_box').text(dwarf_messages[rnd_message]);
			rnd_message = Math.floor((Math.random() * dwarf_messages.length));
			$('#uc_message_box').show();
		}, function(){
			$('#uc_message_box').hide();
		}
	);
	
	
	
	
});

//anchors for smooth scrolling
function anchorStuff(){
	
	
}

jQuery(window).on('load', function() {
      
    
    // HIDE PRELAODER
    $(".preloader").addClass("preloader-hidden");

    // SHOW/ANIMATE ANIMATION CONTAINER
    setTimeout(function(){

        $(".hero .animation-container").each(function(){

            var e = $(this);

            setTimeout(function(){

                e.addClass("run-animation");

            }, e.data("animation-delay") );

        });

    }, 900 );

    
});


jQuery(document).ready(function($) {
	"use strict";
    
    
    $(window).on('load', function() {
        
        // HIDE PRELAODER
        $(".preloader").addClass("preloader-hidden");
        
        // SHOW/ANIMATE ANIMATION CONTAINER
        setTimeout(function(){
            
            $(".hero .animation-container").each(function(){

                var e = $(this);

                setTimeout(function(){
                    
                    e.addClass("run-animation");
                    
                }, e.data("animation-delay") );

            });
            
        }, 900 );
        
    });
    
    
    // INIT PARALLAX PLUGIN
    $(".hero .background-content.parallax-on").parallax({
        scalarX: 24,
        scalarY: 15,
        frictionX: 0.1,
        frictionY: 0.1,
    });
    
    
    // OPEN POPUP SEQUENCE
    $(".open-popup").click(function(){
        
        $(".popup").addClass("show");
        $(".popup").append('<div class="close-popup backface"></div>');
        
    });

    // CLOSE POPUP SEQUENCE
    $(document).on('click', '.close-popup', function(){ 
        
        $(".popup").removeClass("show");
        $(".popup .backface").remove();
		$(".error-message").hide();
		$(".success-message").hide();
        
    });
	
	
    
    
    

    
    
});

//  SUBSCRIBE FORM
function sendMail() {
let name = document.getElementById("name").value;
let email = document.getElementById("email").value;

    if (name.trim() !== "" && email.trim() !== "") {
        // Check if the email contains "@" and ".com"
        if (email.includes("@") && email.includes(".com")) {
            let params = {
                name: name,
                email: email
            };

			const serviceID = "service_6vcv0nk";
			const tempateID = "template_f0nxql5";

			emailjs.send(serviceID, tempateID, params)
				.then(function (response) {
					console.log("Success!", response.status, response.text);
					// Hide the error message and show the success message

					document.querySelector(".success-message").innerHTML = "<p>You have Successfully Subscribe to Techllective </p>";
					document.querySelector(".success-message").style.display = "block";
					document.querySelector(".error-message").style.display = "none";
					// Clear the input fields
					document.getElementById('name').value = "";
					document.getElementById('email').value = "";
				}, function (error) {
					console.log("Failed...", error);
					// Hide the success message and show the error message
					document.querySelector(".error-message").innerHTML  = "<p>Email Error </p>";
					document.querySelector(".success-message").style.display = "none";
				});
		} else {
			//console.log("Failed...", error);
			// Hide the success message and show the error message
			document.querySelector(".error-message").innerHTML  = "<p>Invaild Email. Please check your email and try again! </p>";
			document.querySelector(".success-message").style.display = "none";
		}
    } else {
        alert("Name or Email field is empty!");
    }
	
}
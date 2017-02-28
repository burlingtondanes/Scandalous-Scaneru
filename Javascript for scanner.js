function runOCR(url) {
    Tesseract.recognize(url)
         .then(function(result) {
            document.getElementById("ocr_results")
                    .innerText = result.text;
         }).progress(function(result) {
            document.getElementById("ocr_status")
                    .innerText = result["status"] + " (" +
                        (result["progress"] * 100) + "%)";
        });
}
document.getElementById("go_button")
        .addEventListener("click", function(e) {
            var url = document.getElementById("url").value;
            runOCR(url);
        });

$( '.gradient' ).mousemove(function( event ) {
	var elementWidth =  $( this ).width() / 2,
		elementHeight =  $( this ).height() / 2,
		mouseX = event.pageX,
		mouseY = event.pageY,
		angle = Math.round( Math.atan2(mouseY - elementHeight, mouseX - elementWidth) * (180/Math.PI) ),
		backGround = 'linear-gradient(' + angle + 'deg,#4ac1ff,#795bb0)';
	
	$( this ).css( 'background-image', backGround );
});

		
		
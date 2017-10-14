// ==UserScript==
// @name         NetFlix Auto Account selection
// @namespace    https://github.com/seiterseiter/NetflixAutoAccountSelect
// @version      1.2
// @description  Auto selects desired account.
// @author       Original: Guile93 - fixed: seiterseiter
// @include      *://www.netflix.com/browse*
// ==/UserScript==
(function() {
	
	// Type the exact name in the quotes!
	var netflixname="PUT NAME HERE!";
	
	// Dont touch anything below!
	
	var billboardtest = document.getElementsByClassName('billboard-row');
	if (billboardtest.length > 0) {
		console.log("billboard-row found.")
	}else {
		
		var nom =document.getElementsByClassName("profile-name");
		if(nom.length){
			for(var y=0;y<nom.length;y++){
			if(nom[y].textContent==netflixname){
				nom[y].parentElement.click();
			}
		}
	}	
  
}

})();
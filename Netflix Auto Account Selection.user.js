// ==UserScript==
// @name         NetFlix Auto Account selection
// @namespace    https://github.com/seiterseiter/NetflixAutoAccountSelect
// @version      1.2
// @description  Auto selects desired account.
// @author       seiterseiter
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
		var profileclass =document.getElementsByClassName("profile-name");
		if(profileclass.length){
			for(var y=0;y<profileclass.length;y++){
			if(profileclass[y].textContent==netflixname){
				profileclass[y].parentElement.click();
			}
		}
	}	
  
}

})();

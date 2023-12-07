							
								var curtimzn = Intl.DateTimeFormat().resolvedOptions().timeZone;
// India vs restof the world - by class - for all Inc footer contacts, etc -->
								if (curtimzn != "Asia/Calcutta") {
									if(curtimzn != "Asia/Kolkata"){
								var divsToHide = document.getElementsByClassName("price-inr"); 
									for(var i = 0; i < divsToHide.length; i++){
										divsToHide[i].style.visibility = "hidden"; 
										divsToHide[i].style.display = "none";
								}
								var divsToHide = document.getElementsByClassName("price-usd"); 
									for(var i = 0; i < divsToHide.length; i++){
										divsToHide[i].style.visibility = "visible"; 
										divsToHide[i].style.display = "unset"; 
									}
								}}
// End India vs restof the world - by class - for all Inc footer contacts, etc -->										
	switch (curtimzn) {
		// India
	  case "Asia/Kolkata":		
		var divsToHide = document.getElementsByClassName("test-Pakistan"); 
		var count = 2;
		for(var i = 0; i < divsToHide.length; i++){
			divsToHide[i].style.visibility = "visible"; 
			divsToHide[i].style.display = "unset";
			count + 1;
		}
		count = 6 - count; 
		var divsToHide = document.getElementsByClassName("test-india"); 
		for(var i = count; i < divsToHide.length; i++){
			divsToHide[i].style.visibility = "hidden"; 
			divsToHide[i].style.display = "none";
		}
		break;
		// Bangladesh
	  case "Asia/Dhaka":		
		var divsToHide = document.getElementsByClassName("test-bangladesh"); 
		var count = 2;
		for(var i = 0; i < divsToHide.length; i++){
			divsToHide[i].style.visibility = "visible"; 
			divsToHide[i].style.display = "unset";
			count + 1;
		}
		count = 6 - count; 
		var divsToHide = document.getElementsByClassName("test-india"); 
		for(var i = count; i < divsToHide.length; i++){
			divsToHide[i].style.visibility = "hidden"; 
			divsToHide[i].style.display = "none";
		}
		break;
	  case "Asia/Dacca":
		
		var divsToHide = document.getElementsByClassName("test-bangladesh"); 
		var count = 2;
		for(var i = 0; i < divsToHide.length; i++){
			divsToHide[i].style.visibility = "visible"; 
			divsToHide[i].style.display = "unset";
			count + 1;
		}
		count = 6 - count; 
		var divsToHide = document.getElementsByClassName("test-india"); 
		for(var i = count; i < divsToHide.length; i++){
			divsToHide[i].style.visibility = "hidden"; 
			divsToHide[i].style.display = "none";
		}
		break;
		
		
		// Kenya
	  case "Africa/Nairobi":
		
		var divsToHide = document.getElementsByClassName("test-kenya"); 
		var count = 2;
		for(var i = 0; i < divsToHide.length; i++){
			divsToHide[i].style.visibility = "visible"; 
			divsToHide[i].style.display = "unset";
			count + 1;
		}
		count = 6 - count; 
		var divsToHide = document.getElementsByClassName("test-india"); 
		for(var i = count; i < divsToHide.length; i++){
			divsToHide[i].style.visibility = "hidden"; 
			divsToHide[i].style.display = "none";
		}		
		
		break;
		
		// Indonesia / Thailand
	  case "Asia/Bangkok":
				var divsToHide = document.getElementsByClassName("test-indonesia"); 
		var count = 2;
		for(var i = 0; i < divsToHide.length; i++){
			divsToHide[i].style.visibility = "visible"; 
			divsToHide[i].style.display = "unset";
			count + 1;
		}
		count = 2; 
		var divsToHide = document.getElementsByClassName("test-india"); 
		for(var i = count; i < divsToHide.length; i++){
			divsToHide[i].style.visibility = "hidden"; 
			divsToHide[i].style.display = "none";
		}
		break;
		// Indonesia
	  case 	"Asia/Jakarta":
		var divsToHide = document.getElementsByClassName("test-indonesia"); 
		var count = 2;
		for(var i = 0; i < divsToHide.length; i++){
			divsToHide[i].style.visibility = "visible"; 
			divsToHide[i].style.display = "unset";
			count + 1;
		}
		count = 2; 
		var divsToHide = document.getElementsByClassName("test-india"); 
		for(var i = count; i < divsToHide.length; i++){
			divsToHide[i].style.visibility = "hidden"; 
			divsToHide[i].style.display = "none";
		}		
		break;	
	  case "Asia/Jayapura":
		var divsToHide = document.getElementsByClassName("test-indonesia"); 
		var count = 2;
		for(var i = 0; i < divsToHide.length; i++){
			divsToHide[i].style.visibility = "visible"; 
			divsToHide[i].style.display = "unset";
			count + 1;
		}
		count = 2; 
		var divsToHide = document.getElementsByClassName("test-india"); 
		for(var i = count; i < divsToHide.length; i++){
			divsToHide[i].style.visibility = "hidden"; 
			divsToHide[i].style.display = "none";
		}
		break;
	
		// United Arab Emirates
	  case "Asia/Dubai":
		var divsToHide = document.getElementsByClassName("test-india"); 
		for(var i = 0; i < divsToHide.length; i++){
			divsToHide[i].style.visibility = "hidden"; 
			divsToHide[i].style.display = "none";
		}
		var divsToHide = document.getElementsByClassName("test-Dubai"); 
		for(var i = 0; i < divsToHide.length; i++){
			divsToHide[i].style.visibility = "visible"; 
			divsToHide[i].style.display = "unset"; 
		}
		break;
		// Nepal
	  case "Asia/Kathmandu":
		
		var divsToHide = document.getElementsByClassName("test-nepal"); 
		var count = 1;
		for(var i = 0; i < divsToHide.length; i++){
			divsToHide[i].style.visibility = "visible"; 
			divsToHide[i].style.display = "unset";
			count + 1;
		}
		count = 6 - count; 
		var divsToHide = document.getElementsByClassName("test-india"); 
		for(var i = count; i < divsToHide.length; i++){
			divsToHide[i].style.visibility = "hidden"; 
			divsToHide[i].style.display = "none";
		}
		
		break;
      case "Asia/Katmandu":
		
			var divsToHide = document.getElementsByClassName("test-nepal"); 
		var count = 1;
		for(var i = 0; i < divsToHide.length; i++){
			divsToHide[i].style.visibility = "visible"; 
			divsToHide[i].style.display = "unset";
			count + 1;
		}
		count = 6 - count; 
		var divsToHide = document.getElementsByClassName("test-india"); 
		for(var i = count; i < divsToHide.length; i++){
			divsToHide[i].style.visibility = "hidden"; 
			divsToHide[i].style.display = "none";
		}
		break;	
	  default:

	}

window.onload = lightsOut;

function lightsOut(){
	var getTable = document.getElementById("lightsOutTable");
	
	var colCounter = 0;
	
	var numberOfTries = 0;
	
	for(var i = 0; i < 5; i++){
		var cols = document.createElement("tr");
		getTable.appendChild(cols);
			colCounter++
			
		for(var j = 0; j < 5; j++){
			var rows = document.createElement("td");
			cols.appendChild(rows);
			
			var rowCounter = j +1;
			var forID = colCounter + "" + rowCounter;
			rows.setAttribute("id" , forID);
			rows.setAttribute("class" , "light");
			rows.addEventListener("click" , color);
		}
	}
	
	function color(){
		
		var center = parseFloat(this.id);
		var bottom = parseFloat(this.id) +10;
		var top = parseFloat(this.id) -10;
		var left = parseFloat(this.id) -1;
		var right = parseFloat(this.id) +1;
		
		var getBottom = document.getElementById(bottom);
		var getTop = document.getElementById(top);
		var getLeft = document.getElementById(left);
		var getRight = document.getElementById(right);
		
		var getLight = document.getElementsByClassName("light");

		if(center === 11){
				this.classList.toggle("light");
				getBottom.classList.toggle("light");
				getRight.classList.toggle("light");
				numberOfTries++
				}
		
		else if(center === 12 || center === 13 || center === 14){
				this.classList.toggle("light");
				getBottom.classList.toggle("light");
				getRight.classList.toggle("light");
				getLeft.classList.toggle("light");
				numberOfTries++
				}
		
		else if(center === 15){
				this.classList.toggle("light");
				getBottom.classList.toggle("light");
				getLeft.classList.toggle("light");
				numberOfTries++
				}
		
		else if(center === 21 || center === 31 || center === 41){
				this.classList.toggle("light");
				getRight.classList.toggle("light");
				getTop.classList.toggle("light");
				getBottom.classList.toggle("light");
				numberOfTries++
				}
		
		else if(center === 51){
				this.classList.toggle("light");
				getTop.classList.toggle("light");
				getRight.classList.toggle("light");
				numberOfTries++
				}
		
		else if(center === 25 || center === 35 || center === 45){
				this.classList.toggle("light");
				getTop.classList.toggle("light");
				getBottom.classList.toggle("light");
				getLeft.classList.toggle("light");
				numberOfTries++
				}
		
		else if(center === 55){
				this.classList.toggle("light");
				getTop.classList.toggle("light");
				getLeft.classList.toggle("light");
				numberOfTries++
				}
		
		else if(center === 52 || center === 53 || center === 54){
				this.classList.toggle("light");
				getTop.classList.toggle("light");
				getLeft.classList.toggle("light");
				getRight.classList.toggle("light");
				numberOfTries++
				}
		
		else {
				this.classList.toggle("light");
				getBottom.classList.toggle("light");
				getTop.classList.toggle("light");
				getLeft.classList.toggle("light");
				getRight.classList.toggle("light");
				numberOfTries++
				
				}
		
		if(getLight.length === 0){
				document.getElementById("success").innerHTML = "Lights are out! You did it in " + numberOfTries + " tries <p><button onclick='reset()'>Try Again</button></p>";
				numberOfTries = 0;
			
				document.getElementById("tries").classList.toggle("hide");
				document.getElementById("headerTries").classList.toggle("hide");
			
				document.getElementById("dim").classList.toggle("dark");
				
				}
		
				document.getElementById("tries").innerHTML = numberOfTries;
				
	}
	
}

	function reset(){
				 window.location.reload();
	}
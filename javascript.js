function toggleMode() 
{
	var inputs = document.getElementsByClassName("input-field");
    if (document.getElementById("mortgage-layout").style.backgroundImage == 'url("./layout.png")') 
    {
        document.getElementById("mortgage-layout").style.backgroundImage = "url(./layout.jpg)";
        document.getElementById("mortgage-application").style.backgroundColor = "rgba(242,242,242,1)";
        document.getElementById("mortgage-application-header").style.backgroundColor = "rgba(248,205,0,1)";
        document.getElementById("submit-button").style.backgroundColor = "rgba(0,0,0,1)";
        var i;
		for (i = 0; i < inputs.length; i++) {
		    inputs[i].style.backgroundColor = "rgba(242,242,242,1)";
		}
    } 
    else 
    {
        document.getElementById("mortgage-layout").style.backgroundImage = "url(./layout.png)";
        document.getElementById("mortgage-application").style.backgroundColor = "rgba(242,242,242,0.1)";
        document.getElementById("mortgage-application-header").style.backgroundColor = "rgba(248,205,0,0.1)";
        document.getElementById("submit-button").style.backgroundColor = "rgba(0,0,0,0.1)";
        var i;
		for (i = 0; i < inputs.length; i++) {
		    inputs[i].style.backgroundColor = "rgba(242,242,242,0.1)";
		}
   }
}

var clickCounter=0;
var modal = document.getElementById('modal-div');
var span = document.getElementsByClassName("close")[0];

function getHelp(id)
{
	clickCounter++;
	var text;
	switch(clickCounter){
		case 1:
			alert("There is nothing here");
			break;
		case 2:
			alert("Did you not understand?");
			break;
		case 3:
			alert("You are too persistent");
			break;
		case 4:
			alert("Seriously, stop!");
			break;
		case 5:
			alert("Fine... I will show it for you");
			break;
		default:
			switch(id){
				case 1:
					text="Акция";
					break;
				case 2:
					text="Лояльны к кредитной истории";
					break;
				case 3:
					text="Особые условия по военной ипотеке";
					break;
				case 4:
					text="Ипотека с государственной поддержкой для семей с детьми";
					break;
				case 5:
					text="Индивидуальный подход к клиенту";
					break;
			}
			document.getElementById('modal-message').innerHTML=text;
			modal.style.display = "block";
			break;
	}
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
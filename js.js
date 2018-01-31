var slika1=-1;
var redova1= 0;
function dodajSliku(){
	if(slika1>1 || slika1==-1){
		redova1++;
		if(redova1>2){
			window.alert("alo bre");
			return;
		}
		var novRed = document.createElement('tr');
		document.getElementById('table').appendChild(novRed);
		slika1=0
	}
	var red= document.getElementById('table').lastChild;
	var td=document.createElement('td');
	var slika=document.createElement('img');
	
	red.appendChild(td);
	td.appendChild(slika);
	if(slika1==0 &&redova1==1 ||slika1==1&&redova1==2){
	slika.src='1.gif';
	}else{
	slika.src='pingviin.png';
	}
	slika.style.width='200px';
	slika.style.height='200px';
	slika1++;
	
}
function oduzmi() {
	 
	if(table.lastChild){
		table.removeChild(table.lastChild);
	}
}
document.getElementById('the-box').addEventListener('click', function(){
	if(this.classList.contains('bad')){
		this.classList.remove('bad');
		this.classList.add('good');
	}else{
			alert("You can proceed");
	}
});


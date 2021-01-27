console.log("it's working")

let initialTheme = localStorage.getItem('initialTheme')

if (initialTheme == null) {
	setTheme('light')
}else{
	setTheme(initialTheme)
}

let themeDots = document.getElementsByClassName('theme-dot')

for(i=0; themeDots.length > i;i++){
	themeDots[i].addEventListener('click', function(){
		let theme = this.dataset.theme
		console.log('Colour clicked', theme)
		setTheme(theme)
	})
}

function setTheme(theme){
	if(theme == 'light'){
		 document.getElementById('theme-style').href = "default.css"
	}

	if(theme == 'blue'){
		 document.getElementById('theme-style').href = "blue.css"
	}

	if(theme == 'green'){
		 document.getElementById('theme-style').href = "green.css"
	}

	if(theme == 'purple'){
		document.getElementById('theme-style').href = "purple.css"
	}

	localStorage.setItem('initialTheme', theme)
}

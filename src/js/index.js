window.addEventListener('load', function(){
	setTimeout(function(){
		var body = document.body;
		body.classList.remove('ov-h');
		var preloader = document.querySelector('.preloader');
		preloader.classList.add('d-n');
	}, 4000);
});
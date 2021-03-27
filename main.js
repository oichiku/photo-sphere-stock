window.onload = function() {
	loadPredefinedPanorama();
};

// Load the predefined panorama
function loadPredefinedPanorama(evt) {
	evt.preventDefault();

	// Loader
	var loader = document.createElement('div');
	loader.className = 'loader';

	// Panorama display
	var div = document.getElementById('container');
	div.style.height = '30px';

	var PSV = new PhotoSphereViewer({
		// Path to the panorama
		panorama: getParam('path'),

		// Container
		container: div,

		// Deactivate the animation
		time_anim: false,

		// Display the navigation bar
		navbar: true,

		// Resize the panorama
		size: {
			width: '100%',
			height: '500px'
		},

		// HTML loader
		loading_html: loader,

		// Overlay
		overlay: {
			image: 'overlay.png',
			size: {
				width: '42px'
			},
			position: {
				x: 'right',
				y: 'top'
			}
		}
	});
}

function getParam(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

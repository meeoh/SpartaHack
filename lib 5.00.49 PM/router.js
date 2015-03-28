Router.configure({
	layoutTemplate: "layout"
});

Router.map(function(){
	this.route('index', {
		path: '/'
		
	});

	this.route('information', {
		path: '/information'
	});
});
var SearchFormView = Backbone.View.extend({
	el: 'div#search',

	event: {
		'input#search click': 'getMoviesForCollection'
	},
	getMoviesForCollection: function() {
		//get info from api
	
		this.moviecollection.search(userInput);
		//wait for a response
		//filter response for model data
		//take params and create movieItem object
		//this.collection.create(movieItemObject);
		//wait for server to resond 
	}
});
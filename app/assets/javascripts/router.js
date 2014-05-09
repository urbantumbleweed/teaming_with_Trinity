var MovieRouter = Backbone.Router.extend({
	routes: {
		"/": "index"
	},

	initialize: function() {
		var movieCollection = new MovieCollection();
		this.movieCollectionView = new MovieCollectionView({collection: movieCollection});
		this.searchFormView = new SearchFormView({collection: movieCollection});
	},
	start: function() {
		Backbone.history.start();
	}
});
var MovieCollection = Backbone.Collection.extend({
	
	search: function(queryString){
			var OMDBSearchURL = 'http://www.omdbapi.com/?s=';
			var OMDBMovieResponse= ($.ajax({url: OMDBSearchURL + queryString, method: 'get', datatype: json })).responseText;
			return OMDBMovieResponse;
	},

	addMovies: function(){
		this.addSingle();
	},

	addSingle: function(){

	}
});
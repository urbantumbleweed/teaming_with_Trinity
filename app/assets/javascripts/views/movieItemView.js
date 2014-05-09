var MovieItemView = Backbone.View.extend({
	tagName: 'div',
	className: 'movie-item',

	initialize: function() {
		this.template = _.template($('#movie-item').html());
		this.render();
		console.log("Im in the movie-item initialize");
	},

	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
		console.log("I'm rendered");
	}
});
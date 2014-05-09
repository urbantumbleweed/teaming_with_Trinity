class MoviesController < ApplicationController

  def index
  	@movies = Movie.all
  	respond_to do |f|
  		f.html {}
  		f.json { render json: @movies.to_json}
  	end
  end

end

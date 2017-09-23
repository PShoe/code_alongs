require 'httparty'
require 'pry'



@result = HTTParty.get("http://omdbapi.com/?s=#{@movie_title}.&apikey=2f6435d9").parsed_response

binding.pry

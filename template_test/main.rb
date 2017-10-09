
require 'sinatra'

get '/' do
  @name = "Pauline"
  erb :index
end

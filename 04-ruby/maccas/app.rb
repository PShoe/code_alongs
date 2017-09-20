require 'pry'
require 'sinatra'
require 'sinatra/reloader'

get '/fries' do
  if params["size"] == "large"
    return "hangry"
  elsif params["size"] == "medium"
    return "hungry"
  elsif params["size"] == "small"
    return "snacking"
  end
end

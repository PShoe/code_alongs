require 'sinatra'
require 'sinatra/reloader'
# require 'pry'

get '/' do
  erb :index
end

get '/answer' do
  @num1 = params[:first].to_i
  @num2 = params[:second].to_i
  erb :answer
end

# binding.pry

require 'sinatra'

get '/about' do
  response = 'lucky13 ' + 'is awesome'
  return response
end

get '/donate' do
  erb(:donate)
end

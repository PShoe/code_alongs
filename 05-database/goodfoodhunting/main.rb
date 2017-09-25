
require 'sinatra'
require 'sinatra/reloader'
require 'pg'

get '/' do
  erb :index
end

get '/dishes' do
  conn = PG.connect({ dbname: 'goodfoodhunting' })
  @dishes = conn.exec('SELECT * FROM dishes;')
  erb :dishes
end

get '/dishes/:id' do
  conn = PG.connect({ dbname: 'goodfoodhunting' })
  sql = "SELECT * FROM dishes WHERE id = #{ params[:id] };"
  @dish = conn.exec(sql).first
  erb :show
end

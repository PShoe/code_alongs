
require 'sinatra'
require 'sinatra/reloader'
require 'pg'
require 'pry'


def run_db(sql)
  conn = PG.connect(dbname: "goodfoodhunting")
  conn.exec(sql)
end

get '/' do
  redirect "/dishes"
end

get '/dishes' do
  # conn = PG.connect({ dbname: 'goodfoodhunting' })
  @dishes = run_db('SELECT * FROM dishes;')
  erb :dishes
end

get '/dishes/new' do
  erb :new
end

get '/dishes/:id' do
  # conn = PG.connect({ dbname: 'goodfoodhunting' })
  sql = "SELECT * FROM dishes WHERE id = #{ params[:id] };"
  @dish = run_db(sql).first
  erb :show
end

get '/dishes/:id/edit' do
  sql = "SELECT * FROM dishes WHERE id = #{ params[:id] };"
  @dish = run_db(sql).first
  erb :edit
end

put '/dishes/:id' do
  sql = "UPDATE dishes SET name = '#{params[:name]}', image_url = '#{params[:image_url]}' WHERE id = #{params[:id]};"
  run_db(sql)
  redirect "/dishes/#{params[:id]}"
end

post '/dishes' do
  sql = "INSERT INTO dishes (name, image_url) VALUES('#{params[:name]}', '#{params[:image_url]}');"
  run_db(sql)
  redirect '/dishes'
end

# get '/dishes/:id/delete' do
#   sql = "SELECT * FROM dishes WHERE id = #{ params[:id] };"
#   @dish = run_db(sql).first
#   erb :delete
# end

delete '/dishes/:id' do
  sql = "DELETE FROM dishes WHERE id = #{params[:id]};"
  run_db(sql)
  redirect "/dishes"
end
